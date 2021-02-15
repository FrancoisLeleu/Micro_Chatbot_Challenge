/*-------------------------------------------------------------------first step------------------------------------------------------------*/

const welcome = ["Hi, welcome", "Nice to see you again","Welcome back"];

let randomWelcome = welcome[Math.floor(Math.random()*welcome.length)];

let p = document.getElementById("randomText");

p.textContent = randomWelcome;

/*------------------------------------------------------------How do you feel today----------------------------------------------------------*/

function howare() {
    setTimeout(function(){ alert("How do you feel today"); }, 6000);
  }

window.onload=howare

