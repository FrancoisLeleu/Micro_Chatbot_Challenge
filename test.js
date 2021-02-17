/*-----------------------------------------------------------------first step----------------------------------------------------------------------------------------*/

const welcome = ["Hi, welcome !", "Nice to see you again !","Welcome back !"];

    var randomItem = welcome[Math.floor(Math.random()*welcome.length)];
    function displayMsg (message) {
        let p = document.getElementById("greetings");
        p.textContent = message;
    }
/*------------------------------------------------------------How do you feel today ?------------------------------------------------------------------------------------*/

    window.onload= () => {
        displayMsg (randomItem);
        setTimeout(function () { 
            displayMsg ("How Are You Today ?")}, 6000);
    }
    
/*-------------------------------------------------------------------Yes or No-----------------------------------------------------------------------------------------*/

/*---------------------------------------------------------Let and Constants assignations---------------------*/

      let answerYes = ["I'm so Happy for you, you get 1 Life", "Press Start to begin a New Game", "Nooice, but it's still gonna be 20cts to Play"];

      let answerNo = ["You'll start with minus 1 Life", "What's gonna be when you loose the Game ?", "'So sad for you...can we begin now ?"];

      let wrong = 0;

      const randomYes = answerYes [Math.floor(Math.random()*answerYes.length)];

      const randomNo = answerNo [Math.floor(Math.random()*answerNo.length)];

/*-----------------------------------------------------------------Main Function----------------------------------------------------------------------------------------*/

    function sendInput() {
        let userInput = document.getElementById("input").value;
        
          if (userInput == "yes") {
            displayMsg (randomYes)
          } else if (userInput == "no") {
            displayMsg (randomNo)
          } else { wrong ++;
            if (wrong <= 3)
            {displayMsg("Whut ? Can you be more specific ?")}
            else {displayMsg("Bzzzt that's enough ! My circuits are boiling, GAME OVER !")
            };
            
          }};
