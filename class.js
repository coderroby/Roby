// ECMAScript 2015, also known as ES6, introduced JavaScript Classes.
// JavaScript Classes are templates for JavaScript Objects.

// Unlike functions, and other JavaScript declarations, class declarations are not hoisted.
// That means that you must declare a class before you can use it.

class Students{
    constructor(name, roll, sClass, section){
        this.name = name;
        this.sClass = sClass;
        this.roll = roll;
        this.section = section;    
    }
    status(){
        console.log(this.name + " is reading at class: " + this.sClass)
    }
}

const sowad = new Students('Sowad', 10, 8, 'C');
const sneha = new Students('Sneaha', 10, 10, 'd');
console.log(sowad);
sowad.status();
sneha.status();

function NewStudent(name, roll, sClass, section){
    this.name = name;
    this.sClass = sClass;
    this.roll = roll;
    this.section = section; 
    this.statu = function(){
        console.log(this.name + " is reading at class: " + this.sClass)

    } 
    
}

const abrar = new NewStudent("Abrar", 5,10,"D");
abrar.statu(); 

class Car{
    constructor(carName){
        this.carName = carName;
    }
    present(){
        return this.carName + " has ABS";
    }
    get carN() {
        return this.carName;
    }
    set carCol(x){
        this.carColor = x;
    }
}

class Model extends Car{
    constructor(carName, CarModel){
        super(carName);
        this.CarModel = CarModel;
    }
    now(){
        return this.present() + " and it is " + this.carName + ', it is model of ' + this.CarModel;
    }
}

const BMW = new Car('BMW');
console.log(BMW.present());
const Toyota = new Model('Toyota', '2018');
console.log(Toyota.now());
BMW.carCol = 'blue';
console.log(BMW);
console.log(BMW.carN);
