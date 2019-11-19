console.log("APP.JS IS RUNNING");
















  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD0GlY-szWM-lRZJZVjtyIYRPbYEARBUDk",
    authDomain: "cbwebpro-b7f0e.firebaseapp.com",
    databaseURL: "https://cbwebpro-b7f0e.firebaseio.com",
    projectId: "cbwebpro-b7f0e",
    storageBucket: "cbwebpro-b7f0e.appspot.com",
    messagingSenderId: "1076648968708",
    appId: "1:1076648968708:web:4812acb25c56d8366eab51",
    measurementId: "G-9NRTBEBCB7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();























// This section will be getting the form input and
// sending it to SQL DB or Mongo, havent decided yet

// On click event
$("#submit-button").on("click", function() {
   var email = $("#email-input").val().trim()
   var name = $("#name-input").val().trim()
   var feedback = $("#feedback-input").val().trim()

    // just showing values, delete when done    
   console.log("Email Input: " + email)
   console.log("Name Input: " + name)
   console.log("Feedback: " + feedback)

    // hides all the input boxs after the button is clicked    
   $("#email-input").hide();
   $("#name-input").hide();
   $("#feedback-input").hide();

    // changes the text after submit   
   $("#submit-button").text("Thanks for your feedback!!");
})





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
