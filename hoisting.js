"use strict";
/* let a;
console.log(a);
a = 5;
console.log(a); */

var LANGUAGE = "java";
var language = "JavaScript";
console.log(!language);


function getLanguage(){
    /* var language;
    language = undefined; */
    console.log(!language);
    if(!language){
        
        console.log(!language);
        language = LANGUAGE;
        console.log(language);

    }
    else console.log(language); 
}

getLanguage(); 


/* function myfunction(){
    lan = "javasx";
    var lan;
    console.log(lan);
}

myfunction();
console.log(lan); */


const person = {
    fname: "roby",
    lname: "sleep",
    age: 28,
    fulldata : function(){
        return console.log(this.fname + " " + this.lname);
    }  // object er moddhe this oi object k acbar call kore just like this.fname dcchi tar mane ami person er fname k call kortechi just like person. fname
}
person.fulldata();
"use strict";
console.log(this);  // returns hole window
let x = this;
console.log(x);  // this return the hole window jekhane x ache

function y(){
    return this;
}
console.log(y());     // in function this ==> undefined

const fruit= {
    name : "peyara",
    weight: "5Kg",
    color: "green",
    all: function(){
        return console.log(this.name +" "+ this.weight+" " + this.color);
    },
    allData : function(){
        return this.all;              // implicit binding korlam this.all k call kore 
    }
}

fruit.all();
fruit.allData; 



//explicit Binding 

const person1 = {
    fullname : function(){
        return this.fname + " " + this.lname ;
    }
};

const person2 = {
    fname : "Md. ",
    lname: " Robi",
};

console.log(person1.fullname.call(person2));



// arrow Function

let hello = function(){
    console.log("hello!");
}
hello();

let helloW = () => {
    return " Hellow World!!";
}
console.log(helloW());

let helloWone = () =>  "Is there is one Statement for a function we can write like this";

console.log(helloWone());


helloW = (val) => "hellow I am " + val;
console.log(helloW(5));

let helloWo = val => "hellow I am " + val;  // Single perameter thake perameter er sate () na dileo colbe
console.log(helloWo(1));







