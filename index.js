let buttonColors = ["red","blue","green","yellow"];

let gamePattern = [];

let userClickedPattern = [];

var audio;

var level = 0;

var started = false;


    $(document).keypress(function () {

        if (!started){
            nextSequence();
            started = true;
        }

    });


$(".btn").click(function(){

var userChosenColor = $(this).attr("id");
userClickedPattern.push(userChosenColor);
playSound(userChosenColor);
animatePress(userChosenColor);
areEqual(userClickedPattern.length-1);
});



function nextSequence(){

    userClickedPattern = [];

    level++;

    $("h1").text("Level " + level);

    var randomNumber = Math.floor(Math.random()*4);

    var randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  
    playSound(randomChosenColor);

    
}

function playSound(name){
    audio= new Audio('sounds/' + name + '.mp3');
    audio.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");

    setTimeout(function(){
        $("#" + currentColor).removeClass("pressed");
    },100);
}

function areEqual(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if(gamePattern.length === userClickedPattern.length){
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }

      } else {
        $("h1").text("Game Over press a key to restart");
        $("body").addClass("game-over")
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200)
        playSound("wrong");
        level = 0;
        gamePattern = [];
        started = false;
      }
    
}


//old code
/*

function areEqual() {

    var areEqual ;
    for (let i = 0; i < gamePattern.length; i++) {
        if (gamePattern[i] === userClickedPattern[i]) {
            areEqual = true;
          } else {
            areEqual = false;
          }
        
    }

    if(areEqual){
            setTimeout(function () {
            nextSequence();
            }, 1000);
    }
     else{
            $("h1").text("Game Over press a key to restart");
            $("body").addClass("game-over")
            setTimeout(function(){
                $("body").removeClass("game-over");
            },200)
            playSound("wrong");
            level = 0;
            gamePattern = [];
            started = false;
    }

}



// new one

the call   areEqual(userClickedPattern.length-1);

function areEqual(currentLevel) {

        if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
            if(gamePattern.length === userClickedPattern.length){
                setTimeout(function () {
                    nextSequence();
                }, 1000);
            }

          } else {
            $("h1").text("Game Over press a key to restart");
            $("body").addClass("game-over")
            setTimeout(function(){
                $("body").removeClass("game-over");
            },200)
            playSound("wrong");
            level = 0;
            gamePattern = [];
            started = false;
          }
        
}

*/
