// ~~~~~~~~~~~~ Flatten Array ~~~~~~~~~~~~~~~

// Given a 2 dimensional array (an array containing arrays), return a new array containing just the values from inside the sub-arrays.
// Don't assume the array will always be the same size, or that the sub-arrays are all the same length (the array might be jagged). Don't use built-in methods like 
// Array.prototype.flat() but feel free to use .push(value) and/or .pop() where needed.

// Complete the following function
function flatten(arr2d) {
    var flat = []; // empty array to push the result into
    for(var i = 0; i < arr2d.length; i++){ //first for loop to interate through the array
        for(var j = 0; j < arr2d.length; j++){ // second for loop to interate through the sub-arrays 
            flat.push(arr2d[i][j]); // pushes the values of the sub-arrays into the empty array
        }
    }
    return flat; // returns the result 
}

var result = flatten ([[2,5,8], [3,6,1], [5,7,7]]);
console.log(result); // Logs the result