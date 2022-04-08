/*
* This function takes the template (with id #AthletesTemplate) from "Alpine Skiing.html" 
* and populates the card with the Athletes participating in the event. 
*/
function displayCards() {
    // referring to the template in "Alpine Skiing.html"
    let cardTemplate = document.getElementById("AthletesTemplate");

    // returns information from the "Athletes" database in firestore
    db.collection("Athletes").get()
        // all code after line 11 waits for line 7 and 10 to be completed first
        .then(snap => {
            var i = 1;

            // for each athlete in the "Athletes" database, will check if the "Event" field
            // matches up with the event being displayed, in this case "Slalom"
            // doc refers to the field in firestore database
            snap.forEach(doc => {
                if (doc.data().Event == "Slalom") {
                    // retriving strings from the database and creating variables for easy reference
                    var firstname = doc.data().FirstName;
                    var lastname = doc.data().LastName;
                    var country = doc.data().Country;

                    // used to create a separate card for each athletes that are participating in the 
                    // "Slalom" event
                    let newcard = cardTemplate.content.cloneNode(true);

                    // Populating the card by referring to the class from the template 
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