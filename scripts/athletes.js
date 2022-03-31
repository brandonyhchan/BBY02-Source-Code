var currentUser;
firebase.auth().onAuthStateChanged(user => {
    if (user) {
        currentUser = db.collection("users").doc(user.uid);
        console.log(currentUser);

        displayCards("Athletes")
    } else {
        // No user is signed in.
        console.log("No user is signed in");
        window.location.href = "loading.html";
    }
});

function writeAthletes() {
    var AthletesRef = db.collection("Athletes");

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

function displayCards(collection) {
    let cardTemplate = document.getElementById("AthletesTemplate");

    db.collection(collection).get()
        .then(snap => {
            var i = 1;
            snap.forEach(doc => {
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

                newcard.querySelector('i').id = 'save-' + firstname;
                newcard.querySelector('i').onclick = () => favoriteAthlete(firstname);

                //attach to gallery
                document.getElementById(collection + "-go-here").appendChild(newcard);
                i++;
            })
        })

}

// displayCards("Athletes");

function favoriteAthlete(firstname) {
    currentUser.set({
        favoriteath: firebase.firestore.FieldValue.arrayUnion(firstname)
    }, {
        merge: true
    })
        .then(function () {
            console.log("favorite athlete saved for: " + currentUser);
            var iconID = 'save-' + firstname;
            document.getElementById(iconID).innerText = 'favorite';
        });
}

