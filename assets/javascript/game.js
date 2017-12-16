// each characters fight data stored in an object
$(document).ready(function(){

    var lukeChar = {
        health: 135,
        attack: 7,
        counterAttack: 25
    };

    var hanChar = {
        health: 100,
        attack: 7,
        counterAttack: 20
    };

    var bobaChar = {
        health: 120,
        attack: 7,
        counterAttack: 30
    };

    var vaderChar = {
        health: 190,
        attack: 7,
        counterAttack: 30
    };

    var playerOne;
    var defender;
    var attack = 5;

    var playerOneHealthDiv;
    var gameOver = false;
    var winCounter = 0;
    

    function choosePlayer() {
        $(".choice").click(function() {
            var selection = $(this);

            if (playerOne) {
                chooseDefender();
                return;
            }

            else if (selection.hasClass("luke")) {
                playerOne = lukeChar;
                playerOneHealthDiv = $("#luke-health");
                $("#han").addClass("enemy");
                // $("#han").removeClass("choice");
                // $("#han").removeClass("han");
                $("#enemies-available").append($("#han"));
                $("#boba").addClass("enemy");
                $("#enemies-available").append($("#boba"));
                $("#vader").addClass("enemy");
                $("#enemies-available").append($("#vader"));
                // console.log(playerOne);
                // console.log(playerOneHealthDiv);
                chooseDefender();
                
            }

            else if (selection.hasClass("han")) {
                playerOne = hanChar;
                playerOneHealthDiv = $("#han-health");
                $("#luke").addClass("enemy");
                // $("#luke").removeClass("choice");
                $("#enemies-available").append($("#luke"));
                $("#boba").addClass("enemy");
                $("#enemies-available").append($("#boba"));
                $("#vader").addClass("enemy");
                $("#enemies-available").append($("#vader"));
                // console.log(playerOne);
                // console.log(playerOneHealthDiv);
                chooseDefender();
                
            }

            else if (selection.hasClass("boba")) {
                playerOne = bobaChar;
                playerOneHealthDiv = $("#boba-health");
                $("#luke").addClass("enemy");
                $("#enemies-available").append($("#luke"));
                $("#han").addClass("enemy");
                $("#enemies-available").append($("#han"));
                $("#vader").addClass("enemy");
                $("#enemies-available").append($("#vader"));
                // console.log(playerOne);
                // console.log(playerOneHealthDiv);
                chooseDefender();
                
            }

            else if (selection.hasClass("vader")) {
                playerOne = bobaChar;
                playerOneHealthDiv = $("#vader-health");
                $("#luke").addClass("enemy");
                $("#enemies-available").append($("#luke"));
                $("#han").addClass("enemy");
                $("#enemies-available").append($("#han"));
                $("#boba").addClass("enemy");
                $("#enemies-available").append($("#boba"));
                // console.log(playerOne);
                // console.log(playerOneHealthDiv);
                chooseDefender();
                
            }
            // $('.choice').off('click')
    
        });
    };

    function chooseDefender() {
        
        // if (defender) {
        //     doBattle();
        //     return;
        // }
        $('.enemy').on('click');
        
        $(".enemy").click(function() {
            var enemySelection = $(this);

            if (enemySelection.hasClass("luke")) {
                defender = lukeChar;
                defenderHealthDiv = $("#luke-health");
                $("#luke").addClass("defender-black");
                $(".defender-box").append($("#luke"));
                // console.log(defender);
            }

            else if (enemySelection.hasClass("han")) {
                defender = hanChar;
                defenderHealthDiv = $("#han-health");
                $("#han").addClass("defender-black");
                $(".defender-box").append($("#han"));
                // console.log(defender);
            }

            else if (enemySelection.hasClass("boba")) {
                defender = bobaChar;
                defenderHealthDiv = $("#boba-health");
                $("#boba").addClass("defender-black");                
                $(".defender-box").append($("#boba"));
                // console.log(defender);
            }

            else if (enemySelection.hasClass("vader")) {
                defender = vaderChar;
                defenderHealthDiv = $("#vader-health");
                $("#vader").addClass("defender-black");                
                $(".defender-box").append($("#vader"));
                // console.log(defender);
            }

            $('.enemy').off('click');
            doBattle();
        });

    };

    function doBattle() {
        if (gameOver) {
            restart();
        }
        // var attack = 5;
        var playerOneHealth = playerOne.health;
            // console.log("player one health: " + playerOneHealth);
        var defenderHealth = defender.health;
        var defenderAttack = defender.counterAttack;
            // console.log("defender health: " + defenderHealth);
            $("#attack").click(function() {
                playerOneHealth = playerOneHealth - defenderAttack;
                defenderHealth = defenderHealth - attack;
                    // console.log("new playerOne health: " + playerOneHealth);
                    // console.log("new defender health: " + defenderHealth);
                    
                $(playerOneHealthDiv).html(playerOneHealth);
                $(defenderHealthDiv).html(defenderHealth);
                var update = "You hit for " + attack + " and were hit back for " + defenderAttack;
                $(".fight-update").html(update);
                attack = attack + 5;
                // console.log("new attack: " + attack);
                    if (playerOneHealth <= 0 && defenderHealth > 0) {
                        gameOver = true;
                        $(".fight-update").html("You LOST!!! Click restart to play again.");
                        $("#attack").off("click");
                        restart();
                    }
                    // else if ( $(".enemies-available").is(":empty") && $(".defender-box").is(":empty") ){
                    //     $("fight-update").html("You WON!!!! Click restart to play again!!");
                    //     $(".restart").addClass("unhide-button");
                    // }
                    else if (defenderHealth <=  0 && playerOneHealth > 0) {
                        winCounter = winCounter + 1;
                        console.log("win counter: " + winCounter);
                        $(".defender-box").empty();
                            if (winCounter > 2){
                                $(".fight-update").html("You WIN!! The galaxy is yours. RESTART to play again!")
                                restart();
                            }
                            else {
                                $(".fight-update").html("You passed this round! Select another opponnet!");
                            }
                        $(playerOneHealthDiv).html(playerOne.health);
                        $('#attack').off('click');
                        $('.enemy').on('click');
                        
                        
                        chooseDefender();
                    }
                    
                    
        
                    



                });

    };

    function restart() {
        $(".restart").addClass("unhide-button");
        $(".restart").click(function() {
            window.location.reload();
        })
    };

    // function theEnd() {
    //     $("fight-update").html("You WON!!!! Click restart to play again!!");
    //     $(".restart").addClass("unhide-button");
    // };

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