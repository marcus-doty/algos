var floor = Math.floor(1.8);
var ceiling = Math.ceil( Math.PI );
var random = Math.random();
    
console.log(floor); // floor rounds down to the closest whole number in this case 1 and returns it
console.log(ceiling); // ceil rounds up to the closest whole number in this case 4 and returns it
console.log(random); // random gives a number between 0 and 1 and returns it

function d6() { 
    var roll = Math.random();
    roll = Math.ceil(roll*6);
    return roll;
}
// This function works like a dice roll it will return a random number between 1 and 6
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);


var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function answers(){
    var length = lifesAnswers.length;
    var i = Math.floor(Math.random()*length);
    return lifesAnswers[i];
}
// This function works like a magic eight ball its traverses the array and will return a random answer from within it
console.log(answers());