var currentUser;
firebase.auth().onAuthStateChanged(user => {
    if (user) {
        currentUser = db.collection("users").doc(user.uid);
        // console.log(currentUser);
        console.log(currentUser);
        displayCards();
    } else {
        // No user is signed in.
        console.log("No user is signed in");
        window.location.href = "loading.html";
    }
});
var user2;
var i;

function displayCards() {

    currentUser.get()
    .then(userDoc=>{
        user2 = userDoc.data().name;
        
    })
    let cardTemplate = document.getElementById("AthletesTemplate");

    db.collection("users").get()
        .then(snap => {
            i = 1;
            snap.forEach(doc => {
                    var firstname = doc.data().favoriteath;

                    var user = doc.data().name;
                   
                    if (user == user2){

                    
                    // var lastname = doc.data().LastName;
                    // var country = doc.data().Country;

                    let newcard = cardTemplate.content.cloneNode(true);
                    //update title and text and image
                    newcard.querySelector('.card-image').src = "./images/" + firstname + "pic1.jpg";                    
                                        
                    //attach to gallery
                    document.getElementById("Athletes-go-here").appendChild(newcard);
                    i++;
                
                    }
            })
        })

}

displayCards("users");




