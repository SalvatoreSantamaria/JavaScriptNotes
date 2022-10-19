// Notes from Dave Gray's excellent video: https://www.youtube.com/watch?v=8GDk8sj0YgQ&list=PL0Zuz27SZ-6N3bG4YZhkrCL3ZmDcLTuGd&index=8

//IIFE Immediately Invoked Function Expression

// Variations: 

// With annonymous arrow functions inside
(() => {
    console.log('called with anon arrow function')//do stuff
})(); //here is is called into action with ()


// With the function keyword
(function () {
    console.log('called with function keyword')// do stuff
})();

// With a function name, which allows for recursion
(function myIIFE(num = 0) {
    num++;
    console.log(num);
    return num !== 5 ? myIIFE(num) : console.log('done!');
})(); //could also pass num = 0 into () here

// --------------------------------------------------------------------------------
// Reasons to use IIFE's
// Reason 1. Does not pollute the global object namespace
// Global
const global = 'this is global'
const helloWorld = () => "Hello World!"

// Isolate declaratins within the function
(() => {
    const global = "wrongly named, this is not global!"
    console.log(global)
        const helloWorld = () => "Hello IIFE!"
        console.log(helloWorld())
})();
console.log(global)

// ------------------------------------------------
// Reason 2. Private Variables and Methods from Closure
const increment = (() => {
    let counter = 0;
    console.log(counter); //log the counter to confirm IIFE is called into action
    const credits = (num) => console.log(`I have ${num} credits`)
    return () => { counter++; credits(counter)}
})()// 1. Logs 0. will NOT output the `I have num credits` on the first run here

increment() // 2. Logs I have 1 credits. The anonymous function is ONLY called here, and it still has the lexical scope of credits.
increment() // 3. Logs I have 2 credits. 
//credits(3)// ref error because of scope

// ------------------------------------------------
// Reason 3. Module Pattern. Outdated patten as modules were introduced in ES6

// creating a module called Score
const Score = (() => {
    let count = 0

    return {
        current: () => { return count },
        increment: () => { count++ },
        reset: () => { count = 0},
    }
})()

Score.increment()
console.log(Score.current()) // logs 1. We created a namespace where the methods are references inside of the object which is the Score namespace

// ------------------------------------------------
// Reason 3.1. Revealing Module Pattern. Outdated patten as modules were introduced in ES6

const Game = (() => {
    let count = 0;
    // Private Area
    const current = () => { return `Game score is ${count}.`};
    const increment = () => { count++ }
    const reset = () => { count = 0 }

    return {
        current: current, //  The revealing pattern uses pointers to the private area of the IIFE 
        increment: increment, 
        reset: reset
    }
})();

Game.increment();
console.log(Game.current());//1
console.log(Game.current());//2
Game.reset();
console.log(Game.current());//1
// ------------------------------------------------
// Reason 4. Injecting a namespace object
// This is a node environment so this code doesn't have the window object
// ((namespace) => {
//     namespace.count = 0;
//     namespace.current = function () { return `App count is ${this.count}.`} // using function keyword so we can use this. 
//     namespace.increment = function () { this.count++ };
//     namespace.reset = function () { this.count = 0 };
// })(window.App = window.App || {} ) //name space is window.App

// App.increment();
// console.log(App.current())