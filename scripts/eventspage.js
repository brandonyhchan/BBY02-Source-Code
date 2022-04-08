/*
* This function takes all information stored in the "Events" database in firestore and 
* populates the individual events pages with that information. Each event has its own 
* information page noted by their name of the event. 4 separate pages use this function, and there 
* are conditions for each athlete.
*/
function populatePage() {

    // refers to the even'ts information page name to popoulate the data
    var pageName = document.getElementById("pagename").innerHTML;
    if (pageName == "Short Track 1500m") {

        // refers to the document for the Short Track 1500m event in the "Events" database in firestore
        db.collection("Events").doc("xyK0VadTxbaNXxwVlMvj")

            // Refers to all data inside the Short Track 1500m document, even as it is being updated in the future
            // description parameter refers to the individual fields in the Short Track document
            // populates each HTML text tag with the appropriate data from the database 
            .onSnapshot(function (description) {
                document.getElementById("sport").innerHTML = description.data().Sport;
                document.getElementById("event").innerHTML = description.data().Event;
                document.getElementById("date").innerHTML = description.data().Date;
                document.getElementById("time").innerHTML = description.data().Time;
                document.getElementById("image").src = "./images/" + description.data().ID + ".png";
                document.getElementById("gender").innerHTML = description.data().Gender;
                document.getElementById("location").innerHTML = description.data().Location;
                document.getElementById("type").innerHTML = description.data().Type;
            })

    } else if (pageName == "Halfpipe") {

        // refers to the document for the Halfpipe event in the "Events" database in firestore
        db.collection("Events").doc("iRjnDjWwQHOogGOTlHIt")

            // Refers to all data inside the Halfpipe document, even as it is being updated in the future
            // description parameter refers to the individual fields in the Halfpipe document
            // populates each HTML text tag with the appropriate data from the database
            .onSnapshot(function (description) {
                document.getElementById("sport").innerHTML = description.data().Sport;
                document.getElementById("event").innerHTML = description.data().Event;
                document.getElementById("date").innerHTML = description.data().Date;
                document.getElementById("time").innerHTML = description.data().Time;
                document.getElementById("image").src = "./images/" + description.data().ID + ".png";
                document.getElementById("gender").innerHTML = description.data().Gender;
                document.getElementById("location").innerHTML = description.data().Location;
                document.getElementById("type").innerHTML = description.data().Type;
            })
    } else if (pageName == "Slalom") {

        // refers to the document for the Slalom event in the "Events" database in firestore
        db.collection("Events").doc("CeNDes79bfVAh3VhXXr0", "0caxgQuQCVRR4SnZxIIB")

            // Refers to all data inside the Slalom document, even as it is being updated in the future
            // description parameter refers to the individual fields in the Slalom document
            // populates each HTML text tag with the appropriate data from the database
            .onSnapshot(function (description) {
                document.getElementById("sport").innerHTML = description.data().Sport;
                document.getElementById("event").innerHTML = description.data().Event;
                document.getElementById("date").innerHTML = description.data().Date;
                document.getElementById("time").innerHTML = description.data().Time;
                document.getElementById("image").src = "./images/" + description.data().ID + ".png";
                document.getElementById("gender").innerHTML = description.data().Gender;
                document.getElementById("location").innerHTML = description.data().Location;
                document.getElementById("type").innerHTML = description.data().Type;
            })
    } else if (pageName == "Ice Dance") {

        // refers to the document for the Ice Dance event in the "Events" database in firestore
        db.collection("Events").doc("0caxgQuQCVRR4SnZxIIB")

            // Refers to all data inside the Ice Dance document, even as it is being updated in the future
            // description parameter refers to the individual fields in the Ice Dance document
            // populates each HTML text tag with the appropriate data from the database
            .onSnapshot(function (description) {
                document.getElementById("sport").innerHTML = description.data().Sport;
                document.getElementById("event").innerHTML = description.data().Event;
                document.getElementById("date").innerHTML = description.data().Date;
                document.getElementById("time").innerHTML = description.data().Time;
                document.getElementById("image").src = "./images/" + description.data().ID + ".png";
                document.getElementById("gender").innerHTML = description.data().Gender;
                document.getElementById("location").innerHTML = description.data().Location;
                document.getElementById("type").innerHTML = description.data().Type;
            })
    }

}
populatePage();



