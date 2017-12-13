// each characters fight data stored in an object
$(document).ready(function(){

var lukeChar = {
    health: 125,
    attack: 7,
    counterAttack: 25
};

var hanChar = {
    health: 100,
    attack: 7,
    counterAttack: 15
};

var bobaChar = {
    health: 115,
    attack: 7,
    counterAttack: 30
};

var vaderChar = {
    health: 140,
    attack: 7,
    counterAttack: 35
};

playerOne = 0;
opponent = 0;

$(".choice").click(function() {
    var selection = $(this);
    if (selection.hasClass("luke")) {
        playerOne = luke;
        $("#han").addClass("selected");
        $("#enemies-available").append($("#han"));
        $("#boba").addClass("selected");
        $("#enemies-available").append($("#boba"));
        $("#vader").addClass("selected");
        $("#enemies-available").append($("#vader"));
        console.log(playerOne)

    //     // rewrite other three character divs to .enemies-avaialable
    //     // remove form/hide within .character-choices
    //     // addClass for red background to other three characters
   
    };

});
    
        
    
    
    
});










// var selection = $(this);
// var id = selection.attr("id");
// var choices = $(".choice");
// for (var i = 0; i < choices.length; i++) {
//     var currentChoice = choices[i];
//     console.log(currentChoice);
//     if ($(currentChoice).attr("id") !== id) {
//         $("#available-enemies").append(currentChoice);
//     };