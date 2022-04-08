/* Lines 5-13 check to see if a user has been authenticated thru firebase authentication.
*  If they have, runs the getFavorites and getEventFavorites functions. If they have not 
*  been authenticated, redirect to the login page so they can be authenticated.
*/
firebase.auth().onAuthStateChanged(user => {
    if (user) {
        getAthleteFavorites(user)
        getEventFavorites(user)
    } else {
        console.log("No user is signed in");
        window.location.href = "login.html"
    }
});


/* This function getAthleteFavorites retrives the favorited athletes stored as their first name inside 
*  the "favoriteath" array from the "users" collection and populates the favourites.html page with the 
*  specified information.
*   
*  Note the parameter user is defined on line 5, and refers to a logged in user.
*/
function getAthleteFavorites(user) {

    // gets all fields from a particular user's document
    db.collection("users").doc(user.uid).get()

        // waits for line 25 to complete before continuing
        // userDoc parameter refers to the fields in a user's document
        .then(userDoc => {

            // sets favorites variable to the favoriteath array from each user's document
            var favorites = userDoc.data().favoriteath;

            let CardTemplate = document.getElementById("AthletesTemplate");

            // for each element in the favorites array defined in line 32
            // thisAthFav parameter is the data stored in each array element (in this case, a string)
            favorites.forEach(thisAthFav => {

                // Refers to the "Athletes" collection, .where finds all pages where the "FirstName" field from the 
                // "Athletes" collection matches with the name of a favorited athlete from a user's favoriteath array
                // and retrieves it. Everything on line 43 before .then is performed in order.
                // snap parameter is an individual element where the conditions are met
                db.collection("Athletes").where("FirstName", "==", thisAthFav).get().then(snap => {
                    size = snap.size;
                    queryData = snap.docs;

                    if (size == 1) {

                        // assign doc to refer back to all fields in a particular athlete's document
                        var doc = queryData[0].data();

                        // assign variables from a particular athlete's document for easy reference
                        var firstname = doc.FirstName;
                        var lastname = doc.LastName;
                        var country = doc.Country;
                        var events = doc.Event;

                        // used to create a separate card for each favorited athlete in a user's favoriteath array field
                        let newCard = CardTemplate.content.cloneNode(true);

                        // Populates each card for each athlete based on the template with information from each athlete's document
                        newCard.querySelector('.card-firstname').innerHTML = firstname;
                        newCard.querySelector('.card-lastname').innerHTML = lastname;
                        newCard.querySelector('.card-country').innerHTML = country;
                        newCard.querySelector('.card-event').innerHTML = events;
                        newCard.querySelector('.card-image').src = "./images/" + firstname + ".png";

                        // adds the ability to redirect to the athlete's profile page by clicking on their photo
                        newCard.querySelector('.card-image').onclick = function () {
                            window.location.href = firstname + ".html"
                        }

                        //Add all cards created to the "AthletesCardGroup" div in HTML to display on webpage
                        AthletesCardGroup.appendChild(newCard);
                    }
                })
            });
        })
}


/* This function getEventFavorites retrives the favorited events stored as the event name inside 
*  the "favoriteEvent" array from the "users" collection and populates the favourites.html page with the 
*  specified information.
*   
*  Note the parameter user is defined on line 5, and refers to a logged in user.
*/
function getEventFavorites(user) {

    // gets all fields from a particular user's document
    db.collection("users").doc(user.uid).get()

        // waits for line 92 to complete before continuing
        // userDoc parameter refers to the fields in a user's document
        .then(userDoc => {

            // sets favEventss variable to the favoriteEvent array from each user's document
            var favEvents = userDoc.data().favoriteEvent;

            let Template = document.getElementById("EventsTemplate");

            // for each element in the favEvents array defined in line 99
            // thisEvent parameter is the data stored in each array element (in this case, a string)
            favEvents.forEach(thisEvent => {

                // Refers to the "Events" collection, .where finds all pages where the "Event" field from the 
                // "Events" collection matches with the name of a favorited event from a user's favoriteEvents array
                // and retrieves it. Everything on line 111 before .then is performed in order.
                // snap parameter is an individual element where the conditions are met
                db.collection("Events").where("Event", "==", thisEvent).get().then(snap => {
                    size = snap.size;
                    queryData = snap.docs;

                    if (size == 1) {

                        // assign doc to refer back to all fields in a particular athlete's document
                        var doc = queryData[0].data();

                        // assign variables from a particular athlete's document for easy reference
                        var event = doc.Event;
                        var sport = doc.Sport;
                        var date = doc.Date;
                        var type = doc.Type;
                        var id = doc.ID;

                        // used to create a separate card for each favorited event from a user's favoriteEvent array field
                        let newcard = Template.content.cloneNode(true);

                        // Populates each card for each event based on the template with information from each event's document
                        newcard.querySelector('.event-title').innerHTML = sport;
                        newcard.querySelector('.event-event').innerHTML = event;
                        newcard.querySelector('.event-type').innerHTML = type;
                        newcard.querySelector('.event-date').innerHTML = date;
                        newcard.querySelector('.event-image').src = "./images/" + id + ".png";
                        // adds the ability to redirect to the event's information page by clicking on its photo
                        newcard.querySelector('.event-image').onclick = function () {
                            window.location.href = sport + ".html"
                        }

                        //Add all cards created to the "EventsCardGroup" div in HTML to display on webpage
                        EventsCardGroup.appendChild(newcard);
                    }
                })
            })
        })
}
