/* Lines 5-12 check to see if a user has been authenticated thru firebase authentication.
*  If they have, run the displayHighlights function. If they have not been authenticated, redirect
*  to the login page so they can be authenticated.
*/
firebase.auth().onAuthStateChanged(user => {
    if (user) {
        displayHighlights(user)
    } else {
        console.log("No user is signed in");
        window.location.href = "login.html"
    }
});


/*
* This function populates a template contained in "highlight.html" for each favorited athlete in the 
* "users" collection's favoriteath array field. Data is stored in the "pictures" collection that 
* corresponds to the name of the favorited athlete, a reference to the image of the highlight, and a 
* description to the picture.
*
* Note that the parameter "user" is defined in line 5 as a logged in user
*/
function displayHighlights(user) {

    // refers to the logged in user's document in firestore and retrieves all fields
    db.collection("users").doc(user.uid).get()

        // waits for line 26 to be executed before proceeding
        // parameter userDoc refers to the individual fields in a logged in user's document
        .then(userDoc => {

            // assign variable favoritesArray to represent the favorited athletes array stored in a user's document
            var favoritesArray = userDoc.data().favoriteath;

            let cardTemplate = document.getElementById("AthletesTemplate");

            // for each element in the array, the following code will be exectued 
            // athlete parameter represents the data stored in the favoritesArray array
            favoritesArray.forEach(athlete => {

                // refers to the "pictures" collection, .where finds all pages where the "name" field from the
                // "pictures collection" matches with the name of a favorited athlete from a user's favoriteath array 
                // and retrieves it. Everything on line 44 before .then is performed in order.
                // snap parameter is an individual element where the conditions are met
                db.collection("pictures").where("name", "==", athlete).get().then(snap => {
                    size = snap.size;
                    console.log(size);
                    queryData = snap.docs;

                    if (size == 1) {

                        // assign doc to refer back to all fields in a particular athlete's document in the "pictures" collection
                        var doc = queryData[0].data();

                        // assign variables from a particular athlete's document from the "pictures" collection for easy reference
                        var name = doc.name;
                        var picture1 = doc.pic1;
                        var descr1 = doc.desc1;

                        // used to create a separate card for each favorited event from a user's favoriteath array field
                        let newcard = cardTemplate.content.cloneNode(true);

                        // Populates each card for each photo highlight with a photo and a description
                        newcard.querySelector('.card-image').src = "./images/" + name + picture1 + ".jpg";
                        newcard.querySelector('.card-desc').innerHTML = descr1;

                        // adds the ability to redirect to an athlete's profile page by clicking on the image
                        newcard.querySelector('.card-image').onclick = function(){
                            window.location.href = name + ".html"
                        }
                        
                        // Add all created cards to the "AthletesCardGroup" div in HTML to display on webpage
                        AthletesCardGroup.appendChild(newcard);
                    }
                })
            })
        })
}





