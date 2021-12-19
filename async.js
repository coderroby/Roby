function myFirst(){
 myDisplay('hello');
}
function mySecond(){
    myDisplay('This is Roby');
   }

function myDisplay(value){
    document.getElementById('demo').innerHTML = value;
}

myFirst();
mySecond();