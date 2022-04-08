/* Lines 6-18 check to see if a user has been authenticated thru firebase authentication.
*  If they have, run the displayCards function. If they have not been authenticated, redirect
*  to the login page so they can be authenticated.
*/
var currentUser;
firebase.auth().onAuthStateChanged(user => {
    if (user) {
        currentUser = db.collection("users").doc(user.uid);
        // console.log(currentUser);

        displayCards("Events")
    } else {
        // No user is signed in.
        console.log("No user is signed in");
        window.location.href = "loading.html";
    }
});

/* This function writeEvents was used to initally create a database called "Events" to store
*  the associated data for each events. Some information was updated over time via the firebase 
*  console. 
*/
function writeEvents() {

    // create variable to quickly refer to the "Events" database
    var eventsRef = db.collection("Events");

    // Add a document in "Events" for the Alpine Skiing Slalom event
    eventsRef.add({
        Sport: "Alpine Skiing",
        Gender: "Mens",
        Event: "Slalom",
        Type: "Quarter- finals",
        Date: "February 10, 2030",
        Time: "2:00 pm",
        Location: "Whistler Creekside",
        ID: "ALPSKI"
    });

    // Add a document in "Events" for the Speed Skating Short Track 1500m event
    eventsRef.add({
        Sport: "Speed Skating",
        Gender: "Womens",
        Event: "Short Track 1500m",
        Type: "Semi- finals",
        Date: "February 13, 2030",
        Time: "10:00 am",
        Location: "Pacific Coliseum",
        ID: "SPDSKATE"
    });

    // Add a document in "Events" for the Snowboarding Halfpipe event
    eventsRef.add({
        Sport: "Snowboarding",
        Gender: "Mens",
        Event: "Halfpipe",
        Type: "Finals",
        Date: "February 14, 2030",
        Time: "12:00 pm",
        Location: "Cypress Mountain",
        ID: "SNOWBOARD"
    });

    // Add a document in "Events" for the Figure Skating Ice Dance event
    eventsRef.add({
        Sport: "Figure Skating",
        Gender: "Pairs",
        Event: "Ice Dance",
        Type: "Quarter- Finals",
        Date: "February 16, 2030",
        Time: "3:00 pm",
        Location: "Pacific Coliseum",
        ID: "FIGSKATE"
    });

    // Add a document in "Events" for the Freestyle Skiing Ski Cross event
    eventsRef.add({
        Sport: "Freestyle Skiing",
        Gender: "Mens",
        Event: "Cross",
        Type: "Finals",
        Date: "February 24, 2030",
        Time: "4:00 pm",
        Location: "Cypress Mountain",
        ID: "FREESTYSKI"
    });
}

/*
* This function populates a template contained in "events.html" for each event with
* its sport, specific event, which gender, the type of event, and the date. There is also
* a refernce to the favoriteEvent function on line 160 that adds the favorited event to 
* an array in the "users" database, to be referenced in other pages of our app.
*
* Note that the parameter "collection" is defined in line 11 as the "Events" collection in firestore
*/
function displayCards(collection) {
    let cardTemplate = document.getElementById("EventsTemplate");

    // refers to the "Events" collection in firestore
    db.collection(collection)

        // will order the cards based on the timestamped "dateorder" field in each event
        .orderBy("dateorder")

        // gets all elements from the "Events" collection in firestore
        .get()

        // waits for lines 98- 107 to be executed before continuing
        .then(snap => {
            var i = 1;

            // for each element in the "Events" collection, will do the following lines of code
            // doc parameter refers to each field in an event's document
            snap.forEach(doc => { 

                // create variables for the sport, event, gender competing, type of event and date for easy reference
                var sport = doc.data().Sport;   
                var event = doc.data().Event;  
                var gender = doc.data().Gender; 
                var type = doc.data().Type;
                var date = doc.data().Date;

                // used to create a spearate card for each event in the "Events" collection
                let newcard = cardTemplate.content.cloneNode(true);

                // create a string from the ID field in each event's collection to refer to the picture with the same name
                var code = doc.data().ID;

                //Populates each card for each event based on the template with information from each event's document
                newcard.querySelector('.card-title').innerHTML = sport;
                newcard.querySelector('.card-event').innerHTML = event;
                newcard.querySelector('.card-gender').innerHTML = gender;
                newcard.querySelector('.card-type').innerHTML = type;
                newcard.querySelector('.card-date').innerHTML = date;
                newcard.querySelector('.card-image').src = "./images/" + code + ".png";
               
                // adds the ability to redirect to the event's information page by clicking on the event's icon
                newcard.querySelector('.card-image').onclick = function () {
                    window.location.href = sport + ".html"
                }

                // Refers to the favorite icon in the EventCard template in HMTL file
                // once the icon has ben clicked, will refer to the favoriteEvent function
                newcard.querySelector('i').id = 'save-' + event;
                newcard.querySelector('i').onclick = () => favoriteEvent(event);

                //Adds all cards created to the "Events-go-here" div in HTML to display on webpage
                document.getElementById(collection + "-go-here").appendChild(newcard);
                i++;
            })
        })
}

/* 
* This function creates an array in the "users" database called "favoriteEvent" that stores the 
* name of the event which was favorited. An athlete is event by the user clicking on the 
* heart icon associated with an event's card.
*
* The event parameter is defined on line 116, the event from the "Events" collection
*/
function favoriteEvent(event) {
    
    // stores an array in the "users" collection
    currentUser.set({
        favoriteEvent: firebase.firestore.FieldValue.arrayUnion(event)
    }, {
        merge: true
    })
        .then(function () {
            // console.log("favorite event saved for: " + currentUser);

            //changes the icon for the favorited event's card to a solid one,
            // referenced by 'favorite in google icons
            var iconID = 'save-' + event;
            document.getElementById(iconID).innerText = 'favorite';
        });

}