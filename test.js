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
// var useranswer(si contient oui ou non)
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
        if ( ..> 3){
            console.log ("dude, are you sure you can read?");
        } // alert
    }
}



