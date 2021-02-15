const welcome = ["Hi, welcome", "Nice to see you again","Welcome back"];


    var randomItem = welcome[Math.floor(Math.random()*welcome.length)];
    function open () {
        alert (randomItem)
    }
    window.onload=open