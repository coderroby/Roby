const pay = true;
let howMuch = 70;

function buy() {
    console.log("payment on process");
    const promise = new Promise(function (resolved, reject) {
        setTimeout(function () {
            if (pay) resolved("You payment done, you can shop another thinngs.");
            else reject("Please done your payment first.")
        }, 2000);
    });
    return promise;
}

function checkout() {
    const promise = new Promise((resolved, reject) => {
        setTimeout(() => {
            if (howMuch >= 70) {
                console.log("you are more then 70. You can checkout now");
                resolved();
            }
            else reject("Please shope more then 70.");
        }, 3000);
    });
    return promise;
}

function allDone() {
    const promise = new Promise(function (resolved) {
        setTimeout(() => {
            resolved("thanks for being with us!!");
        }, 2000);
    });
    return promise;
}

function print(value) {
    console.log(value);
}

// USING PROMISE
/* buy()
    .then(checkout)
    .then(allDone)
    .then(print)
    .catch(print);
 */


//async await function
async function process() {
    try {
        await buy();
        await checkout();
        const message = await allDone();
        console.log(message);
    }
    catch(err){
        console.log(err);
    }


}

process();