/* const state = false;
console.log("task 1");
const rule = new Promise(function(resolved, reject){
    setTimeout(() => {
        if(state) resolved("Task 2");
        else reject("Failed");
    }, 3000);
})

rule
    .then(done)
    .catch(notDone);

function done(msg){
    console.log(msg);
}
function notDone(msg){
    console.log(msg);
}



console.log("task 3"); */

const paymentStatus = true;
let marks = 60; 


function enrollment(){
    console.log("Enrollment Ongoing");
    const promise = new Promise(function (solved, notSolved){
        if(paymentStatus) {
            console.log("Your payment Complete. Please Start Your Course");
            solved();
        }
        else notSolved("Please complete your payment")
    });
    return promise;
}

function courseStatus(){
    console.log("Course onGoing");
    const promise = new Promise(function(solved, notSolved){
        if(marks>80) solved();
        else notSolved("Work harder. Your got " + marks);
    });
    return promise;
}

function yourGrade(){
    let promise = new Promise(function(solved){
        if(marks>=80) solved("You got A+");
    });
    return promise;
}

enrollment()
    .then(courseStatus)
    .then(yourGrade)
    .then(print)
    .catch(print);

function print(value){
    console.log(value);
}




