//----------3 Messages random de Salutation----------

const welcome = ["Hi, welcome !", "Nice to see you again !","Welcome back !"];


    var randomItem = welcome[Math.floor(Math.random()*welcome.length)];
    function displayMsg (message) {
        let p = document.getElementById("greetings");
        p.textContent = message;
    }
    window.onload= () => {
        displayMsg (randomItem);
 //---------"HOW ARE YOU TODAY" ROBOT MESSAGE---------       
        setTimeout(function () { 
            displayMsg ("How Are You Today ?")}, 4000);
    } 

//---------Réponse du USER---------

    function getInputValue() {
    return document.getElementById("input").value;
  }


//---------Réactions du Bot (version moi)---------  

let counterOfClick = 0;


document.getElementById("send").addEventListener("click", (e) => {

  robotReactToUserInput ();

})

/*
document.getElementById("send").addEventListener("keyPress", (e) => { 
  
  if(e.key === 13) {
    console.log(e.key)
    robotReactToUserInput ();
  }
  })
  */

     //IMAGES
     var welcomeBot = document.getElementById("welcome");
     var frustratedBot = document.getElementById("frustrated");
     var madBot = document.getElementById("mad");
     //HIDDEN IMAGES
     frustratedBot.style.display = "none";
     madBot.style.display = "none";

function robotReactToUserInput () {

  counterOfClick++
    let y = "yes"
    let n = "no"
  

    if (getInputValue ().toLowerCase().includes(y)){
  
          const yesAnswers = ["I'm Happy for You !", "Enjoy my friend, ENJOY !...", "Good to Hear !"]

      
          var randomItem = yesAnswers[Math.floor(Math.random()*yesAnswers.length)];
          displayMsg (randomItem);
          frustratedBot.style.display = "none";
          madBot.style.display = "none";
          welcomeBot.style.display = "inline";

  
    } else if (getInputValue ().toLowerCase().includes(n)){
  
          const noAnswers = ["Don't worry, things are gonna get easier !", "I know, it sucks !", "Life isn't easy for teddy bears like us... "]
          
          var randomItem = noAnswers[Math.floor(Math.random()*noAnswers.length)];
          displayMsg (randomItem);
          frustratedBot.style.display = "inline";
          madBot.style.display = "none";
          welcomeBot.style.display = "none";

          
  
    } else {



            
            if(counterOfClick >= 3){ 

            displayMsg("Dude, can you read ??");
            
            welcomeBot.style.display="none";
            frustratedBot.style.display = "none";
            madBot.style.display = "inline";
            
            setTimeout(function () {
                shutOffMachine ()
            }, 3000);

          } else {
              
            displayMsg ("I didn't get that, could you please try again ?");

            madBot.style.display = "none";
            welcomeBot.style.display="none";
            frustratedBot.style.display = "inline";

          }
        
  
    }

}

function shutOffMachine () {

    document.getElementById("input").disabled=true;
    document.getElementById("send").disabled=true;
    displayMsg ("Bye !");
    
}



  

  //---------Réactions du Bot (version manager)---------

  /*
  let answerYes = ["I'm so Happy for you, you get 1 Life", "Press Start to begin a New Game", "Nooice, but it's still gonna be 20cts to Play"];
  let answerNo = ["You'll start with minus 1 Life", "What's gonna be when you loose the Game ?", "'So sad for you...can we begin now ?"];
  const randomYes = answerYes [Math.floor(Math.random()*answerYes.length)];
  const randomNo = answerNo [Math.floor(Math.random()*answerNo.length)];
function sendInput() {
    let userInput = document.getElementById("input").value;
      if (userInput == "yes") {
        displayMsg (randomYes)
      } else if (userInput == "no") {
        displayMsg (randomNo) 
      } else (
        displayMsg (" Whut ? I did not understand, can you please try again ?")
      )
}
*/
