/*
 * DOTS: Level One
 *
 */


console.log("attached L1 script!")
// find the element in the DOM and attach it to a variable
var dot = document.querySelector(".dot")
// var score = document.querySelector(".score.js-score")
score= 0
// define our eventHandler
dot.addEventListener("click", dotClick)

function dotClick (event) {
    console.log();
    // actions - simple
    var score1 = document.querySelector(".score")
    console.log(score)
    //scoring - add to score
    score +=10;
    score1.innerHTML = score;
    if (score == 100){
        console.log('You Won!')
        alert("Go away to level 2")
    }
    //make score on the screen change
}
//attach eventListener  to dot + pass in eventHandler
dot.addEventListener("click", dotClick)