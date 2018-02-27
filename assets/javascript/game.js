//designates score target number
function chooseTarget(){
    return Math.floor(Math.random() * 101) + 19;
 };
var randomTarget = chooseTarget();
$("#number-to-guess").text(randomTarget);

//global variables
var counter = 0;
var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var crystalImages= ["./assets/images/purple-crystal.png", "./assets/images/orange-crystal.png", "./assets/images/teal-crystal.png", "./assets/images/sparkly-crystal.png", "./assets/images/lime-crystal.png", "./assets/images/diamond-crystal.png", "./assets/images/red-crystal.png",]
var wins = 0;
var losses = 0;
var temples = [".temple-1", ".temple-2", ".temple-3", ".temple-4"]

//code to position jewels on top of temples
$.fn.positionOn = function(element, align) {
    return this.each(function() {
      var target   = $(this);
      var position = element.position();
  
      var x      = position.left; 
      var y      = position.top;
  
      if(align == 'right') {
        x -= (target.outerWidth() - element.outerWidth());
      } else if(align == 'center') {
        x -= target.outerWidth() / 2 - element.outerWidth() / 2;
      }
  
      target.css({
        position: 'absolute',
        zIndex:   5000,
        top:      y, 
        left:     x
      });
    });
  };

//for loop to create crystals and assign values
function createCrystals () {
  for (var i = 0; i < 4; i++) {
    var imageCrystal = $("<img>");
    var randomNumber = Math.floor(Math.random()*numberOptions.length);
    var randomCrystal = Math.floor(Math.random()* crystalImages.length);
    imageCrystal.addClass("crystal-image");
    imageCrystal.positionOn($(temples[i]), "center")
    imageCrystal.attr("src", crystalImages[randomCrystal]);
    imageCrystal.attr("data-crystalvalue", numberOptions[randomNumber]);
    $("#crystals").append(imageCrystal);
    }
}
createCrystals();

//reset function
function reset() {
    $("#crystals").empty();
    createCrystals();
    counter = 0;
    randomTarget = chooseTarget();
    $("#number-to-guess").text(randomTarget);
    $(".crystal-image").on("click", function() {
        //determines the value of crystal and converts to an integer
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        
        //score logic
        counter += crystalValue;
        alert("New score: " + counter);
    
        if (counter === randomTarget) {
            alert("You Win!");
            reset();
            wins ++;
            $("#wins").html(wins);
        }
    
        else if (counter >= randomTarget) {
            alert("You Lose!");
            reset();
            losses ++;
            $("#losses").html(losses);
        }
    
    
    });
};
//on click event for crystals
$(".crystal-image").on("click", function() {
    //determines the value of crystal and converts to an integer
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    
    //score logic
    counter += crystalValue;
    alert("New score: " + counter);

    if (counter === randomTarget) {
        alert("you win!");
        reset();
        wins ++;
        $("#wins").html(wins);
    }

    else if (counter >= randomTarget) {
        alert("you lose!");
        reset();
        losses ++;
        $("#losses").html(losses);
    }


});

