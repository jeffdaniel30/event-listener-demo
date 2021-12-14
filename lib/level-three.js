/*
 * DOTS: Level Three
 *
 */
console.log("attached L1 script!")
// find the element in the DOM and attach it to a variable
var dots = document.querySelectorAll(".dot.js-dot")
// var score = document.querySelector(".score.js-score")
score= 0
// define our eventHandler
// dots.addEventListener("click", dotClick)
for (i=0; i < dots.length; i++){
    dots[i].addEventListener('click',dotClick)
}
function dotClick (event) {
    console.dir(event.target.dataset);
    // actions - simple
    var score1 = document.querySelector(".score")
    console.log(score)
    //scoring - add to score
    score += parseInt(event.target.dataset.increment)
    score1.innerHTML = score;
    if (score == 100){
        console.log('You Won!')
        alert('You won! Move on to Level 2!')
        window.location.href = "level-two.html"
    }
    //make score on the screen change
}
//attach eventListener  to dot + pass in eventHandler
dot.addEventListener("click", dotClick(e))
// console.log(dot)


// let timer = 10
// var timer = document.querySelector(".timer")
// for (i=0; i < timer.length; i++){
//     dots[i].addEventListener('click',dotClick)
// }
// function timerClick(){
//     timer -=1
//     timer1.innerHTML = timer
//     if (timer == 10){
//     }
// }

// var timer = setInterval(timerCount(),1000)

// timer.addEventListener("load", dotClick)

// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


