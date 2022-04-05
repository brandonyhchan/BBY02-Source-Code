function displayCards() {
    let cardTemplate = document.getElementById("AthletesTemplate");

    db.collection("pictures").get()
        .then(snap => {
            var i = 1;
            snap.forEach(doc => {
                    var firstname = doc.data().name;
                    // var lastname = doc.data().LastName;
                    // var country = doc.data().Country;
                    let newcard = cardTemplate.content.cloneNode(true);
                    //update title and text and image
                    newcard.querySelector('.card-image').src = "./images/" + firstname + "pic1.jpg";
                    
                                        
                    //attach to gallery
                    document.getElementById("Athletes-go-here").appendChild(newcard);
                    i++;
                
               
            })
        })



}

displayCards("pictures");

function displayCards2() {
    let cardTemplate = document.getElementById("AthletesTemplate2");

    db.collection("pictures").get()
        .then(snap => {
            var i = 1;
            snap.forEach(doc => {
                    var firstname = doc.data().name;
                    // var lastname = doc.data().LastName;
                    // var country = doc.data().Country;
                    let newcard = cardTemplate.content.cloneNode(true);
                    //update title and text and image
                    newcard.querySelector('.card-image').src = "./images/" + firstname + "pic2.jpeg";
                    
                                        
                    //attach to gallery
                    document.getElementById("Athletes-go-here").appendChild(newcard);
                    i++;
                
               
            })
        })

        

}

displayCards2("pictures");



