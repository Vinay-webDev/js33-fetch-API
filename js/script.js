/* fetch API = that requires the discussion of callbacks, 
promises,thenables and async/await */

// callbacks = are the functions that are passed to the other functions as parameters 

// example
/*
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
}) */

// to fix we have promises
// Promise have 3 state: Pending, Fullfilled, Rejected

//Promise has two parameters ==>> resolve and reject ==>> const myPromise = new Promise((resolve, reject) => {})

/*const myPromise = new Promise((resolve, reject) => {
    const error = false;
    if (!error) {
        resolve("yes! resolved the promise!");
    } else {
        reject("No! rejected the promise!");
    }
}) */

//console.log(myPromise);
// so its just giving us the fullfilled Promise state not the actual value to get the actual value we have a concept called thenables and need chain thenables like we did with callbacks***

// we can chain thenables like callback
/*myPromise.then(value => {
    console.log(value);
})*/
/*myPromise.then(value => {
    return value +1111;
})
.then(newValue => {
    console.log(newValue);
}) */
// above is ex for fullfilled state of Promise // so I'm gonna do it again ///
//1. fullfilled ******
/*const myPromise = new Promise((resolve, reject) => {
    const error = false;
    if (!error) {
        resolve("yes! resolved the Promise!");
    } else {
        reject("No! rejected the Promise!");
    }
})
// to get state of Promise
console.log(myPromise);
// to get the actual value of the Promise
myPromise.then(value => {
    console.log(value);
}) */

//2. rejected *****
// to catch the error we can use thenables*****
/*
const myPromise = new Promise((resolve, reject) => {
    const error = true;
    if (!error) {
        resolve("yes! resovled the Promise!");
    } else {
        reject("No! rejected the Promise");
    }
})
console.log(myPromise);
// to catch error
myPromise.then(value => {
    return value+1;
})
.then(newValue => {
    console.log(newValue);
})
.catch(err => {
    console.error(err);
}) */
/// before we move on to the pending state example we need to know what the reason we need the Promise ofcourse we know that it prevents callback hell besides that we need Promise for requesting data from server or other side of web 
// kinda simulating the real purpose of the Promise
/*
const myPromise = new Promise((resolve, reject) => {
    const error = false;
    if(!error) {
        resolve("yes! resolved the Promise!");
    } else {
        reject("No! rejected the Promise!");
    }
})

const myNextPromise = new Promise((resolve, reject) => {
    // to delay our Promise we have to use setTimeout()
    setTimeout(function() {
        resolve("myNextPromise resolved!");
    }, 3000);
})
// instead of just getting the state I'm gonna log the value
myNextPromise.then(value => {
    console.log(value);
})
myPromise.then(value => {
    console.log(value);
}) */
// eventhough we had myNextPromise before myPromise we got myPromise value first 

////////////////////////////////////////////////////////////////
//3. pending state
const users = fetch("https://jsonplaceholder.typicode.com/users");

// pending
// you don't have to log this to the console still to visualize I'm doing it
//console.log(users);

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => {
    console.log(response);
})



































