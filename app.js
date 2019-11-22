
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



// Typing Carousel
var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 2);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 2);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };
