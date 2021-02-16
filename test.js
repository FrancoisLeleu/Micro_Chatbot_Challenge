// WELCOME MESSAGES 
//CREATE ARRAY FOR WELCOME MESSAGES
/* const welcome = ["Hi, welcome", "Nice to see you again","Welcome back"]; */
//RANDOMIZE ARRAY ITEMS
/* let randomWelcome = welcome[Math.floor(Math.random()*welcome.length)]; */
//RETRIEVE MARKUP FOR BOT WELCOME MESSAGE   
/* let p = document.getElementById("randomText"); */
//ATTRIBUTE RANDOM MESSAGE FROM ARRAY
/* p.textContent = randomWelcome; */
//"HOW DO YOU FEEL TODAY?"

/* setTimeout(function(){
    document.getElementById("randomText").innerHTML = "How do you feel today?";},3000);
 */
    const welcome = ["Hi, welcome", "Nice to see you again","Welcome back"];

    var randomItem = welcome[Math.floor(Math.random()*welcome.length)];
      
    function displayMsg (message) {
      let p = document.getElementById("greetings");
      p.textContent = message;
      }
  
    window.onload= () => {
      displayMsg (randomItem);
      setTimeout(function () { 
        displayMsg ("How Are You Today ?")}, 6000);
      };
  
    
// SEND BUTTON
/* let btn = document.getElementById("send"); */
/* btn.addEventListener("click",function{ */
//function to send
/* }) */




/* let y = "yes";
let n = "no";

if (userInput.match(y) != null) {
    p.textContent = randomYes;
}else if (userInput.match(n)!= null){
  p.textContent = randomNo;
} */





// inclure html (récuperer doc)
//link 
// var useranswer(si contient oui ou non)
// getElementById (ENTER BUTTON)
const answers =[
    ("blabla", "blalbla", "lolololo"),
    ("hahah", "gthtgth", "hdtyrike"),
    ("hdgfty"," nghteek","nbhgur"), 
]
const answer =[
    ("nonon", "niet ", "no"),
    ("non", "hoya", "niecth"),
    ("niiiet"," nononno","nono"), 
]

var reponse ={Y:"yes", n:"non"}; 

for (var property in reponse){
    if ("yes") {
        let answersindex = Math.floor(Math.random()*answers.length);
        console.log(answers[answersindex]);
}
    else if ("no"){
        let answerindex = Math.floor(Math.random()*answer.length);
        console.log(answer[answerindex]);
}
    else { 
        console.log("i didn't understand, can you please try again");
        if ( (reponse != "yes" && reponse !="non") =3  ){
            console.log ("dude, are you sure you can read?");
        } // alert
    }
}






