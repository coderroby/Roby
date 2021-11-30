/* const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars;
console.log(x);
console.log(cars.length);        //array elements number
console.log(cars[0]);          // first element
console.log(cars[cars.length -1]); // last element
 */
/* 
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;
let list = "<ul>";
let text = "";
for (let i = 0; i < fLen; i++) {
  console.log(fruits[i] + "<br>");
  text += fruits[i] + ", ";
  list += "<li>"+fruits[i] + "</li>";
  document.getElementById("demo").innerHTML = text;
} 
//document.getElementById("demo").innerHTML = text;
//document.getElementById = ("demo").innerHTML = 'hi';     // document.GetElementByID = use korar karone data astechilo na.
list += "</ul";
document.getElementById("list").innerHTML = list;


 */




/* function printlist(Banan){
    console.log(Banan);
}
printlist("liza"); */

/* 
function sorting(a, b){
  return a - b;
}

console.log(sorting(6, 9));

 */

/* 
const collection = ["mango", "banana", "Jackfruit", "lemon", "Amrud"];
const setOfNumbers = [9, 4, 6, 8, 1, 2, 5, 15];
setOfNumbers.sort();
console.log(setOfNumbers);
let sortedCollection = collection.sort();
console.log(collection);
console.log(collection[0]);

const sortedSetofNumbers = setOfNumbers.sort(sortNumbers);
function sortNumbers(a, b) {
  return a - b;
}
console.log(sortedSetofNumbers);
console.log(setOfNumbers);
let minNumber = setOfNumbers[0];
let maxNumber = setOfNumbers[setOfNumbers.length - 1];
console.log(minNumber);
console.log(maxNumber);


const cars = [
  { type: "runner", year: 2018 },
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 }
];

cars.sort(carSort);
function carSort(a, b) {
  return b.year - a.year;
}
console.log(cars[0]); */

/* let a = "abab";
let b = "asrsy";
let c = a.concat(b);
console.log(c); */
/*
// ======================Just tried to loop sort under sort to sort a array] =============
const cars = [ "mango", "banana", "Jackfruit", "lemon", "Amrud"];
cars.sort(function (a, b) {
  let c = [a, b];
  console.log(c);
  c.sort();
  console.log(c);
});
console.log(cars);
 */
/*
let names = ["lemon", "Amrud"];
let result = names[0] - names[1];
let result1 = names[1] - names[0];
console.log(result1 - result);
console.log(names.sort());
 {
  if (result1 > result) { return 1; }
  if (result1 < result) { return -1; }
  return 0;
}
//console.log(result); */
/* 
cars.sort(function(a, b){
  let x = a.type.toLowerCase();
  let y = b.type.toLowerCase();
  if (x < y) {return 1;}
  if (x > y) {return -1;}
  return 0;
});

console.log(cars);
 */


const numbers = [45, 4, 9, 16, 25];
numbers.forEach(myData);
function myData(a,b,d,c,e){   // ekta array theke 3 type er data pass hoi 1st = value, 2nd = index, 3rd full array (foreach method er khetre)
  console.log(a);
  console.log(b);
  console.log(d);
  console.log(e);
  console.log(c);
  console.log("==========");
}