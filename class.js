// ECMAScript 2015, also known as ES6, introduced JavaScript Classes.
// JavaScript Classes are templates for JavaScript Objects.

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