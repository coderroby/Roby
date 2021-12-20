const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
delete person.age;
//delete person["age"];

myObj = {
    name: "John",
    age: 30,
    cars: {
        car1: "Ford",
        car2: "BMW",
        car3: "Fiat"
    }
}

//console.log(myObj.cars.car2);

const myObj1 = {
    name: "John",
    age: 30,
    cars: [
        { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
        { name: "BMW", models: ["320", "X3", "X5"] },
        { name: "Fiat", models: ["500", "Panda"] }
    ]
}

for (let i in myObj1.cars) {
    //console.log(myObj1.cars[i] );
    let len = myObj1.cars.length;
    //console.log(len);
    //for(let c = 0; c <len ; c++){
    for (let d in myObj1.cars[i]) {
        console.log(`${d} : ${myObj1.cars[i][d]} `);
    }
    console.log("==========");
    //}
}

document.getElementById("demo").innerHTML = person;    // returns [object object]
document.getElementById("demo").innerHTML = person.firstName;

let inHtml = "";
for (let i in person) {
    console.log(i + " : " + person[i]);
    let text = i + " : " + person[i] + "<br>";
    inHtml += text;
}
document.getElementById("demo").innerHTML = inHtml;
document.getElementById("list").innerHTML = Object.values(person);  //sudhu matro values gulo return korbe, Array hisabe value gula k return kore. So amra ekhane loop korte pari for/of use kore

// JSON.stringify(objectName)
//by using this we can convert a Object to String with all property and values. 
console.log(JSON.stringify(person));  // {"firstName":"John","lastName":"Doe","eyeColor":"blue"}
document.getElementById("list").innerHTML = JSON.stringify(person);  //sudhu matro values gulo return korbe, Array hisabe value gula k return kore. So amra ekhane loop korte pari for/of use kore


const person1 = {
    firstName: "John",
    lastName: "Doe",

};
Object.defineProperty(person1, "fullName", {
    get: function () { return this.firstName + " " + this.lastName; }
});

console.log(person1);
console.log(person1.fullName);


// Constructor Object function

function MyPersons(fname, lname, age) {              // functional Object blue print crete korar somoy boro hater name use kore better. 
    this.fname = fname,
        this.lname = lname,
        this.age = age,
        this.fullName = function () {
            return this.fname + " " + this.lname;
        }
}

const robi = new MyPersons("Arifur", "Rahman", 28);     // Properway to create an object using Constructor  new constructor object name then value.
//const Bio = MyPersons("Saikot", "hasan", 27);          // undefined return korbe. new diye then Constructor use kore create korte hoi tai new call na kole crete hobe na and undefined return korbe
const Bio = new MyPersons("Saikot", "hasan", 27);
console.log(robi);
robi.country = "Bangladesh";   // new object crete kore amra iccha korle abar sei object e value create korte pari. 
//MyPerson.country = "Bangladesh";  // eita kora jabe na, karon amra contructor function take cange korte gele amader k main body te giyei change hobe.
console.log(robi);   // country add hoye htakbe 
console.log(Bio);    // country add kori nai amra So ekhane abar country pabo na


// FB problem test
/* 
class Animal{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`I am a Good ${this.name}`);
    }
}
const cat = new Animal('cat');
const cat2 = { speak: cat.speak };
console.log(cat2.speak());
 */



// Prototype object 

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
  
  const myFather = new Person("John", "Doe", 50, "blue");
  const myMother = new Person("Sally", "Rally", 48, "green");

myFather.marryStatus = "married";
Person.prototype.marry = "Married";
console.log(myFather);
console.log(myMother);
console.dir(Person);
console.log(myFather.marry);
console.log(myMother.marry);

let b = "Robi";
console.log(b);
console.log(b.toUpperCase());
let c = new String("RObi");
console.log(c);
console.log(c.toUpperCase());

let arr = [12,2,3,6,4,];
console.log(arr);
console.dir(arr);
console.dir(person);

console.dir(arr);
let arrIterator = arr[Symbol.iterator]();
console.dir(arrIterator.next());
console.dir(arrIterator.next());
console.dir(arrIterator.next());


// Set ()
// A JavaScript Set is a collection of unique values.
// Each value can only occur once in a Set.
// A Set can hold any value of any data type.

const myArray = [2,3,4,2,1,5,5,3];
const myUniqueArray = Array.from(new Set(myArray)).sort();
console.log(myUniqueArray);

const me = {
    fname : "Md. Arifur",
    lname: "Robi"
}
console.log(me);
console.log(me['fname']);
me.age = 29;    
console.log(me);

const mySet = new Set();
mySet.add("a");
mySet.add("b");
mySet.add("a");
let d = "d";
mySet.add(d);
mySet.add("c");

console.log(mySet);      // set holo object
console.log(Array.from(mySet)); //convert a array from Set object
console.log(Array.from(mySet).sort()); //sorting

console.log(mySet.values());
let iteratorSet = mySet.values();
console.log(iteratorSet);
console.log(mySet);
for(let x of iteratorSet){
    console.log(x);
}

console.log(mySet.keys());
console.log(mySet.entries()); // value value pair
console.log(Array.isArray(mySet));
console.log(mySet instanceof Set );
console.log(mySet.constructor); 

const myMap = new Map([
    ["apple", 500],
    ["banana", 100],
    [10, 500]

]);
console.log(myMap);
myMap.set("alu", 20);
console.log(myMap);
myMap.set("apple", 600);  //ager apple k value change kore dilam
console.log(myMap);

myMap.delete("apple");   // delete 
console.log(myMap);
//myMap.clear();   // delete all elements from the map
console.log(myMap);
console.log(myMap.has('banana'));  // index ta ki ache ?? jodi thake tahole true return korbe
console.log(typeof myMap);
console.log(myMap instanceof Object );  //map is a object type data
console.dir(myMap);  // map is iterable , Symbol.iterator methos ta ache map er protyper er moddhe
console.log(myMap.size);

const potol = {name: 'potol'};
myMap.set(potol,50);
console.log(myMap);
console.log(myMap.get('alu'));
console.log(myMap.get(potol));






