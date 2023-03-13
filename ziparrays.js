/* 
Zip Arrays 

Given two arrays, create a associative array (aka hash map, an obj/dictionary) containing keys from the first array, and values from the second.

Asoociative arrays are sometimes called maps because a key (string) maps to a value.

If length of arrays are not equal, return false
*/ 

const key1 = ["flavor", "size", "is_delicious"];
const val1 = ["chocolate", 10, true];

const key2 = [];
const val2 = [];

const key3 = ['name', 'number', 'type', 'evolves_from'];
const val3 = ['Gyarados', 130, 'water/flying', 'Magikarp'];

function zipArraysIntoMap(keys, values){
    let map = {}
    if(keys.length == values.length){ // if the length of the keys is equal to the length of the values the following code will run
        for(var i = 0; i < keys.length; i++){ // for loop to iterate through the keys
            map[keys[i]]=values[i]; // matches the values to the keys and pushes it to the map
        }
        return map;
    } else { // for the edgecase of if the kays and values are empty
        return false;
    }
}

console.log(zipArraysIntoMap(key1, val1))
console.log(zipArraysIntoMap(key2, val2))
console.log(zipArraysIntoMap(key3, val3))