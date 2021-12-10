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


