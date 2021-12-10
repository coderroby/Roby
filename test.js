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
    if(j < 1){
        console.log("program ends here");
        break;
    }
    else{
        console.log(j);
    }
}

console.log("==========");
// for/in ----> object er khetre kaj korai better , if index is important then we don't have to use in array. 

const cars = {name:"BMW", model:"2018", weight:"500"};

for (value in cars){                   // for in return index
    //console.log(cars.value); // undefined
    console.log(value + ": " + cars[value]); //accesing property and its value
    //console.log(cars.name);   // accessing just name directly calling by object property.
}

console.log("=========");

// for / of 

let ab = "Arifur";
for(x of ab){               //for of return value. ei jonno ei looping amra array teo use korte pari
    console.log(x);
    
}
for(x of arr){               //for of return value. ei jonno ei looping amra array teo use korte pari
    console.log(x);
}

console.log("===============");

// while loop 
const y = [2,4,5,6,7,9];
let f = y.length;
// console.log(f);
let d = 0;
while(d<f){
    console.log(y[d]);
    d++;
}


//======== do while ===========
let initial = 0;
do{
    console.log("text is now: "+ initial);
    initial++
}
while(initial<5);

// break 

let testingTimes = 5;

for (let start = 0; start < testingTimes ; start++ ){
    if(start == 3){break;}     // loop will not continue after 3, because break called. if wat to skip break and all a statement we need to use continue; 
    console.log(start);
}
// output 0,1,2

console.log("=========");

for (let start = 0; start < testingTimes ; start++ ){
    if(start == 3){continue;}     //  continue will look on the statement and don brake the hole loop just skip the statement while true.
    console.log(start);
}
// output 0,1,2,4


console.log("==================");

// ======================== Set ================= 
// provide unique elements

const newArray = new Set(["a", "b", "c"]);    // type of set ---> object
console.log(typeof newArray);                 // object

console.log(newArray);
newArray.add("d")                             // set object e kono kichu push korte gele or element add korte gele add() use korte hoi
console.log(newArray);
newArray.add("d")                            // d again push korleo se multiple time same jinish input nibe na.
console.log(newArray);

newArray.forEach(function(value){console.log(value);});
let txt = "";
newArray.forEach(function(value){return txt += value});
console.log(txt);


console.log(newArray.values());     // iterable Iraretor return kore , ( Set iterator)
console.log(typeof newArray.values());     // type Object 

console.log("=======");
for(let l of newArray.values()){                         // for/of onek ta for each er moto kaj kore.
    console.log(l);
}


// ..............Map ............
// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.
// object er property always string use korte hoi kintu amra Map er khtre key k string ba number use kora jai
const fruits = new Map([
    ['appel', 400],
    ["mango", 200],
    [4000, 4100]
]);
console.log(fruits);
fruits.set('bedana', 600);        // add new key and value
console.log(fruits);
console.log(typeof fruits);  // object 
console.log(fruits.get('appel'));  // get the value of a key
fruits.values();
console.log(fruits);
fruits.delete('mango');
console.log(fruits);
console.log(fruits.has("appel")); 
console.log(fruits.has("mango")); 

fruits.forEach(function(value,key){   // first value access kore then key tai kwy, value diya jabe na
    console.log(key + ": " + value);   // array er khetre for each sudhu value acess kore kintu ekhane value and key duitai access kore karon ekhane ek ekta index positon e key, value er ekta pair pair akare thake
});

console.log('=========');

for(let g of fruits.entries()){
    //console.log(g);             // prottek ta array return kore. 
    //console.log(g[0], g[1]);    // array return kore bole amra oi arrya er per index access korte pari
   /*  g.forEach(function(value, index ){
        console.log( value, index);
        
    }) */
    for(let times = 0; times < g.length; times++){
        console.log(g[times]);
    }
}

console.log("==================");
const khabar = [1,2,3,6,4,5];
console.log(khabar);
console.log(typeof khabar);   // JS e array keo Object data type hisabe dekha hoi
console.log(Array.isArray(khabar));  // sob somoy jehetu array k object hisabe dekhe tahole arry k confirm korbo kivabe Array.isArray(arrayName) --- > true false return korbe. 
console.log(khabar instanceof Array); // arrayName instanceof Array;
let feed = function(){};
console.log(typeof feed);  // function


console.log(khabar.constructor);  // kon function use kore ei variable take banano hoiche iside code seta return korbe
let tutu = khabar.constructor.toString();
console.log(tutu);
console.log(typeof tutu);
console.log(tutu.indexOf("Array") ); 

console.log(tutu.indexOf("Array") >-1 ); 

// solving checking array in a functional way. 
function isArray(myArray){
    console.log(myArray.constructor.toString().indexOf("Array") > -1);  // Array e sudhu na sob dhoroned data check kora somvob.. I mean type ber kora somvob. Object, Undefined, Function 
}
isArray(khabar);

console.log("=====================");

//==================== Data conversion =================
console.log(Number("99ab10"));
console.log(parseFloat("3.2"));  //3.2
console.log(parseInt("3.2"));  //3
console.log(String("123"));   
console.log(String("100 + 23"));   
console.log(String(100 + 23));   // 123 value but type string
console.log(typeof String(100 + 23));  // string

console.log(String(Date()));
console.log(Number(false));   // 0
console.log(Number(true));  // 1


console.log("5" * "2");          // javaScript ei rokom sudhu string number gulo k as a number hisabe conver kore , except + operator , cz + operator concatinate korar jonno use kora hoi .. tai ++ bade sob operation er khetre JS string number hisabe priority dei.
console.log("5" - "2");          
console.log(typeof ("5" / "2"));  // type o hobe number
console.log("5" + "2");          // concate kore dibe






