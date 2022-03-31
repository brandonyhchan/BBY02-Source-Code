function read_display_Quote() {
    db.collection("Events").doc("ZOmkYqajnF7fyoLymveQ")                                                      //name of the collection and documents should matach excatly with what you have in Firestore
      .onSnapshot(ZOmkYqajnF7fyoLymveQDoc => {                                                               //arrow notation
           console.log("current document data: " + ZOmkYqajnF7fyoLymveQDoc.data());                          //.data() returns data object
           document.getElementById("eventname").innerHTML = ZOmkYqajnF7fyoLymveQDoc.data().Event;      //using javascript to display the data on the right place
           document.getElementById("gender").innerHTML = ZOmkYqajnF7fyoLymveQDoc.data().Gender;      //using javascript to display the data on the right place
           document.getElementById("location").innerHTML = ZOmkYqajnF7fyoLymveQDoc.data().Location;      //using javascript to display the data on the right place
           document.getElementById("time").innerHTML = ZOmkYqajnF7fyoLymveQDoc.data().Time;      //using javascript to display the data on the right place
           document.getElementById("type").innerHTML = ZOmkYqajnF7fyoLymveQDoc.data().Type;    
           document.getElementById("date").innerHTML = ZOmkYqajnF7fyoLymveQDoc.data().Date;   
           document.getElementById("sports").innerHTML = ZOmkYqajnF7fyoLymveQDoc.data().Sport;      //using javascript to display the data on the right place
              //using javascript to display the data on the right place
             //using javascript to display the data on the right place
           
                                    //using json object indexing
      })
}
read_display_Quote()
