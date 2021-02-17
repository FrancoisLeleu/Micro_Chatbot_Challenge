//IMAGES
welcomeBot = document.getElementById("welcome");
frustratedBot = document.getElementById("frustrated");
madBot = document.getElementById("mad");
//HIDDEN IMAGES
frustratedBot.style.display = "none";
madBot.style.display = "none";
//WELCOME MESSAGES(AUTOMATIC)
const welcome = ["Hi, welcome !", "Nice to see you again !","Welcome back !"];
var randomItem = welcome[Math.floor(Math.random()*welcome.length)];
//DISPLAY MESSAGES
function displayMsg (message) {
    let p = document.getElementById("greetings");
    p.textContent = message;
}
window.onload= () => {
    displayMsg (randomItem);
    setTimeout(function () { 
        displayMsg ("How Are You Today ?")}, 6000);
}
//YES AND NO MESSAGES(DEPEND ON INTERACTION)
const answerYes = ["I'm so Happy for you, you get 1 Life", "Press Start to begin a New Game", "Nooice, but it's still gonna be 20cts to Play"];
const answerNo = ["You'll start with minus 1 Life", "What's gonna be when you loose the Game ?", "So sad for you...can we begin now ?"];
var randomYes = answerYes [Math.floor(Math.random()*answerYes.length)];
var randomNo = answerNo [Math.floor(Math.random()*answerNo.length)];
//SEND MESSAGES 

function sendInput() {
    
    let userInput = document.getElementById("input").value;
    if (userInput == "yes") {
        displayMsg (randomYes);     
    } else if (userInput == "no") {
        displayMsg (randomNo); 
    } else {
        welcomeBot.style.display="none";
        frustratedBot.style.display = "inline";
        displayMsg (" Whut ? I did not understand, can you please try again ?");
    }
    
}

//DISABLE TEXTAREA AND BUTTON
/* document.getElementById("input").disabled = true;
document.getElementById("send").disabled = true; 
  */


