function read_display_Quote() {
    db.collection("Events").doc("CeNDes79bfVAh3VhXXr0")                                                      //name of the collection and documents should matach excatly with what you have in Firestore
      .onSnapshot(CeNDes79bfVAh3VhXXr0Doc => {                                                               //arrow notation
           console.log("current document data: " + CeNDes79bfVAh3VhXXr0Doc.data());                          //.data() returns data object
           document.getElementById("eventname").innerHTML = CeNDes79bfVAh3VhXXr0Doc.data().Event;      //using javascript to display the data on the right place
           document.getElementById("gender").innerHTML = CeNDes79bfVAh3VhXXr0Doc.data().Gender;      //using javascript to display the data on the right place
           document.getElementById("location").innerHTML = CeNDes79bfVAh3VhXXr0Doc.data().Location;      //using javascript to display the data on the right place
           document.getElementById("time").innerHTML = CeNDes79bfVAh3VhXXr0Doc.data().Time;      //using javascript to display the data on the right place
           document.getElementById("type").innerHTML = CeNDes79bfVAh3VhXXr0Doc.data().Type;    
           document.getElementById("date").innerHTML = CeNDes79bfVAh3VhXXr0Doc.data().Date;   
           document.getElementById("sports").innerHTML = CeNDes79bfVAh3VhXXr0Doc.data().Sport;      //using javascript to display the data on the right place
              //using javascript to display the data on the right place
             //using javascript to display the data on the right place
           
                                    //using json object indexing
      })
}
read_display_Quote()
