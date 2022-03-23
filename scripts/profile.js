var currentUser

function populateInfo() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if user is signed in:
        if (user) {

            //go to the correct user document by referencing to the user uid
            currentUser = db.collection("users").doc(user.uid)
            //get the document for current user.
            currentUser.get()
                .then(userDoc => {
                    //get the data fields of the user
                    var userName = userDoc.data().name;
                    var userEmail = userDoc.data().email;
                    var userAthelete = userDoc.data().athlete;
                    var userEvent = userDoc.data().event
                })
        } else {
            // No user is signed in.
            console.log("No user is signed in");
        }

    });
}
populateInfo();

function userFavourites() {
    userAthlete = document.getElementById('favouriteAthlete').value;
    userEvent = docuement.getElementById('favouriteEvent').value;

    currentUser.update({
        athlete: userAthlete,
        event: userEvent
    })
        .then(() => {
            console.log("Document successfully updated!");
        })

}