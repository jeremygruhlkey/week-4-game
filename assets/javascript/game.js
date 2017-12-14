// each characters fight data stored in an object
$(document).ready(function(){

    var lukeChar = {
        health: 120,
        attack: 7,
        counterAttack: 25
    };

    var hanChar = {
        health: 100,
        attack: 7,
        counterAttack: 15
    };

    var bobaChar = {
        health: 110,
        attack: 7,
        counterAttack: 30
    };

    var vaderChar = {
        health: 130,
        attack: 7,
        counterAttack: 35
    };

    var playerOne;
    var defender;

    function choosePlayer() {
        $(".choice").click(function() {
            var selection = $(this);

            if (playerOne) {
                chooseDefender();
                console.log(playerOne);
                return;
            }

            
            if (selection.hasClass("luke")) {
                playerOne = lukeChar;
                $("#han").addClass("enemy");
                $("#enemies-available").append($("#han"));
                $("#boba").addClass("enemy");
                $("#enemies-available").append($("#boba"));
                $("#vader").addClass("enemy");
                $("#enemies-available").append($("#vader"));
                console.log(playerOne);
            }

            else if (selection.hasClass("han")) {
                playerOne = hanChar;
                $("#luke").addClass("enemy");
                // $("#luke").removeClass("choice");
                $("#enemies-available").append($("#luke"));
                $("#boba").addClass("enemy");
                $("#enemies-available").append($("#boba"));
                $("#vader").addClass("enemy");
                $("#enemies-available").append($("#vader"));
                console.log(playerOne);
            }

            else if (selection.hasClass("boba")) {
                playerOne = bobaChar;
                $("#luke").addClass("enemy");
                $("#enemies-available").append($("#luke"));
                $("#han").addClass("enemy");
                $("#enemies-available").append($("#han"));
                $("#vader").addClass("enemy");
                $("#enemies-available").append($("#vader"));
                console.log(playerOne);
            }

            else if (selection.hasClass("vader")) {
                playerOne = bobaChar;
                $("#luke").addClass("enemy");
                $("#enemies-available").append($("#luke"));
                $("#han").addClass("enemy");
                $("#enemies-available").append($("#han"));
                $("#boba").addClass("enemy");
                $("#enemies-available").append($("#boba"));
                console.log(playerOne);
            }
            
            chooseDefender();
    
    
        });
    };

    function chooseDefender() {
        
        if (defender) {
            console.log(defender);
            return;
        }

        $(".enemy").click(function() {
            var enemySelection = $(this);

            if (enemySelection.hasClass("luke")) {
                defender = lukeChar;
                $(".defender-box").append($("#luke"));
                console.log(defender);
            }

        });

    };

    
    choosePlayer();  

    
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