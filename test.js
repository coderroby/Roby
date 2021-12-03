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

console.log(typeof Boolean(10>9));
console.log(Boolean(10>9));
console.log(8<6);

let a = 5;
let b = "5";
let c = 2;
console.log(a==b);    // check values
console.log(a===b);   // check values and data type

if(a==5 && b === 5 /* || c === 2 */ ){
    console.log("yes condition applied");
}
else console.log("No condition applied");

// =======ternary operator===== if else er onno vabe use kora jai
//variablename = (condition) ? value1:value2 

console.log(a== 5 && b===2 ? "confition true" : "Condition false");
console.log(a >= 5 ? a >2 && a !=5 ? "your are just a baby": "you are more then 2!" : " here a = 5");





















