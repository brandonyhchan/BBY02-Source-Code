/* Lines 6-18 check to see if a user has been authenticated thru firebase authentication.
*  If they have, run the displayCards function. If they have not been authenticated, redirect
*  to the login page so they can be authenticated.
*/
var currentUser;
firebase.auth().onAuthStateChanged(user => {
    if (user) {
        currentUser = db.collection("users").doc(user.uid);
        // console.log(currentUser);

        displayCards("Athletes")
    } else {
        // No user is signed in.
        console.log("No user is signed in");
        window.location.href = "loading.html";
    }
});


/* This function writeAthletes was used to initally create a database called "Athletes" to store
*  the associated data for each athlete. Some information was updated over time via the firebase 
*  console. 
*/
function writeAthletes() {
    // create variable to quickly refer to the "Athletes" database
    var AthletesRef = db.collection("Athletes");

    // Add a document in "Athletes" for Tessa
    AthletesRef.add({
        FirstName: "Tessa",
        LastName: "Virtue",
        Age: "32",
        Gender: "Female",
        Country: "Canada",
        Sport: "Figure Skating",
        Event: "Ice Dance",
        GoldMedals: "3",
        SilverMedals: "2",
        BronzeMedals: "0"
    });

    // Add a document in "Athletes" for Scott
    AthletesRef.add({
        FirstName: "Scott",
        LastName: "Moir",
        Age: "34",
        Gender: "Male",
        Country: "Canada",
        Sport: "Figure Skating",
        Event: "Ice Dance",
        GoldMedals: "3",
        SilverMedals: "2",
        BronzeMedals: "0"
    });

    // Add a document in "Athletes" for Shawn
    AthletesRef.add({
        FirstName: "Shawn",
        LastName: "White",
        Age: "35",
        Gender: "Male",
        Country: "United States",
        Sport: "Snowboard",
        Event: "Halfpipe",
        GoldMedals: "3",
        SilverMedals: "0",
        BronzeMedals: "0"
    });

    // Add a document in "Athletes" for Joo Hyuk
    AthletesRef.add({
        FirstName: "Joo Hyuk",
        LastName: "Nam",
        Age: "34",
        Gender: "Male",
        Country: "South Korea",
        Sport: "Alpine Skiing",
        Event: "Slalom",
        GoldMedals: "1",
        SilverMedals: "3",
        BronzeMedals: "1"
    });

    // Add a document in "Athletes" for Janice
    AthletesRef.add({
        FirstName: "Janice",
        LastName: "Zhang",
        Age: "29",
        Gender: "Female",
        Country: "China",
        Sport: "Speed Skating",
        Event: "Short Track 1500m",
        GoldMedals: "2",
        SilverMedals: "1",
        BronzeMedals: "2"
    });

    // Add a document in "Athletes" for Himari
    AthletesRef.add({
        FirstName: "Himari",
        LastName: "Takahashi",
        Age: "23",
        Gender: "Female",
        Country: "Japan",
        Sport: "Speed Skating",
        Event: "Short Track 1500m",
        GoldMedals: "0",
        SilverMedals: "0",
        BronzeMedals: "1"
    });
}
// writeAthletes();

/*
* This function populates a template contained in "Athletes.html" for each athlete with
* their first and last names, country, and the event they are competing in. There is also
* a refernce to the favoriteAthlete function on line 155 that adds the favorited athlete to 
* an array in the "users" database, to be referenced in other pages of our app.
*
* Note that the parameter "collection" is defined in line 11 as the "Athletes" collection in firestore
*/
function displayCards(collection) {
    let cardTemplate = document.getElementById("AthletesTemplate");

    // gets all elements from the "Athletes" collection in firestore
    db.collection(collection).get()
        // waits for line 124 and 126 to be completed before continuing
        .then(snap => {
            var i = 1;
            // for each element in the "Athletes" collection, will do the following lines:
            // doc parameter refers to each field in an athlete's document
            snap.forEach(doc => {
                // create variables for first, last names, country and event for easy reference
                var firstname = doc.data().FirstName;
                var lastname = doc.data().LastName;
                var country = doc.data().Country;
                var events = doc.data().Event;

                // used to create a separate card for each athlete in the "Athletes" collection
                let newcard = cardTemplate.content.cloneNode(true);

                //Populates the card template with information from each athlete's document 
                newcard.querySelector('.card-firstname').innerHTML = firstname;
                newcard.querySelector('.card-lastname').innerHTML = lastname;
                newcard.querySelector('.card-country').innerHTML = country;
                newcard.querySelector('.card-event').innerHTML = events;
                newcard.querySelector('.card-image').src = "./images/" + firstname + ".png";

                // adds the ability to redirect to the athlete's profile page by clicking on their photo
                newcard.querySelector('.card-image').onclick = function () {
                    window.location.href = firstname + ".html";
                }

                // Refers to the favorite icon in the AthleteCard template in HTML file 
                // once the icon has been clicked, will refer to the favoriteAthlete function 
                newcard.querySelector('i').id = 'save-' + firstname;
                newcard.querySelector('i').onclick = () => favoriteAthlete(firstname);

                //Add all cards created to the "Athletes-go-here" div in HTML to display on webpage
                document.getElementById(collection + "-go-here").appendChild(newcard);
                i++;
            })
        })

}

/* 
* This function creates an array in the "users" database called "favoriteath" that stores the 
* name of the athlete which was favorited. An athlete is favorited by the user clicking on the 
* heart icon associated with an athlete's card.
*
* The firstname parameter is defined on line 143, the athlete's firstname from the "Athletes" collection
*/
function favoriteAthlete(firstname) {
    // stores an array in the "users" collection 
    currentUser.set({
        favoriteath: firebase.firestore.FieldValue.arrayUnion(firstname)
    }, {
        merge: true
    })
        .then(function () {
            // console.log("favorite athlete saved for: " + currentUser);

            // changes the icon for the favorited athlete's card to a solid one,
            // referenced by 'favorite' in google icons
            var iconID = 'save-' + firstname;
            document.getElementById(iconID).innerText = 'favorite';
        });

}

