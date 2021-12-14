const newPerson = {
    fname: 'asdsa', 
    lname: 'asdfsf',
    fullName: function(age){
        return this.fname + " " + this.lname + " and Age is : " + age;
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

console.log(newPerson.fullName.call(person2, 28)); 



