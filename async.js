/* function print(){
    setTimeout(function(){
        console.log("2");
    }, 3000);

    /* setInterval(() => {
        for(let i = 1; i <=5; i++ ){
            console.log(i);
        }
    }, 5000); */
/*}

print();
console.log("1");
//console.log("2");

console.log("3"); */

// enrollment example of callBank

const paymentDone = true;
let mark = 90;

function enroll(callback){
    console.log("enrollment on Process");
    setTimeout(function() {
        if(paymentDone) {
            console.log("Payment done. You can Start your Course");
            callback();
        }
        else console.log("Please Complete your payment");
        
    }, 2000);    
}
function courseStatus(callback){
    setTimeout(function() {
        console.log("course on going");
        callback();
    }, 3000);
}

function grade(){
    setTimeout(() => {
        if(mark>=80) console.log("you Got A+");
    else console.log("your mark is less then 80. Work header");
    }, 5000);
}

enroll(() => {
    courseStatus(grade);
});