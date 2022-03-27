var buttonColors =["red", "blue", "green", "yellow"]
var gamePattern =[];
let userClickedPattern;
var started = false;
var level =0;

// Starting the game

$(document).keypress(function () {
  if(!started){
    $("#level-title").html("level "+ level);
    nextSequence();
    started =true;
  }
});

// USER PATTERN

$(".btn").click(function(){

  if(started){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);


    playSound(userChosenColour);
    animatePress(userChosenColour);


    checkAnswer(userClickedPattern.length-1);
  }
  

});



// CHECK Answer
function checkAnswer(currentlevel){


    if(gamePattern[currentlevel] === userClickedPattern[currentlevel]){
      if(userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
            nextSequence();
          }, 1000);
      }
    }else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 500);

      startOver();

    }
}


// Random PATTERN giving new color

function nextSequence(){
  userClickedPattern=[];
  level++
  $("#level-title").text("level "+ level);
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  // Flash the button
  $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

  // play the new PATTERN sound

  playSound(randomChosenColor);
};



// Animate User PATTERN

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}




// the button sound
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

// all over again

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}




















// function colorClass(){
//
//   for (var i = 0; i < document.querySelectorAll(".btn").length; i++) {
//
//     document.querySelectorAll(".btn")[i].addEventListener("click", function() {
//
//      var audioName = this.classList[1];
//      return audioName
//
//     });
//   }
// }
// Play Music..

//
// var audio = new Audio("sounds/"+colorClass()+".mp3");
// audio.play();


// Key animation

// function buttonAnimation(audioName){
//
//   var activeButton = document.querySelector("." +audioName);
//   activeButton.classList.add("pressed");
//
//     setTimeout(function(){
//       activeButton.classList.remove("pressed")
//     }, 100);

// }





// Key Starting


// document.addEventListener("keydown", function(){
//   document.querySelector("h1").textContent = "listen";
// });


// Random Pattern
// var randomNumber =Math.floor(Math.random()*4);
// document.querySelectorAll(".btn")[randomNumber].classList[1];
//
// switch (randomNumber) {
//   case :
//
//     break;
//   default:
//
// }
