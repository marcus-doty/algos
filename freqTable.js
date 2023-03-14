/* Given an array of strings
return the number of times each string occurs (a frequency / hash table) */

const arr1 = ["a", "a", "a"];
const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
const arr3 = [];

function makeFrequencyTable(arr){
    var obj = {} // Start with an empty array
    for(var i = 0; i < arr.length; i++){ // iterate through the array 
        if (arr[i] in obj){  // checks to see if the value of the index of the array is in the obj. 
            obj[arr[i]]++; // first loop it is not so the else statement will run but if the value IS in the obj then it will increase the number of how many times it appears
        } else {
            obj[arr[i]] = 1; // declares the key and gives it the pair of 1 basically declaring there is one of the values of the index in the obj
        }
    } return obj;
}

console.log(makeFrequencyTable(arr1));
console.log(makeFrequencyTable(arr2));
console.log(makeFrequencyTable(arr3));
