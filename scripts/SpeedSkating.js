/*
* This function takes the template (with id #AthletesTemplate) from "Speed Skating.html" 
* and populates the card with the Athletes participating in the event. 
*/
function displayCards() {
    
    // referring to the template in "Speed Skating.html"
    let cardTemplate = document.getElementById("AthletesTemplate");

    // returns information from the "Athletes" database in firestore
    db.collection("Athletes").get()

        // all code after line 11 waits for line 8 and 11 to be completed first before executing
        // snap parameter refers to a single athlete document in the "Athletes" collection
        .then(snap => {
            var i = 1;

            // for each athlete in the "Athletes" collection, will check if the "Event" field 
            //matchese up with the event being displayed, in this case "Speed Skating"
            // doc refers to the field in the "Athletes" database who is participating in the Speed Skating event
            snap.forEach(doc => { 
                if (doc.data().Event == "Short Track 1500m") {

                    // retriving strings from the database and creating variables for easy reference
                    var firstname = doc.data().FirstName;
                    var lastname = doc.data().LastName;
                    var country = doc.data().Country;

                    // used to create a spearate card for each athlete that is participating in the "Speed Skating" event
                    let newcard = cardTemplate.content.cloneNode(true);

                    //Populating the card by referring to the class from the template 
                    // with the athlete's first and last name, their country and 
                    // their image. Also adds href functionality to the athlete's picture
                    newcard.querySelector('.card-firstname').innerHTML = firstname;
                    newcard.querySelector('.card-lastname').innerHTML = lastname;
                    newcard.querySelector('.card-country').innerHTML = country;
                    newcard.querySelector('.card-image').src = "./images/" + firstname + ".png";
                    newcard.querySelector('.card-image').onclick = function () {
                        window.location.href = firstname + ".html";
                    }
                    //attach the card to the template
                    document.getElementById("Athletes-go-here").appendChild(newcard);
                    i++;
                }
            })
        })
}

displayCards("Athletes");