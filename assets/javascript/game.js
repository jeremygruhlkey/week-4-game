$(document).ready(function(){

    var lukeChar = {
        health: 135,
        counterAttack: 25
    };

    var hanChar = {
        health: 100,        
        counterAttack: 20
    };

    var bobaChar = {
        health: 150,        
        counterAttack: 30
    };

    var vaderChar = {
        health: 230,        
        counterAttack: 30
    };

    var playerOne;
    var defender;
    var attack = 5;
    var playerOneHealthDiv;
    var gameOver = false;
    var winCounter = 0;
    var forAttack = new Audio ("http://www.thesoundarchive.com/starwars/blaster-firing.mp3");
    var forBoba = new Audio ("http://www.thesoundarchive.com/starwars/set-for-stun.mp3");
    var forLuke = new Audio ("http://www.thesoundarchive.com/starwars/light-saber-on.mp3");
    var forVader = new Audio ("http://www.thesoundarchive.com/starwars/swvader02.mp3");
    var forHan = new Audio ("http://www.thesoundarchive.com/starwars/empire/laughfuzzball.mp3");
    var forLoss = new Audio ("http://www.thesoundarchive.com/starwars/WilhelmScream.mp3");
    var forWin = new Audio ("http://www.thesoundarchive.com/starwars/force.mp3");
    

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
                forLuke.play();
                $("#han").addClass("enemy");                
                $("#enemies-available").append($("#han"));
                $("#boba").addClass("enemy");
                $("#enemies-available").append($("#boba"));
                $("#vader").addClass("enemy");
                $("#enemies-available").append($("#vader"));                
            }

            else if (selection.hasClass("han")) {
                playerOne = hanChar;
                playerOneHealthDiv = $("#han-health");
                forHan.play();
                $("#luke").addClass("enemy");              
                $("#enemies-available").append($("#luke"));
                $("#boba").addClass("enemy");
                $("#enemies-available").append($("#boba"));
                $("#vader").addClass("enemy");
                $("#enemies-available").append($("#vader"));              
            }

            else if (selection.hasClass("boba")) {
                playerOne = bobaChar;
                playerOneHealthDiv = $("#boba-health");
                forBoba.play();
                $("#luke").addClass("enemy");
                $("#enemies-available").append($("#luke"));
                $("#han").addClass("enemy");
                $("#enemies-available").append($("#han"));
                $("#vader").addClass("enemy");
                $("#enemies-available").append($("#vader"));
           }

            else if (selection.hasClass("vader")) {
                playerOne = bobaChar;
                playerOneHealthDiv = $("#vader-health");
                forVader.play();
                $("#luke").addClass("enemy");
                $("#enemies-available").append($("#luke"));
                $("#han").addClass("enemy");
                $("#enemies-available").append($("#han"));
                $("#boba").addClass("enemy");
                $("#enemies-available").append($("#boba"));              
            }    
            chooseDefender();
        });
    };

    function chooseDefender() {
        $('.enemy').on('click');        
        $(".enemy").click(function() {
            var enemySelection = $(this);

            if (enemySelection.hasClass("luke")) {
                defender = lukeChar;
                defenderHealthDiv = $("#luke-health");
                forLuke.play();
                $("#luke").addClass("defender-black");
                $(".defender-box").append($("#luke"));    
            }

            else if (enemySelection.hasClass("han")) {
                defender = hanChar;
                defenderHealthDiv = $("#han-health");
                forHan.play();
                $("#han").addClass("defender-black");
                $(".defender-box").append($("#han"));           
            }

            else if (enemySelection.hasClass("boba")) {
                defender = bobaChar;
                defenderHealthDiv = $("#boba-health");
                forBoba.play();
                $("#boba").addClass("defender-black");                
                $(".defender-box").append($("#boba"));               
            }

            else if (enemySelection.hasClass("vader")) {
                defender = vaderChar;
                defenderHealthDiv = $("#vader-health");
                forVader.play();
                $("#vader").addClass("defender-black");                
                $(".defender-box").append($("#vader"));               
            }

            $('.enemy').off('click');
            doBattle();
        });

    };

    function doBattle() {
        if (gameOver) {
            restart();
        }
    
        var playerOneHealth = playerOne.health;            
        var defenderHealth = defender.health;
        var defenderAttack = defender.counterAttack;
            $("#attack").click(function() {
                forAttack.play();
                playerOneHealth = playerOneHealth - defenderAttack;
                defenderHealth = defenderHealth - attack;
                $(playerOneHealthDiv).html(playerOneHealth);
                $(defenderHealthDiv).html(defenderHealth);
                var update = "You hit for " + attack + " and were hit back for " + defenderAttack;
                $(".fight-update").html(update);
                attack = attack + 5;
                
                    if (playerOneHealth <= 0 && defenderHealth > 0) {
                        gameOver = true;
                        forLoss.play();
                        $(".fight-update").html("You LOST!!! Click restart to play again.");
                        $("#attack").off("click");
                        restart();
                    }
                    
                    else if (defenderHealth <=  0 && playerOneHealth > 0) {
                        winCounter = winCounter + 1;
                        // console.log("win counter: " + winCounter);
                        $(".defender-box").empty();
                            if (winCounter > 2){
                                $(".fight-update").html("You WIN!! The galaxy is yours. RESTART to play again!")
                                setTimeout(forWinFunc, 1000);
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

    function forWinFunc() {
        forWin.play();
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