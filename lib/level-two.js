/*
 * DOTS: Level Two
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
    console.log();
    // actions - simple
    var score1 = document.querySelector(".score")
    console.log(score)
    //scoring - add to score
    score +=10;
    score1.innerHTML = score;
    if (score == 100){
        console.log('You Won!')
        alert("Go away to level 3")
    }
    //make score on the screen change
}
//attach eventListener  to dot + pass in eventHandler
// dot.addEventListener("click", dotClick)
// console.log(dot)

// yayyyyyyy!!!!!!!!!!!!!