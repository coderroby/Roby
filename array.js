/* const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars;
console.log(x);
console.log(cars.length);        //array elements number
console.log(cars[0]);          // first element
console.log(cars[cars.length -1]); // last element
 */
/* 
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;
let list = "<ul>";
let text = "";
for (let i = 0; i < fLen; i++) {
  console.log(fruits[i] + "<br>");
  text += fruits[i] + ", ";
  list += "<li>"+fruits[i] + "</li>";
  document.getElementById("demo").innerHTML = text;
} 
//document.getElementById("demo").innerHTML = text;
//document.getElementById = ("demo").innerHTML = 'hi';     // document.GetElementByID = use korar karone data astechilo na.
list += "</ul";
document.getElementById("list").innerHTML = list;


 */


const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.forEach(namelist);

function namelist(value){
    console.log(value);
}

fruits.push("lemon");
fruits[fruits.length] = "jackfruits", "asa";
//fruits.insert(2,'asddas');
fruits[7] = "Roby";
console.log(fruits);
console.log(fruits[6]);  // Undefiend





/* function printlist(Banan){
    console.log(Banan);
}
printlist("liza"); */