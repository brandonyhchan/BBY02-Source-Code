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

