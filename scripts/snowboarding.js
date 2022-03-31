function read_display_Quote() {
    db.collection("Events").doc("iRjnDjWwQHOogGOTlHIt")                                                      //name of the collection and documents should matach excatly with what you have in Firestore
      .onSnapshot(iRjnDjWwQHOogGOTlHItDoc => {                                                               //arrow notation
           console.log("current document data: " + iRjnDjWwQHOogGOTlHItDoc.data());                          //.data() returns data object
           document.getElementById("eventname").innerHTML = iRjnDjWwQHOogGOTlHItDoc.data().Event;      //using javascript to display the data on the right place
           document.getElementById("gender").innerHTML = iRjnDjWwQHOogGOTlHItDoc.data().Gender;      //using javascript to display the data on the right place
           document.getElementById("location").innerHTML = iRjnDjWwQHOogGOTlHItDoc.data().Location;      //using javascript to display the data on the right place
           document.getElementById("time").innerHTML = iRjnDjWwQHOogGOTlHItDoc.data().Time;      //using javascript to display the data on the right place
           document.getElementById("type").innerHTML = iRjnDjWwQHOogGOTlHItDoc.data().Type;    
           document.getElementById("date").innerHTML = iRjnDjWwQHOogGOTlHItDoc.data().Date;   
           document.getElementById("sports").innerHTML = iRjnDjWwQHOogGOTlHItDoc.data().Sport;      //using javascript to display the data on the right place
              //using javascript to display the data on the right place
             //using javascript to display the data on the right place
           
                                    //using json object indexing
      })
}
read_display_Quote()
