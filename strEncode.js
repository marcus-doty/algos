/* String Encode
You are given a string that may contain sequences of consecutive characters.
Create a function to shorten a string by incuding the character,
then the number of times it appears. 

If the final result is not shorter (such as "bb" => "b2"),
return the original string */

const str1 = "aaaabbcddd";
const str2 = "";
const str3 = "a";
const str4 = "ccbb";
const str5 = "abbbbbbbbbbbbbbbbb";

function encodeStr(str){
    // Edge Case
    if(str==""){
        return str;
    }
    var change = false; // will change to true when the index we are comparing are different
    count = 0;
    var temp = str[0];
    var result = "";
    for(var i = 0; i < str.length; i++){
        if(str[i] != temp){
            change = true;
            // add letter + number
            if(count<3){
                result += temp.repeat(count); 
            } else {
                result = result = temp + count;
            }
            temp = str[i];
        } else{
            change = false;
            count ++;
        }
        if(change){
            count = 1;
            change = false;
        }
    }
    if (count < 3){
        result += temp.repeat(count);
    } else {
        result = result + temp + count;
    }
    return result;
}

console.log(encodeStr(str1))
console.log(encodeStr(str2))
console.log(encodeStr(str3))
console.log(encodeStr(str4))
console