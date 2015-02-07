/*var Promise = require('es6-promise').Promise;

function myPromisss() {
    var mysqlQueryP = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('resolved DAta')
            console.log('after')
        }, 3000)
    })
    return mysqlQueryP
}



myPromisss.then(function()P{)*/

var Promise = require('es6-promise').Promise;

function timePrinting(num) {
    return new Promise(function (resolve, reject) {
        for (i = 1; i <= num; i++)
            console.log(i);
        setTimeout(resolve("Complete printing " + num + " seconds"), 10);
        console.log("inside function");
    })
}

promise = timePrinting(15);
promise.then(console.log(data), null);