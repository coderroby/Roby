//hoisting == uttolon, tene upore uthano

{
    let b = 5;
}
//console.log(b);

function abc(){
    let c = 5;
    console.log(c);
}


function def(){
    let c = 9;
    console.log(c);
}
function ghi(){
    let c = 10;
    console.log(c);
}
abc();
def();
ghi();
 


//console.log(carName);

function myfuntion(){
    carName = " volvo"
};

myfuntion();

console.log(carName);  // vloVo // let, const , var use korle kintu amader variable ta global hoto na  // function name diye acl korar por baire global er moto behave korbe , calling er por kintu se value global hoye geche only for not declare

let  Mycar = "BMW";
var Mycar1 = "BMdfgW";
var Mycar2= "BMWsdg";
var Mycar3 = "BMgsdW";

console.log(Mycar);
console.log(window.Mycar);
console.dir(window.Mycar);
console.dir(window);           // HTML er global variable.. 


