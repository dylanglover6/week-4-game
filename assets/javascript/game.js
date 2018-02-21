//designates score target number
var targetNumber = 53;
$("#number-to-guess").text(targetNumber);

//global variables
var counter = 0;
var numberOptions = [10, 11];
var increment = numberOptions[Math.round(Math.random())];
var numberOptions = [10, 5, 3, 7];

//for loop to create crystals and assign values
for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", "./assets/images/purple-crystal.png")
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    $("#crystals").append(imageCrystal);

}


//on click event for crystals
$(".crystal-image").on("click", function() {
    //determines the value of crystal and converts to an integer
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    
    //score logic
    counter += crystalValue;
    alert("New score: " + counter);

    if (counter === targetNumber) {
        alert("you win!");
    }

    else if (counter >= targetNumber) {
        alert("you lose!");
    }


});