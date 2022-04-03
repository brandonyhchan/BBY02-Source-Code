function populatePage() {
    var pageName = document.getElementById("pagename").innerHTML;
    if (pageName == "Short Track 1500m") {
        db.collection("Events").doc("xyK0VadTxbaNXxwVlMvj")
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

    } else if (pageName == "Halfpipe"){
        db.collection("Events").doc("iRjnDjWwQHOogGOTlHIt")
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
    } else if (pageName == "Cross"){
        db.collection("Events").doc("ZOmkYqajnF7fyoLymveQ")
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
    } else if (pageName == "Slalom"){
        db.collection("Events").doc("CeNDes79bfVAh3VhXXr0", "0caxgQuQCVRR4SnZxIIB")
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
    } else if (pageName == "Ice Dance"){
        db.collection("Events").doc("0caxgQuQCVRR4SnZxIIB")
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



