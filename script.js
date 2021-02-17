
const welcome = ["Hi, welcome !", "Nice to see you again !","Welcome back !"];


    var randomItem = welcome[Math.floor(Math.random()*welcome.length)];
    function displayMsg (message) {
        let p = document.getElementById("randomText");
        p.textContent = message;
    }
    
    window.onload= () => {
        displayMsg (randomItem);
        setTimeout(function () { 
            displayMsg ("How Are You Today ?")}, 6000);
    }

const yes =[
        "good" , "fine" , "great"
    ]
    let sentenceYes =yes[Math.floor(Math.random()*yes.length)];
const no =[
        "just smile", "that's too bad" , "don't worry" 
    ]
let sentenceNo =no[Math.floor(Math.random()*no.length)];
    
let answerY= "yes";
let answerN="no";

function sendInput() {
    let userInput = document.getElementById("input").value;

    
    if (userInput=== answerY){
        displayMsg(sentenceYes);
    }
    else if (userInput===answerN){
        displayMsg(sentenceNo);
    }
    else {
        displayMsg("dude, are you sure you can read?") ;
         
        
        document.getElementById("send").addEventListener('click',()=>{
           
            if (send => 3);{
               
            displayMsg("what are you doing");
            }
        });
    }
}

   
        
 




