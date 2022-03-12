function writeEvents() {
    var eventsRef = db.collection("Events");

    eventsRef.add({
        Sport: "Alpine Skiing",
        Gender: "Mens",
        Event: "Slalom",
        Type: "Quarter- finals",
        Date: "February 10, 2030",
        Time: "2:00 pm",
        Location: "Whistler Creekside",
        ID: "ALPSKI"
    });
    eventsRef.add({
        Sport: "Speed Skating",
        Gender: "Womens",
        Event: "Short Track 1500m",
        Type: "Semi- finals",
        Date: "February 13, 2030",
        Time: "10:00 am",
        Location: "Pacific Coliseum",
        ID: "SPDSKATE"
    });
    eventsRef.add({
        Sport: "Snowboarding",
        Gender: "Mens",
        Event: "Halfpipe",
        Type: "Finals",
        Date: "February 14, 2030",
        Time: "12:00 pm",
        Location: "Cypress Mountain",
        ID: "SNOWBOARD"
    });
    eventsRef.add({
        Sport: "Figure Skating",
        Gender: "Pairs",
        Event: "Ice Dance",
        Type: "Quarter- Finals",
        Date: "February 16, 2030",
        Time: "3:00 pm",
        Location: "Pacific Coliseum",
        ID: "FIGSKATE"
    });
    eventsRef.add({
        Sport: "Freestyle Skiing",
        Gender: "Mens",
        Event: "Cross",
        Type: "Finals",
        Date: "February 24, 2030",
        Time: "4:00 pm",
        Location: "Cypress Mountain",
        ID: "FREESTYSKI"
    });
}

function read_display_Sport() {
    db.collection("Events").doc("0caxgQuQCVRR4SnZxIIB")                                                      
        .onSnapshot(FigSkateDoc => {                                                              
            console.log("current document data: " + FigSkateDoc.data());                         
            document.getElementById("sport").innerHTML = FigSkateDoc.data().Sport;
        })
}
read_display_Sport();

function read_display_Event() {
    db.collection("Events").doc("0caxgQuQCVRR4SnZxIIB")                                                      
        .onSnapshot(FigSkateDoc => {                                                              
            console.log("current document data: " + FigSkateDoc.data());                         
            document.getElementById("event").innerHTML = FigSkateDoc.data().Event;
        })
}

function read_display_Location() {
    db.collection("Events").doc("0caxgQuQCVRR4SnZxIIB")                                                  
        .onSnapshot(FigSkateDoc => {                                                             
            console.log("current document data: " + FigSkateDoc.data());                        
            document.getElementById("location").innerHTML = FigSkateDoc.data().Location;
        })
}

read_display_Sport();
read_display_Event();
read_display_Location();
