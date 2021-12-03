/*

//=================================================Problem 1 ================================
// 1 theke 6 er moddhe jekono number print korte hobe

function randomNumber(min, max) {                       // random number returns from max and min
    return Math.floor(Math.random() * (max - min + 1));

}
console.log(randomNumber(1,6));

for(let x = 0; x<6; x++){
    console.log(randomNumber(1,6));
} 

//made a function  which take how many time you want to print random number between max and min number you gave 
function numberOfPrint(num, minNumber, MaxNumber) {            
    for (let x = 0; x < num; x++) {
        console.log(randomNumber(minNumber, MaxNumber));
    }
}
numberOfPrint(5, 1, 6);

*/

/*

//=====================================Problem 2 ==================================
// sort all of your class members alphabetically 

const students = ["Robi", "bayzid", "Sohag", "banna"];
const sortedStudents = students.map(lowerCase);
function lowerCase(value) {
    return value.toLowerCase();
}
sortedStudents.sort();
console.log(students);
console.log(sortedStudents);
students.sort();
console.log(students);


// sort Roll no wise. 
const roll_numbers = [4, 8, 9, 1, 2, 5, 10];
roll_numbers.sort(function sortRoll(a, b) { return a - b; });
console.log(roll_numbers);

*/

// ================problem 4 : count vowels from a string ====================
// split string to array (string.split() // Array.from(string)); 
//string array element gula k ekta ekta kore dhora (forEach())
//fixed array er sathe ekta ekta kore asa value gula k compare kora. 
// jodi statement thik thake ba find kore pai thole count barano
//last e retuns kora Count k

//=== manual solve==
/* let myString = "I Love Bangladesh.";
let stringToArray = myString.split("");// Array.from(myString);
console.log(stringToArray);
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
let countOfVowels = 0;
stringToArray.forEach(count)
function count(value) {
    if (vowels.includes(value)) {
        countOfVowels++;
    };

    return countOfVowels;
}

console.log(countOfVowels); 

//==functional Solve ==
const vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function countVowels(justString) {
    let count1 = 0;
    let myArray = Array.from(justString);
    
    myArray.forEach(function (value) {
        if (vowel.includes(value)) {
            count1++;
        }
    });
    return count1;
}
console.log(countVowels("Hello TV"));

*/


/*
// =======Count the number of times a same value appears in a javascript array========

const arr = ["a", "b", "b", "c", "c", "b", "b", "c"];
let count = 0;
function duplicateElementNumber(array, searchElement) {
    array.forEach(function (value) {
        if (value == searchElement) count++;
        return count;
    })
    console.log(`${searchElement} has ${count} times `);
}

duplicateElementNumber(arr, "a");

*/

// ======= Find Duplicate elements and  unique elements.======== ( ( In my way ))
const arr = ["a","c","b", "b","c","c","c", "E"];
let count = 0;
const newArray = [];
const uniqueArray = [];

arr.forEach(function duplicateElementNumber(searchElement) {
    arr.forEach(function (value) {
        if (value == searchElement) {count++;
        return count;}
    })
    
    console.log(`${searchElement} has ${count} times `);
    if (count > 1) {newArray.push(searchElement);};
    if (count == 1)uniqueArray.push(searchElement);
    count = 0;
   return newArray;
}); 
console.log(newArray);
console.log(uniqueArray);

let duplicateArrayElements = Array.from(new Set(newArray));   // Set returns object . to convert newArray to a unique array. Array.from() --> converting array from object. 
console.log("Duplicate array : "+ duplicateArrayElements);
console.log("Unique array : "+ uniqueArray);

console.log("==============================");


// solve this in short way. 

const someNumbers = [1,4,5,6,4,3,2,1,8];
const duplicateNumbers = someNumbers.filter(function(value, index, array){     // filter can access 3 elements value, index and array
   return array.indexOf(value) !== index;
});
console.log(duplicateNumbers);

const uniqueNumbers = someNumbers.filter(function(value, index, array){
    return array.indexOf(value) === index;
 });
console.log(uniqueNumbers);




//========================Leap year function===================
function leapYear(year){
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0)
    console.log(`${year} is a Leap Year.`);
    else console.log(`${year} is not a Leap Year.`);
}

leapYear(2026);









