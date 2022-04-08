/*
* This function takes the template (with id #AthletesTemplate) from "Figure Skating.html" 
* and populates the card with the Athletes participating in the event. 
*/
function displayCards() {

    // referring to the template in "Figure Skating.html"
    let cardTemplate = document.getElementById("AthletesTemplate");

    // returns information from the "Athletes" database in firestore
    db.collection("Athletes").get()

        // all code after line 14 waits for line 8 and 11 to be completed before executing
        .then(snap => {
            var i = 1;
            snap.forEach(doc => {
                if (doc.data().Event == "Ice Dance"){
                    var firstname = doc.data().FirstName;
                    var lastname = doc.data().LastName;
                    var country = doc.data().Country;
                    let newcard = cardTemplate.content.cloneNode(true);
    
                    //update title and text and image
                    newcard.querySelector('.card-firstname').innerHTML = firstname;
                    newcard.querySelector('.card-lastname').innerHTML = lastname;
                    newcard.querySelector('.card-country').innerHTML = country;
                    newcard.querySelector('.card-image').src = "./images/" + firstname + ".png";
                    newcard.querySelector('.card-image').onclick = function () {
                        window.location.href = firstname + ".html";
                    }                    
                    //attach to gallery
                    document.getElementById("Athletes-go-here").appendChild(newcard);
                    i++;
                }
               
            })
        })

}

displayCards("Athletes");