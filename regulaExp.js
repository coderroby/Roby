let text = "Visit our Website.";


// search

let result = text.search("Our");  // Our ekhane o uppercase tai match kora sorteo khuje pabe na;
console.log(result);            // -1
result = text.search(/Our/i);  // our Upper case hok r lowercase hok ekhon sob e nibe , cz i flag diye search kortechi . that means case insensitive.
console.log(result);   // 1


// replace

result = text.replace(/website/i , "Roby");
console.log(result);  // visit oust Roby

text = undefined;     // variable take faka kore fellam
text = "Visit our Website. and search out new Website";

result = text.replace(/website/i , "Roby");  // sudhu matro 1st website k replace korbe
console.log(result);  // 

result = text.replace(/website/ig , "Roby");  // m flag onkorar karone oi line e joto match khuje pabe sob gulake replace kore dibe
console.log(result);  // 

// m flag --> work at match method

text = `Visit our Website. old Website  
website
first website`;
result = text.match(/website/igm);  // m flag onkorar karone oi line e joto match khuje pabe sob gulake replace kore dibe
console.log(result);  //   
console.log(Array.isArray(result)); 

let myWord = " I hate you more then me I Hate myself."

let a = myWord.match(/hate/igm);
if (a.length != null) {
    console.log(`hate you : ` + a.length + " times");
}

// Not Clear need sloution
try{
    function howMany(sentence, searchItem){
        let a = sentence.match(/searchItem/igm);
        if (a.length > 0) {
           return console.log(`${searchItem} you : ` + a.length + " times");
        }
    }
    
    howMany(" I hate you more then me I Hate myself.", "hate");
    
    
}
catch(error){
    console.log(error);
}

console.log("saijnsak");
{
    let x = "abc";
    console.log(x);
}
let x = function(){};
console.log(typeof x);
/// solve my thiking in regula exp way Hlp from " Rimon Ahmed"
//Regular expression literal syntax এর ক্ষেত্রে আপনি এভাবে variable পাস করতে পারবেন না, এক্ষেত্রে আপনি regex এর constructor ব্যবহার করতে পারেন।
const howMany = (sentence,searchItem) => { const regex = new RegExp(searchItem,"gi");
const match = sentence.match(regex);
match? console.log(`${match.length} match found`) : console.log("no match found");
};
howMany("I hate you more then me I Hate myslef", "hate");

abc = 9;
{
console.log( typeof abc);
let abc "gygy";
}











