// Reminder on Passing functions into other functions

function one(inputFunction) {
    console.log('From function one')
    inputFunction() //executes the inputed function, ie, function two
}

function two() {
    console.log('From function two')
}

one(two)

//--------------------------------------------------------------------------------------------

// Function Currying. Excellent reference: https://www.youtube.com/watch?v=F_N97iovVbQ 

// function curryingFunction(inputX) {
//     return function(inputY) {
//         console.log(inputX, inputY)
//     }
// }

// let result = curryingFunction('inputX') //result is set to the return value of curryingFunction. curryingFunction is just returning another function
// result('inputY') //run the inner function


// ES6 Conversion of the exact same function. 
curryingFunction = (inputX) => (inputY) => console.log(inputX, inputY)
let result = curryingFunction('inputX') //result is set to the return value of curryingFunction. curryingFunction is just returning another function
result('inputY') //run the inner function