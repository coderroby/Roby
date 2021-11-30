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

/* 
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

 */

/* 
//=============read a array and multiply its value and return a new array. As like Map method
let nu = [45, 4, 9, 16, 25];
let txt = [];
let c;
nu.forEach(myFunction);

function myFunction(value) {
  console.log("now value: "+ value);
  c = value*2;
  console.log("multiplied value: "+ c);
  txt.push(c);
  console.log("New array: "+ txt);
}
 */

// ===================Map method ==============
// The map() method creates a new array by performing a function on each array element.

// The map() method does not execute the function for array elements without values.

// The map() method does not change the original array.
// Note that the function takes 3 arguments:

// The item value
// The item index
// The array itself
const numbers1 = [45, 4, 9, 16, 25];
const number2 = numbers1.map(multipleArray);

function multipleArray(value) {
  return value * 2;
  return indexs * 2;

}
console.log(numbers1);
console.log("my Array : " + numbers1);
//console.log(number2);
console.log("Multiples Array : " + number2);

// ======================Filter method==========
// The filter() method creates a new array with array elements that passes a test.

// This example creates a new array from elements with a value larger than 18:
const numbers3 = numbers1.filter(filtering);
function filtering(values) {
  return 10 < values;
}
//console.log(numbers3);
console.log("Filtred >10 : " + number2);

// Filtering array using forEach Method==========
let newFilter = [];
numbers1.forEach(myfilter);
function myfilter(value) {
  if (10 < value) { newFilter.push(value) };
  return newFilter;
}
console.log(newFilter);


// ====================Reduce method ======================
// The Array reduce() Method
// The reduce() method runs a function on each array element to produce (reduce it to) a single value.

// The reduce() method works from left-to-right in the array. See also reduceRight().

// The reduce() method does not reduce the original array.

let sum = numbers1.reduce(sumFunction);
console.log(numbers1);
function sumFunction(total, value) {
  //console.log(total);
  console.log("-----");
  return total + value;

}   //total, value, index, array
console.log(sum);
console.log("Sum of numbers: " + sum);

let sum2 = numbers1.reduce(sumFunction, 20); //if want to initialize some value starts from reduce(sumFunction,20);
console.log(sum2);
console.log("=================");

let squre = numbers1.reduceRight(squreFunction); //if want to initialize some value starts from reduce(sumFunction,20);
function squreFunction(a, b){
  return a +(b*b);
}
console.log("Result of reduceRight (squre and sum): : "+ squre);
console.log("=================");

// solving reduce method using forEach method
let sum1 = 0;

function sumFunction1(value) {
  sum1 += value;
}
numbers1.forEach(sumFunction1);
console.log(sum1);


// convert String to array Array.form() method.
let testLine = "asdhasiihisa";
console.log(Array.from(testLine)); // convert a sring to array.
console.log(testLine.split(""));  // as same as Array.from(veriable);


// nameOfArray.every() method /// Some like filter method
// সব গুলো উপাদানের মধ্যে আমার যুক্তি কি ঠিক আছে? (সত্য নাকি মিথ্যা) 
let allOver18 = numbers1.every(myFunction);

function myFunction(value) {
  return value > 18;
}
console.log(allOver18);


// some() method 
//  কোনো একটা উপাদান কি আমার যুক্তি মানে?
let allOver40 = numbers1.some(myFunction);

function myFunction(value) {
  return value > 40;
}
console.log(allOver40);


//Array.indexOf() returns -1 if the item is not found.
console.log(numbers1.indexOf(9)); // --> 2 ----> [45, 4, 9, 16, 25]
const fru = ["Apple", "Orange", "Apple", "Mango"];
let position = fru.lastIndexOf("Apple") + 1;
console.log(position);

//===== include
//তোমার array  এর মধ্যে কি আমার উপাদান তা আছে? (হা / না? )
//ECMAScript 2016 introduced Array.includes() to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf).

console.log(fru.includes("Mango"));   // true
  




