
  // Your web app's Firebase configuration
  var Config = {
    apiKey: "AIzaSyDBR2BdfdsRRm9WBnA4XE31R7EZnlA3f4k",
    authDomain: "cb-portfolio-new.firebaseapp.com",
    databaseURL: "https://cb-portfolio-new.firebaseio.com",
    projectId: "cb-portfolio-new",
    storageBucket: "cb-portfolio-new.appspot.com",
    messagingSenderId: "66442205332",
  };
  // Initialize Firebase
  firebase.initializeApp(Config);

  var database = firebase.database();


// On click event
$("#submit-button").on("click", function() {
   var emailText = $("#email-input").val().trim()
   var nameText = $("#name-input").val().trim()
   var feedbackText = $("#feedback-input").val().trim()


    // hides all the input boxs after the button is clicked    
   $("#email-input").hide();
   $("#name-input").hide();
   $("#feedback-input").hide();

    // changes the text after submit   
   $("#submit-button").text("Thanks for your feedback!!");

   database.ref().push({
    dbEmail: emailText,
    dbName: nameText,
    dbFeedback: feedbackText,

  });
})



firebase.database().ref().on("child_added", function (snapshot) {
  var dbEmail = snapshot.val().dbEmail;
  var dbName = snapshot.val().dbName;
  var dbFeedback = snapshot.val().dbFeedback;
});




