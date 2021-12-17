const newPerson = {
    fname: 'asdsa', 
    lname: 'asdfsf',
    fullName: function(age, city){
        return this.fname + " " + this.lname + " and Age is : " + age + " city is " + city;
    }
}

const person1 = {
    fname: "Arifur",
    lname: "Rahman"
}

const person2 = {
    fname: "Hasan",
    lname: "Banna"
}

console.log(newPerson.fullName.call(person2, 28, 'dhaka')); 
console.log(newPerson.fullName.apply(person1, [28, 'Jessore'])); 

let a = [1,2,4,5,7,2,1,9];
console.log(Math.max(a));      // NaN , karon full arry ta ke se ekta element mone korteche
console.log(Math.max(1,2,3,4)); // Math.max() ei methos sudu kichu element er collection nite pare jar moddhe diye se ektar por ekta loop kore,
console.log(Math.max.apply(null,a)); // apply(), ki kore ?? array input nei kintu se function er kache perameter gula one by one index akare pass kore.
console.log(Math.max.apply(Math,[1,2,5,6])); // apply(object, perameter array), ki kore ?? array input nei kintu se function er kache perameter gula one by one index akare pass kore.

let b = 4;

function ab(){
    let c = 4;
    return c*c;
}

console.log(ab());


//closer 
function  temp(){
    let counter = 0;
    return function(){
        counter++;
        console.log(counter);
        // /console.log("asdfasdf");
    }
}

let add = temp();
add();
add();
add();
console.dir(add);
console.dir(ab);


(function(){
    let a = 5;
    let b = 10;
    console.log(arguments.length);
    return console.log(a+b);
})();

const x = (x,y) => {return x*y};
console.log(x(4,5));

function sum(x=0,y=0){
    if(x===0 && y === 0){
        console.log("please enter some number more then 0");
    }
    return x+y;
}
console.log(sum(0,5));

const evenOdd = (a) => {
    if(a % 2 === 0 && a!=0 ) return console.log(`${a} is Even`);
    else return console.log(`${a} is Odd`);
} 
evenOdd(5)