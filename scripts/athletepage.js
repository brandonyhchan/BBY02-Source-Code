function populatePage() {
    var pageName = document.getElementById("pagename").innerHTML;
    if (pageName == "Janice") {
        db.collection("Athletes").doc("BtW0onm5B1orPOwPWQEc")
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
                document.getElementById("flag").src = "./images/" + description.data().Country +".png";
                document.getElementById("eventpic").src = "./images/" + description.data().ID + ".png";
            })
    } else if (pageName == "Joo Hyuk"){
        db.collection("Athletes").doc("CptYFBoQA7gSKbJF2E8D")
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
            document.getElementById("flag").src = "./images/" + description.data().Country +".png";
            document.getElementById("eventpic").src = "./images/" + description.data().ID + ".png";
        })
    } else if (pageName == "Scott"){
        db.collection("Athletes").doc("EjyXYp4r3ZSdNKEnRgG3")
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
            document.getElementById("flag").src = "./images/" + description.data().Country +".png";
            document.getElementById("eventpic").src = "./images/" + description.data().ID + ".png";
        })
    } else if (pageName == "Himari"){
        db.collection("Athletes").doc("J3Hudfnv4UJ0IY8OIrRn")
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
            document.getElementById("flag").src = "./images/" + description.data().Country +".png";
            document.getElementById("eventpic").src = "./images/" + description.data().ID + ".png";
        })
    } else if (pageName == "Shawn"){
        db.collection("Athletes").doc("g4EDjoscIC4VhiPfelFh")
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
            document.getElementById("flag").src = "./images/" + description.data().Country +".png";
            document.getElementById("eventpic").src = "./images/" + description.data().ID + ".png";
        })
    } else if (pageName == "Tessa"){
        db.collection("Athletes").doc("qRUsH09i0w9IOkT3Dbx5")
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
            document.getElementById("flag").src = "./images/" + description.data().Country +".png";
            document.getElementById("eventpic").src = "./images/" + description.data().ID + ".png";
        })
    }
}

populatePage();
