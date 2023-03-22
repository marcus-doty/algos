/* Given a String, retrun a new string with the duplicate characters excluded Bonus: Keep only the last instance of each character.*/

const str1 = "abcABCabcABCabcABC";
const str2 = "helloo";
const str3 = "";
const str4 = "aa";
//bonus
const str5= "aba"

function stringDedupe(str){
    var newStr = "";
    const dict = {};

    //loop backwards to include last occurence 
    for(let i = str.length-1;i>=0;i--){
        if (!dict[str[i]]){ // if we have not seen the character
            newStr=str[i]+newStr; // add the character the the front of the string
            dict[str[i]]=true; // change the value of that character to true so that the code doesnt run again for the character again
        }
    }
    return newStr; // return the new string
}

console.log(stringDedupe(str1))
console.log(stringDedupe(str2))
console.log(stringDedupe(str3))
console.log(stringDedupe(str4))
console.log(stringDedupe(str5))