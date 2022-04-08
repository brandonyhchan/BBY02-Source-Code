/*
* This function takes all information stored in the "Athletes" database in firestore and 
* populates the athlete's profile pages with that information. Each athlete has their own 
* profile page noted by their first name. 5 separate pages use this function, and there 
* are conditions for each athlete.
*/
function populatePage() {
    
    // refers to the athlete's profile page name to populate the data
    var pageName = document.getElementById("pagename").innerHTML;
    if (pageName == "Janice") {

        // refers to the document for Janice in the "Athletes" database in firestore
        db.collection("Athletes").doc("BtW0onm5B1orPOwPWQEc")

            // Refer to all data inside Janice's document, even as it is being updated in the future
            // description parameter refers to the fields in Janice's document
            // populates each HTML text tag with the appropriate data from the database
            .onSnapshot(function (description) {
                document.getElementById("firstname").innerHTML = description.data().FirstName;
                document.getElementById("lastname").innerHTML = description.data().LastName;
                document.getElementById("country").innerHTML = description.data().Country;
                document.getElementById("age").innerHTML = description.data().Age;
                document.getElementById("sport").innerHTML = description.data().Sport;
                document.getElementById("event").innerHTML = description.data().Event;
                document.getElementById("gender").innerHTML = description.data().Gender;
                document.getElementById("goldmedal").innerHTML = description.data().GoldMedals;
                document.getElementById("silvermedal").innerHTML = description.data().SilverMedals;
                document.getElementById("bronzemedal").innerHTML = description.data().BronzeMedals;
                document.getElementById("image").src = "./images/" + description.data().FirstName + ".png";
                document.getElementById("flag").src = "./images/" + description.data().Country + ".png";
                document.getElementById("eventpic").src = "./images/" + description.data().ID + ".png";

                // adds the ability to redirect to the sport the athlete is competing in by clicking on the event name
                document.getElementById("event").onclick = function () {
                    window.location.href = description.data().Sport + ".html"
                }
            })
    } else if (pageName == "Joo Hyuk") {

        // refers to the document for Joo Hyuk in the "Athletes" database in firestore
        db.collection("Athletes").doc("CptYFBoQA7gSKbJF2E8D")

            // Refer to all data inside Joo Hyuk's document, even as it is being updated in the future
            // description parameter refers to the fields in Joo Hyuk's document
            // populates each HTML text tag with the appropriate data from the database
            .onSnapshot(function (description) {
                document.getElementById("firstname").innerHTML = description.data().FirstName;
                document.getElementById("lastname").innerHTML = description.data().LastName;
                document.getElementById("country").innerHTML = description.data().Country;
                document.getElementById("age").innerHTML = description.data().Age;
                document.getElementById("sport").innerHTML = description.data().Sport;
                document.getElementById("event").innerHTML = description.data().Event;
                document.getElementById("gender").innerHTML = description.data().Gender;
                document.getElementById("goldmedal").innerHTML = description.data().GoldMedals;
                document.getElementById("silvermedal").innerHTML = description.data().SilverMedals;
                document.getElementById("bronzemedal").innerHTML = description.data().BronzeMedals;
                document.getElementById("image").src = "./images/" + description.data().FirstName + ".png";
                document.getElementById("flag").src = "./images/" + description.data().Country + ".png";
                document.getElementById("eventpic").src = "./images/" + description.data().ID + ".png";

                // adds the ability to redirect to the sport the athlete is competing in by clicking on the event name
                document.getElementById("event").onclick = function () {
                    window.location.href = description.data().Sport + ".html"
                }
            })
    } else if (pageName == "Scott") {
        
        // refers to the document for Scott in the "Athletes" database in firestore
        db.collection("Athletes").doc("EjyXYp4r3ZSdNKEnRgG3")

            // Refer to all data inside Scott's document, even as it is being updated in the future
            // description parameter refers to the fields in Scott's document
            // populates each HTML text tag with the appropriate data from the database
            .onSnapshot(function (description) {
                document.getElementById("firstname").innerHTML = description.data().FirstName;
                document.getElementById("lastname").innerHTML = description.data().LastName;
                document.getElementById("country").innerHTML = description.data().Country;
                document.getElementById("age").innerHTML = description.data().Age;
                document.getElementById("sport").innerHTML = description.data().Sport;
                document.getElementById("event").innerHTML = description.data().Event;
                document.getElementById("gender").innerHTML = description.data().Gender;
                document.getElementById("goldmedal").innerHTML = description.data().GoldMedals;
                document.getElementById("silvermedal").innerHTML = description.data().SilverMedals;
                document.getElementById("bronzemedal").innerHTML = description.data().BronzeMedals;
                document.getElementById("image").src = "./images/" + description.data().FirstName + ".png";
                document.getElementById("flag").src = "./images/" + description.data().Country + ".png";
                document.getElementById("eventpic").src = "./images/" + description.data().ID + ".png";

                // adds the ability to redirect to the sport the athlete is competing in by clicking on the event name
                document.getElementById("event").onclick = function () {
                    window.location.href = description.data().Sport + ".html"
                }
            })
    } else if (pageName == "Himari") {

        // refers to the document for Himari in the "Athletes" database in firestore
        db.collection("Athletes").doc("J3Hudfnv4UJ0IY8OIrRn")

            // Refer to all data inside Himari's document, even as it is being updated in the future
            // description parameter refers to the fields in Himari's document
            // populates each HTML text tag with the appropriate data from the database
            .onSnapshot(function (description) {
                document.getElementById("firstname").innerHTML = description.data().FirstName;
                document.getElementById("lastname").innerHTML = description.data().LastName;
                document.getElementById("country").innerHTML = description.data().Country;
                document.getElementById("age").innerHTML = description.data().Age;
                document.getElementById("sport").innerHTML = description.data().Sport;
                document.getElementById("event").innerHTML = description.data().Event;
                document.getElementById("gender").innerHTML = description.data().Gender;
                document.getElementById("goldmedal").innerHTML = description.data().GoldMedals;
                document.getElementById("silvermedal").innerHTML = description.data().SilverMedals;
                document.getElementById("bronzemedal").innerHTML = description.data().BronzeMedals;
                document.getElementById("image").src = "./images/" + description.data().FirstName + ".png";
                document.getElementById("japan").src = "./images/" + description.data().Country + ".png";
                document.getElementById("eventpic").src = "./images/" + description.data().ID + ".png";

                // adds the ability to redirect to the sport the athlete is competing in by clicking on the event name
                document.getElementById("event").onclick = function () {
                    window.location.href = description.data().Sport + ".html"
                }
            })
    } else if (pageName == "Shawn") {

        // refers to the document for Shawn in the "Athletes" database in firestore
        db.collection("Athletes").doc("g4EDjoscIC4VhiPfelFh")

            // Refer to all data inside Shawn's document, even as it is being updated in the future
            // description parameter refers to the fields in Shawn's document
            // populates each HTML text tag with the appropriate data from the database
            .onSnapshot(function (description) {
                document.getElementById("firstname").innerHTML = description.data().FirstName;
                document.getElementById("lastname").innerHTML = description.data().LastName;
                document.getElementById("country").innerHTML = description.data().Country;
                document.getElementById("age").innerHTML = description.data().Age;
                document.getElementById("sport").innerHTML = description.data().Sport;
                document.getElementById("event").innerHTML = description.data().Event;
                document.getElementById("gender").innerHTML = description.data().Gender;
                document.getElementById("goldmedal").innerHTML = description.data().GoldMedals;
                document.getElementById("silvermedal").innerHTML = description.data().SilverMedals;
                document.getElementById("bronzemedal").innerHTML = description.data().BronzeMedals;
                document.getElementById("image").src = "./images/" + description.data().FirstName + ".png";
                document.getElementById("flag").src = "./images/" + description.data().Country + ".png";
                document.getElementById("eventpic").src = "./images/" + description.data().ID + ".png";

                // adds the ability to redirect to the sport the athlete is competing in by clicking on the event name
                document.getElementById("event").onclick = function () {
                    window.location.href = description.data().Sport + ".html"
                }
            })
    } else if (pageName == "Tessa") {

        // refers to the document for Shawn in the "Athletes" database in firestore
        db.collection("Athletes").doc("qRUsH09i0w9IOkT3Dbx5")

            // Refer to all data inside Tessa's document, even as it is being updated in the future
            // description parameter refers to the fields in Tessa's document
            // populates each HTML text tag with the appropriate data from the database
            .onSnapshot(function (description) {
                document.getElementById("firstname").innerHTML = description.data().FirstName;
                document.getElementById("lastname").innerHTML = description.data().LastName;
                document.getElementById("country").innerHTML = description.data().Country;
                document.getElementById("age").innerHTML = description.data().Age;
                document.getElementById("sport").innerHTML = description.data().Sport;
                document.getElementById("event").innerHTML = description.data().Event;
                document.getElementById("gender").innerHTML = description.data().Gender;
                document.getElementById("goldmedal").innerHTML = description.data().GoldMedals;
                document.getElementById("silvermedal").innerHTML = description.data().SilverMedals;
                document.getElementById("bronzemedal").innerHTML = description.data().BronzeMedals;
                document.getElementById("image").src = "./images/" + description.data().FirstName + ".png";
                document.getElementById("flag").src = "./images/" + description.data().Country + ".png";
                document.getElementById("eventpic").src = "./images/" + description.data().ID + ".png";

                // adds the ability to redirect to the sport the athlete is competing in by clicking on the event name
                document.getElementById("event").onclick = function () {
                    window.location.href = description.data().Sport + ".html"
                }
            })
    }
}

populatePage();