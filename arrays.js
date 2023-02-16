// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ARRAYS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Arrays are composite data types, collections, data structures
// Can contain any number of any data type
// Can mix and match data types (in JavaScript)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SWAPING VARIABLES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var fruit1 = "apples"; // creates a variable fruit1 and gives it the value of apples
var fruit2 = "oranges"; // creates a variable fruit1 and gives it the value of oranges

var temp = fruit1; // creates a variable of temp  and gives it the value of "apples" as for that is the value given to fruit1
fruit1 = fruit2; // changes the value of fruit1 to the value of fruit2 which is "oranges"
fruit2 = temp; // changes the value of fruit2 to the value that temp held in this case it is "apples"
    
console.log(fruit2 + " and " + fruit1); //prints "apples and oranges"

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ WHILE LOOPS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Loops we can create where we can work exclusivly with just a condition. 

var start = 0; //creates a variable "start" and gives it the value of 0
var end = 12; // creates a variable "end" and gives it the value of 12
    
while(start < end) { //creates a loop with the condition that while the value of start is less than the value of end the code runs
    console.log("start: " + start + ", end: " + end); // prints "start: {the value of start}, end: {the value of end}"
    start += 2; // increases the value of start by 2
    end -= 2; // decrements the value of end by 2
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ REVERSING AN ARRAY ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var arr = ["a", "b", "c", "d", "e"]; // creates an array and give it the values of a, b, c, d, and e
var tempArr = []; //creates an empty array
for(var i = arr.length - 1; i>=0; i--){ // for loop that creates a variable i and gives it the value of the length of the arr minus 1, sets the condition of while the value of i is greater than or equal to 0, lastly decrements the value of i by 1
    tempArr.push(arr[i]) // pushes the value of the array in the index that equals i into a new temporary array
}
arr = tempArr; // changes the value of the array into the value of the temporary array
console.log(arr); // prints the array