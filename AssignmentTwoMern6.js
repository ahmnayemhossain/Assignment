// 1) Write a function named ‘calculateSum’ that takes two arguments and returns their sum.
function calculateSum(a, b){
    let result = a + b;
    return result;
}
console.log(calculateSum(10,15));


// 2) Write a function named ‘isEven’ that takes one argument and returns true if the number is even, and false otherwise.
function isEven(a){
    let div = a%2;
    if(div == 0){
        return true;
    } else{
        return false;
    }
}
console.log(isEven(11));
console.log(isEven(10));


// 3) Write a function named ‘findMax’ that takes an array of numbers and returns the largest number in the array.
const arr = [5, 10, 35, 15, 30, 20, 25,];

function findMax(a){
    let maxNum = Number.NEGATIVE_INFINITY;
    a.forEach((Element)=> {
        if(maxNum < Element){
            maxNum = Element;
        }
    });
    return maxNum;
}
console.log(findMax(arr));


// 4) Write a function named ‘reverseString’ that takes a string and returns the string reversed.
const str = 'Bangladesh';
function reverseString(str){
    let splitStr = str.split('')
    let strReverse= splitStr.reverse();
    let result = strReverse.join("");
    return result;  
}
console.log(reverseString('bangladesh'));

// another way 

function reverseString(str){
    return str.split('').reverse().join("");
}


// 5) Write a function named ‘filterOddNumbers’ that takes an array of numbers and returns a new array containing only the odd numbers.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function filterOddNumbers(num) {
    return num % 2 !== 0;
}
const oddNumbers = numbers.filter(filterOddNumbers);
console.log(oddNumbers); 


// 6) Write a function named ‘sumArray’ that takes an array of numbers and returns the sum of all elements.
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function sumArray(num){
    let sumNum = 0;
    for(let i=0; i < num.length; i++){
        let arrayNum = num[i];
        sumNum += arrayNum;
    }
    return sumNum;
}
console.log(sumArray(numbersArray));



// 7) Write a function named ‘sortArray’ that takes an array of numbers and returns a new array sorted in ascending order.
const numOfArray = [7, 50, 23, 11, 9, 25, 14, 12, 16, 1, 4]
function sortArray(arr){
    return arr.sort((a,b)=> a-b);
}
console.log(sortArray(numOfArray));



// 8) Write a function named ‘capitalizeFirstLetter’ that takes a string and returns the same string with the first letter capitalized. Ex-  console.log(capitalizeFirstLetter("hello"));  // Output:  "Hello"
function capitalizeFirstLetter(str){
    let firstWord = str[0].toUpperCase();
    let result = str.replace(str[0], firstWord);
    return result;
}
console.log(capitalizeFirstLetter("banglsdesh"));
