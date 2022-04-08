firebase.auth().onAuthStateChanged(user => {
    if (user) {
        displayHighlights(user)
    } else {
        console.log("No user is signed in");
        window.location.href = "login.html"
    }
});

function displayHighlights(user) {
    db.collection("users").doc(user.uid).get()
        .then(userDoc => {
            var favoritesArray = userDoc.data().favoriteath;

            let cardTemplate = document.getElementById("AthletesTemplate");
            favoritesArray.forEach(athlete => {
                db.collection("pictures").where("name", "==", athlete).get().then(snap => {
                    size = snap.size;
                    console.log(size);
                    queryData = snap.docs;

                    if (size == 1) {
                        var doc = queryData[0].data();
                        var name = doc.name;
                        var picture1 = doc.pic1;
                        var descr1 = doc.desc1;
                        let newcard = cardTemplate.content.cloneNode(true);
                        newcard.querySelector('.card-image').src = "./images/" + name + picture1 + ".jpg";
                        newcard.querySelector('.card-image').onclick = function(){
                            window.location.href = name + ".html"
                        }
                        newcard.querySelector('.card-desc').innerHTML = descr1;
                        AthletesCardGroup.appendChild(newcard);
                    }
                })
            })
        })
}





