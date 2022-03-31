firebase.auth().onAuthStateChanged(user => {
    if (user) {
        getFavorites(user)
    } else {
        console.log("No user is signed in");
        window.location.href="login.html"
    }
});

function getFavorites(user) {
    db.collection("users").doc(user.uid).get()
        .then(userDoc => {
            var favorites = userDoc.data().favoriteath;
            // console.log(favorites);

            let CardTemplate = document.getElementById("AthletesTemplate");
            favorites.forEach(thisAthFav => {
                // console.log(thisAthFav);
                db.collection("Athletes").where("FirstName", "==", thisAthFav).get().then(snap => {
                    size = snap.size;
                    queryData = snap.docs;

                    if (size == 1) {
                        var doc = queryData[0].data();
                        var firstname = doc.FirstName;
                        var lastname = doc.LastName;
                        var country = doc.Country;
                        var events = doc.Event;
                        let newCard = CardTemplate.content.cloneNode(true);
                        newCard.querySelector('.card-firstname').innerHTML = firstname;
                        newCard.querySelector('.card-lastname').innerHTML = lastname;
                        newCard.querySelector('.card-country').innerHTML = country;
                        newCard.querySelector('.card-event').innerHTML = events;
                        newCard.querySelector('.card-image').src = "./images/" + firstname + ".png";
                        AthletesCardGroup.appendChild(newCard);
                    } 

                })

            });
        })
}


