// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ CONDITIONALS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Example 1 - Always isSunny

var isSunny = true;
var temperature = 45; 
var isRaining = false;
var whatToBring = "I should bring: ";
// creates variables and sets their values 

if(isSunny){
    whatToBring += "sunglasses, ";
}
// above code means that if isSunny is true then we will add "sunglasses" to our list.

if(temperature<50){
    whatToBring += "a coat, ";
}
// above code means that if the temperature is lower then 50 degrees then we will add "a coat" to our list.

if(isRaining) {
    whatToBring += "an umbrella, ";
}
// above code means that if isRaining is true then we will add "an umbrella" to our list.

whatToBring += "and a smile!";
// above code will always add "and a smile!" lastly to our list.

console.log(whatToBring);
// prints the list currently will print "I should bring: sunglasses, a coat, and a smile!"

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Example 2 - Prepare for downcount

for(var i = 10; i > 0; i--){
// creates a for loop with a variable of i with the value of 10, it sets the parameter of while i is less then 0 the loop will continue and decrement everytime it loops
    if (i != 2) {
        console.log(i);//sets the conditional that if i is not equal to the value of 2 it will print the value of i
    }else{
        console.log("ignition!");//otherwise if i does become the value of 2 it will print "ignition"
    }
}
console.log("liftoff!"); // once the loop's conditional is met in this case the value of i equaling 0 it will then print "Liftoff!"
// the code above prints the following
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// ignition!
// 1
// liftoff!

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Example 3 - Count positives!

var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];
for(var i = 0; i < numbers.length; i++) {
    // creates a for loop that create a variable of i that traverses the length of the numbers array
    if (numbers[i] > 0){
        countPositives++;
        // if the value of the index of i in the numbers array is greate then 0 it will increase the value of countPositives
    }
}
console.log("there are " + countPositives + " positives values");