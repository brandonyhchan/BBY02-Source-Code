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

function displayName(){
    currentUser.get()
    .then(userDoc=>{
        document.getElementById("name").innerHTML = "Welcome back, " + userDoc.data().name;
    })
}
