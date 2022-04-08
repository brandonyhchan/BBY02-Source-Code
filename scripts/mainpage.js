/* Lines 6-16 check to see if a user has been authenticated thru firebase authentication.
*  If they have, run the displayName function. If they have not been authenticated, redirect
*  to the login page so they can be authenticated.
*/
var currentUser;
firebase.auth().onAuthStateChanged(user => {
    if (user) {
        currentUser = db.collection("users").doc(user.uid);
        // console.log(currentUser);
        displayName();
    } else {
        // No user is signed in.
        console.log("No user is signed in");
        window.location.href = "loading.html";
    }
});

/*
*  This function displays the name of the logged in user on the main page. 
*
*/
function displayName(){

    // gets the logged in user's id from the "users" collection in firestore
    currentUser.get()

    // waits for line 25 to be executed then executes the following lines
    // parameter userDoc refers to the fields in a logged in user's document
    .then(userDoc=>{

        // replaces the div with id "name" with the message
        document.getElementById("name").innerHTML = "Welcome back, " + userDoc.data().name;
    })
}
