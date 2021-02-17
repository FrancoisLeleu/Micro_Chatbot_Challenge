// ---------welcome messages---------------- //

const welcome = ["Hi, welcome !", "Nice to see you again !","Welcome back !"];


   
    var randomItem = welcome[Math.floor(Math.random()*welcome.length)]; // randommessage
    function displayMsg (message) {  // fonction réutilisable(displayMsg)!
        let p = document.getElementById("randomText");
        p.textContent = message;
    }
    
    window.onload= () => {
        displayMsg (randomItem);
        setTimeout(function () { 
        displayMsg ("How Are You Today ?")}, 6000);
    }
    //----------- Second part( user answer)----------//
    
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
    
    var welcomebot = document.getElementById("welcomeBot");
    var frustrated = document.getElementById("frustratedBot");
    var mad = document.getElementById("madBot");
    //HIDDEN IMAGES
    frustratedBot.style.display = "none";
    madBot.style.display = "none";


function sendInput() {  
    let userInput = document.getElementById("input").value;// récuperer la valeur 

// include() or touppercase/tolowercase(): rajoute plus de condition dans la selection des rép !


    
    if (userInput== answerY){
        displayMsg(sentenceYes);
        welcomeBot.style.display="inline";
        frustrated.style.display = "none";
        mad.style.display = "none";


    }
    else if (userInput==answerN){
        displayMsg(sentenceNo);
        welcomeBot.style.display="none";
        frustrated.style.display = "inline";
        mad.style.display = "none";
    }
    else {
        displayMsg("dude, are you sure you can read?") ;
        welcomeBot.style.display="none";
        frustrated.style.display = "none";
        mad.style.display = "inline";
        
document.getElementById("send").addEventListener('click',()=>{  
    xClick++        
    
                let xClick = 0 ;
                if(xClick > 3){
                    displayMsg("what are you doing");
                }
                else {
                        setTimeout(function(){
                        displayMsg("goodbye")},5000);
                }
            
             });// close function
        
       
        }
}


 
   
      
 




