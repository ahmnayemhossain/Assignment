// 1) Create a function that takes voltage and current and returns the calculated power.  Ex- circuitPower(110, 3) ➞ 330
function circuitPower(vol, cur) {
    return vol * cur;
}
console.log(circuitPower(110,3));


// 2) Write a JavaScript function named ‘findMaxNumber’ that takes an array of numbers as an argument and returns the maximum number in the array. If the array is empty, the function should return null.
function findMax(a){
    if (a.length === 0) {
        return null;
    }
    let maxNum = Number.NEGATIVE_INFINITY;
    a.forEach((Element)=> {
        if(maxNum < Element){
            maxNum = Element;
        }
    });
    return maxNum;
}
console.log(findMax([45,65,20,5,8,67,4,7,17]));
console.log(findMax([]));


// 3) Write a JavaScript function named ‘mergeArrays’ that takes two arrays as arguments and returns a new array.
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1,2,3,4],[5,6,7,8]));


// 4) Create a function ‘arrayValuesTypes’ that takes an array and returns the types of values (data types) in a new array. Ex- arrayValuesTypes([1, 2, "null", []]) ➞ ["number", "number", "string", "object"]
function arrayValuesTypes(arr) {
    return arr.map(value => typeof value);
}
console.log(arrayValuesTypes([1, 2, "null", []]));
console.log(arrayValuesTypes(["Bangladesh", 2, null, []]));
