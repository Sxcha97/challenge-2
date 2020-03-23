

var today = new Date();

var maanden = new Array('januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december');
document.getElementById('datum').innerHTML = today.getDate() + ' ' + maanden[today.getMonth()];



//--------------------------------------------------------------


function clock(){
  var time = new Date()
  var hr = time.getHours()
  var min = time.getMinutes()
  var sec = time.getSeconds()

  if (hr < 10){
    hr = " " + hr
  }
  if (min < 10){
    min = "0" + min
  }
  if (sec < 10){
    sec = "0" + sec
  }

  document.getElementById("klok").innerHTML = hr + ":" + min + ":" + sec
  setTimeout("clock()", 1000)
}

function showDate(){
  var date = new Date()
  var year = date.getFullYear()


  var monthArray = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December")
  alert(monthArray[date.getMonth()] + " " + date.getDate() + ", " + year)
}


//-----------------------------------------------------


// De datum naar welke we aftellen
var countDownDate = new Date("Oct 18, 2020 16:59:12").getTime();

// De countdown telkens met 1 sec updaten
var x = setInterval(function() {

  // De huidige dag en tijd
  var now = new Date().getTime();
    
  // Het verschil berekenen tussen de huidige tijd en tijd van explosie
  var distance = countDownDate - now;
    
  // Tijd berekenen voor days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("afteller").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("klok").innerHTML = "EXPLODED";
  }
}, 1000);




//-----------------------------------------------------------------


var tijdVanDag = [
  "fotos/nacht.png",
  "fotos/ochtend.png",
  "fotos/middag.png",
  "fotos/avond.png"
];

function TODafbeedling(){
  var nu = new Date();
  var uur = nu.getHours();
  var DJ = 0;

  if ((uur >= 6) && (uur < 12)) { DJ = 1; } //ochtend
  if ((uur >= 12) && (uur < 18)) { DJ = 2; } // middag
  if ((uur >= 18) && (uur < 24)) { DJ = 3; } // avond

  document.getElementById('dagdeel').src = tijdVanDag[DJ];
}



//--------------------------------------------------------------


function start() {
  TODafbeedling();
  clock();
}


window.onload=start;






















