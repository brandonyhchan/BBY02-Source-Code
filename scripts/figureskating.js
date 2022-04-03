function displayCards() {
    let cardTemplate = document.getElementById("AthletesTemplate");

    db.collection("Athletes").get()
        .then(snap => {
            var i = 1;
            snap.forEach(doc => {
                if (doc.data().Event == "Ice Dance"){
                    var firstname = doc.data().FirstName;
                    var lastname = doc.data().LastName;
                    var country = doc.data().Country;
                    var events = doc.data().Event;
                    let newcard = cardTemplate.content.cloneNode(true);
    
                    //update title and text and image
                    newcard.querySelector('.card-firstname').innerHTML = firstname;
                    newcard.querySelector('.card-lastname').innerHTML = lastname;
                    newcard.querySelector('.card-country').innerHTML = country;
                    newcard.querySelector('.card-event').innerHTML = events;
                    newcard.querySelector('.card-image').src = "./images/" + firstname + ".png";
                    newcard.querySelector('.card-image').onclick = function () {
                        window.location.href = firstname + ".html";
                    }
    
                    newcard.querySelector('i').id = 'save-' + firstname;
                    newcard.querySelector('i').onclick = () => favoriteAthlete(firstname);                
                    
                    //attach to gallery
                    document.getElementById("Athletes-go-here").appendChild(newcard);
                    i++;
                }
               
            })
        })

}

displayCards("Athletes");