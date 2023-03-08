// String: Reverse
// Given a string, return a new string that is the given string reversed

const str1 = "creature"
const str2 = "dog"
const str3 = "hello"
const str4 = ""

function reverseString(str){
    newStr = "" // starts with a new string
    for(var i = 0; i <str.length; i++) { // Interates through the string
        temp = str[str.length-1-i]; // creates new variable temp and give it the value of the last letter in the string and continues through the string until there are no letters left
        newStr += temp; // assigns the value of the temp to the variable newStr
    }
    return newStr;
}

// TEST CODE

console.log(reverseString(str1))
console.log(reverseString(str2))
console.log(reverseString(str3))
console.log(reverseString(str4))