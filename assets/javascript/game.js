//designates score target number
var targetNumber = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58];
function chooseTarget(){
    return targetNumber[Math.floor(Math.random() * targetNumber.length)];
 };
var randomTarget = chooseTarget();
$("#number-to-guess").text(randomTarget);

//global variables
var counter = 0;
var numberOptions = [10, 5, 12, 3, 7, 9, 2, 4, 5, 6, 11];
var crystalImages= ["./assets/images/purple-crystal.png", "./assets/images/green-crystal.png", "./assets/images/orange-crystal.png", "./assets/images/teal-crystal.png", "./assets/images/sparkly-crystal.png", "./assets/images/lime-crystal.png", "./assets/images/diamond-crystal.png", "./assets/images/red-crystal.png",]
var wins = 0;
var losses = 0;


//for loop to create crystals and assign values
function createCrystals () {
  for (var i = 0; i < 4; i++) {
    var imageCrystal = $("<img>");
    var randomNumber = Math.floor(Math.random()*numberOptions.length);
    var randomCrystal = Math.floor(Math.random()* crystalImages.length);
    imageCrystal.addClass("crystal-image");
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
    $("#number-to-guess").text(randomTarget);
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

