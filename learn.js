function myCallback(country, callback) {
    setTimeout(function () {
        console.log('afterTimeout');
        callback("city")
    }, 3000)
}




myCallback('country', function (result) {
    myCallback('country', function (result){
            myCallback('country', function (result) {
                myCallback('country', function (result) {
                    myCallback('country', function (result) {
                        printThis(result)
                    })
                    printThis(result)
                })
                printThis(result)
            })
            printThis(result)
        })
    printThis(result)
})


function printThis(thisString) {
    console.log(thisString)
}


printThis("FlowerOfLife");

printThis(5555);