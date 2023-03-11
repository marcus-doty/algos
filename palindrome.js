/* String: Is Palindrome??
Create a function that returns a boolean whether the string is a strict palindrome.
- Palindrome = a string that is the same characters forwards and backwards

Do NOT ignore spaceds, punctuation or capitalization
*/

// RIOT READ Input Output Talk

const str1 = "a x a"; 
const str2 = "racecar";
const str3 = "Dud";
const str4 = "oho!";
const str5 = "abba";

function isPalindrome(str){
    // make an empty string so you have "box" to put the results of your for loop in
    newStr= "";
    // Loop through the string decrementing down the string 
    for(var i = str.length-1;i>=0; i--){
        // "push" the values of the index of the string you are looping through to the newStr
        newStr += str[i];
    }
    // Compare and return true boolean if the newStr is equal to str
    if(newStr === str){ 
        return true;
    // itherwise return false
    } else {
        return false;
    }
}

console.log(isPalindrome(str1)) // Output : true
console.log(isPalindrome(str2)) // Output : true
console.log(isPalindrome(str3)) // Output : false
console.log(isPalindrome(str4)) // Output : false
console.log(isPalindrome(str5)) // Output : true