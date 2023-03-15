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

console.log(makeFrequencyTable(arr1)); // Output: {a:3}
console.log(makeFrequencyTable(arr2)); // Output: {a:2, b:1, c:3, B:1, d:1}
console.log(makeFrequencyTable(arr3)); // Output: {}


/* Given an non-empty array of odd length containing ints where every int but one has a matching pair
(another int that is the same) return the only int that has no matching pair*/

const numsA = [1];
const numsB = [5,4,5];
const numsC = [5,4,3,4,3,4,5];
const numsD = [5,2,6,2,3,1,6,3,2,5,2];

function oddOccurences(nums){
    var myObj= makeFrequencyTable(nums); // creates a frequency table using the funstion created above 
    var keys = Object.keys(myObj);
    for(var i = 0; i < keys.length; i++){ // interates through the table 
        if(myObj[keys[i]]%2==1){ // checks to see which int appears once 
            return keys[i]; // returns the int
        }
    }
}

console.log(oddOccurences(numsA));
console.log(oddOccurences(numsB));
console.log(oddOccurences(numsC));
console.log(oddOccurences(numsD));