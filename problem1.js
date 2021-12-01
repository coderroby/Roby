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

console.log(countOfVowels); */

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


