const sentence = "My name is Roby.My name is Roby.My name is Roby.My name is Roby.My name is Roby.My name is Roby. \
My name is Roby. My name is roby. My name is Roby. My name is roby. ";

let searchItem = "roby";
let regExp = new RegExp(searchItem, "igm");
const matches = sentence.match(regExp);
let len = matches ? matches.length : 0;
console.log(`${searchItem} matched for ${len} times`);

let position = sentence.search(/roby/i);
position = position >= 0 ? position : "not Found";
console.log(position);


function liniarSearch(array, val) {
    let position = array.indexOf(val);
    console.log(position == -1 ? "notfound" : position);
}
liniarSearch(["a", "b", "c", "c"], "c");

function positionSearch(array, val) {
    let len = array.length;
    for (let i = 0; i < len; i++) {
        if (array[i] === val) {
            return console.log(`Position of ${val} = ${i}`);
        }
    }
    return 'not Found';
}

positionSearch(["a", "b", "c", "c"], "c");




function longestString(array) {
    let len = array.length;
    let longestWord = "";
    for (let i = 0; i < len; i++) {
        if (array[i].length > longestWord.length) {
            longestWord = array[i];
        }
    }
    let c = array.indexOf(longestWord);
    return  console.log(longestWord + c);
    //return [longestWord, c];
}

console.log(longestString(["Arifur", "Rahman Rob", "Arifur Rahman Roby", "Robi"]));


 /*    //let three = [];
    let five = [];
    let both = [];
function threeFive(start, end){
    let three = [];
    let len = end - start;
    for (let index = start; index <= len; index++) {
        
        if(start % 3 === 0 || start % 5 === 0) {
            if(start % 3 === 0)three.push(start);
            console.log(three);
            /* else if(start % 5 === 0)five.push(start);
            else if(start % 3 === 0 && start % 5 === 0) both.push(start); 
        }
        //if(start % 3 === 0 && start % 5 === 0) both.push(start);
        
    }
    //let all = {fiv : five, thr: three, bot : both};
}

console.log(threeFive(1,20)); 
*/



let abc = [];
let cdf = [];
let ghi = [];
function num(a){
    for(let d = 1; d < a; d++){
        if(d % 3 === 0 && d % 5 === 0)abc.push(d);
        if(d % 3 === 0 || d % 5 === 0){
            if(d % 3 === 0)cdf.push(d);
            else ghi.push(d);
        }
    }
    return [abc,cdf, ghi];
}
console.log(num(100));
console.log(num(35)[2].sort());


//Exceptional Falsy value
console.log(Boolean(0x0n));
console.log(Boolean(0n));
console.log(Boolean(document.all));

// ommiting falsy value. or detecting falsy values 
const setOfValues = [" ", '', ``, null , "a", undefined, NaN, 0, -0, "Robi", false];
for (const value of setOfValues) {
    if(value) return true;
    else return false;
    
}