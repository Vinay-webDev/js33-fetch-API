/* fetch API = that requires the discussion of callbacks, 
promises,thenables and async/await */

// callbacks = are the functions that are passed to the other functions as parameters 

// example

function firstFunction(parameter, callback) {
    // do stuff
    callback();
}

// "callback hell"

firstFunction(para, function() {
    // do stuff
    secondFunction(para, function() {
        // do stuff
        thirdFunction(para, function() {

        })
    })
})






















