function myFirst() {
    myDisplay('hello');
}
function mySecond() {
    myDisplay('This is Roby');
}

function myDisplay(value) {
    document.getElementById('demo').innerHTML = value;
}

myFirst();
mySecond();

function sum(a, b) {
    //myDisplay(a+b);
    console.log(a + b);
    let result = a + b;
    return result;
}
sum(5, 10);
myDisplay(sum(2, 6));
let result = sum(5, 8);
myDisplay(result);

function sub(first, second, display) {
    let sub = 0;
    if (first > second) sub = first - second;
    else sub = second - first;
    if(display) display(sub); 
    return sub;
}

sub(8, 5, myDisplay);    // call back syntax
let myResult = sub(2, 6);  //function can individually work
console.log(myResult);
myDisplay('Asad')

/* sub(20, 5, function(some){
    console.log(some);
});   // direct antonymous  function hisabe pathai diya jai
 */ 


