/*
let car = {
    name: "Robi",
    model: "Toyota",
    wight: "550KG",
    color: "white",
    start: "On",
    drive: function () {
        this.position();
        console.log("car is driving");
    },
    position: function (){
        console.log("we are in Running position now.");
    }

}

console.log(car.name);
console.log(car.wight);
//console.log(car["start"]);
car.drive();
console.log(typeof(car.position()));

*/

/*
let x = 5;
let y = new Number(5);
console.log(typeof(x));
console.log(typeof(y));

*/


// Boolean Data

console.log(typeof Boolean(10 > 9));
console.log(Boolean(10 > 9));
console.log(8 < 6);

let a = 5;
let b = "5";
let c = 2;
console.log(a == b);    // check values
console.log(a === b);   // check values and data type

if (a == 5 && b === 5 /* || c === 2 */) {
    console.log("yes condition applied");
}
else console.log("No condition applied");

// =======ternary operator===== if else er onno vabe use kora jai
//variablename = (condition) ? value1:value2 

console.log(a == 5 && b === 2 ? "confition true" : "Condition false");
console.log(a >= 5 ? a > 2 && a != 5 ? "your are just a baby" : "you are more then 2!" : " here a = 5");

console.log("==========================");

// ==================== Comparison check ==============
let age = Number("18");
if (isNaN(age)) {
    console.log("Input is not a number");
} else {
    console.log((age < 18) ? "Too young" : "Old enough");
}
console.log("=======================");
let myAge = Number("18");
if (isNaN(myAge)) {
    console.log("this is not a number");
}
else if (myAge == 18) { console.log("you are 18"); }

else { console.log(myAge < 18 ? "your are too young " : "you are enough aged to marry"); }


console.log("========================");


// ============  Switch condition =================
// switch(expression) {
//     case x:
//       // code block
//       break;
//     case y:
//       // code block
//       break;
//     default:
//       // code block
//   }

let day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "mon";
        break;
    case 2:
        day = "tues";
        break;
    case 3:
        day = "wed";
        break;
    case 4: day = "thurs"; break;
    case 5:
    case 6:
        day = "Weekend is coming";
        break;
    default: day= "no day found ";

}

console.log("today is " + day);

console.log("================");
const arr = [1,2,3];
let j = "1";
for(let i = 0; i <arr.length ; i++){
    console.log(arr[i] + Number(j));
}
console.log("============");

for(let i = 0, len = arr.length; i <len ; i++){
    console.log(arr[i]);
}

console.log("============");

let i = 0;

for(; i <arr.length ; i++){
    console.log(arr[i]);
}

console.log("============");


j = 5;

for(;  ; j--){
    if(j < 0){
        console.log("program ends here");
        break;
    }
    else{
        console.log(j);
    }
}




