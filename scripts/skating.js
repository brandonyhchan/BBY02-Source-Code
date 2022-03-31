function read_display_Quote() {
    db.collection("Events").doc("xyK0VadTxbaNXxwVlMvj")                                                      //name of the collection and documents should matach excatly with what you have in Firestore
      .onSnapshot(xyK0VadTxbaNXxwVlMvjDoc => {                                                               //arrow notation
           console.log("current document data: " + xyK0VadTxbaNXxwVlMvjDoc.data());                          //.data() returns data object
           document.getElementById("eventname").innerHTML = xyK0VadTxbaNXxwVlMvjDoc.data().Event;      //using javascript to display the data on the right place
           document.getElementById("gender").innerHTML = xyK0VadTxbaNXxwVlMvjDoc.data().Gender;      //using javascript to display the data on the right place
           document.getElementById("location").innerHTML = xyK0VadTxbaNXxwVlMvjDoc.data().Location;      //using javascript to display the data on the right place
           document.getElementById("time").innerHTML = xyK0VadTxbaNXxwVlMvjDoc.data().Time;      //using javascript to display the data on the right place
           document.getElementById("type").innerHTML = xyK0VadTxbaNXxwVlMvjDoc.data().Type;    
           document.getElementById("date").innerHTML = xyK0VadTxbaNXxwVlMvjDoc.data().Date;   
           document.getElementById("sports").innerHTML = xyK0VadTxbaNXxwVlMvjDoc.data().Sport;      //using javascript to display the data on the right place
              //using javascript to display the data on the right place
             //using javascript to display the data on the right place
           
                                    //using json object indexing
      })
}
read_display_Quote()
