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
    get: function () {return this.firstName + " " + this.lastName; }
});

console.log(person1);
console.log(person1.fullName);











