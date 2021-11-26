/*
// let text = "asdanhfsdjfdsafohdoaisi";
// console.log(text.length);
*/

/*
//=================string escape characters  \" '\ \\ =========================
let text = "We are the so-called "Vikings" from the north.";
let text = "We are the so-called \"Vikings\" from the north.";
console.log(text); */

/*
//===========================string value , object , type.=======================
let x = "Jhon";
let Y = new String("Jhon");
console.log(x==Y);
console.log(x===Y);
*/

/*
//======================================string methods===========================
let car = "abcdeefghij";
console.log(car.slice(4,11));
console.log(car.slice(-13,-8));
console.log(car.slice(5));
console.log(car.substring(7));
console.log(car.substring(7,10));
//console.log(car.substring(-15,-10)); xxxx
console.log(car.substr(3, 5));
console.log(car.substr(3));
*/

/*
//============================= replace method================
let love = " I love Robi";
let b = love.replace("Robi", "Code");
console.log(love);
console.log(b);
let c = love.slice(0,8) + "Slice method";
console.log(c);
*/

/* 
//============================trim method===========================
let x = "     Hello World";
console.log(x);
console.log(x.trim());
*/

/*
var str = "HELLO WORLD";
console.log(typeof str.charAt(500));   // string
console.log(typeof str[500]);          // Undefined  --- value + data type
*/


//============================split method===========================
var str = "HELLO WORLD";
console.log(str.split(""));
console.log(str.split(" "));
var str = "HELLO,WORLD";
console.log(str.split(","));

 