// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ || Variables || ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// What is a variable?
// a container that holds a value, box

// Everything in programming is data!!
// All data has types!
// JS has Strings(text), Numbers, Boolean(true or false)

// Just like how boxes can be reused so can variables
// contents can change!!

// to be able to use the boxes and move them around properly they need labels
// labels need to describe the contents of the box
// in the same way variables names need to describe the data inside them

// do the names of variables natter to the computer? No! 

// to make NEW variable in JS we need the var keyword 

var firstName ="Marcus";
var lastName="Doty";

var firstName = "Kyle"; // this will remove the previous firstName variable and creates a new one
var firstNName= "Bob"; // this is not the same variablr even if its only 1 character different

lastName="Ryan"; //this changes the value inside the variable

// As engineers we follow conventions for naming and other stuff to standardize 
// In JS we use camelCase, first word in lower case and subsequent words are capitalize 

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ || Loops || ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// We often need to repeat a set of instructions multiple times
// To help our code be concise, and to help our sanity, we don't want to write out each instruction one by one 50 billion times
// Loops a,low us to write out a set of instructions that can be repeated as many times as we need!

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ || FOR LOOP || ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Loop variable, this is a variable declared specifically for this loop
// Condition the loop will only run if the condition is true
// Increment/Decrement step, modify the loop variable so as to make the condition false and runs after the code block

for(var i = 0; i <= 10; i+=2){
    // Curly braces denote a code block
    // Where we put the code, or instructions, that run when the loop runs
    // We can put almost inifite lines of code in a code block
    console.log(i)
}

// Can we use the loop variable somewhere else? In JS, as long as we use the var keyword, YES
// but is it good practice? NO!


