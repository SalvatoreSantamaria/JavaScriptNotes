//Part 1, Basics___________________________________________________________________

//https://www.youtube.com/watch?v=vKJpN5FAeF4
//Javascript closures are functions that can access values outside of their own curly braces

let b = 3 //2. closure. b is stored in HEAP MEMORY because global
function impureFun(a) {
  return a + b //1. closure is the accessing of b.
}

//NOT A CLOSURE:
function pureFunction(a, b) {
  const result = a + b //not a closure, no value is accessed outside curly brace. 
  return result //result is stored in CALL STACK and is short lived
}

//Part 2: More common___________________________________________________________________

//https://www.youtube.com/watch?v=3a0I8ICR1Vg
// Oversimplified explanation: It's just a child function having access to it's parents function

function outerFunction(outerVariable) { //2. input
  const alsoAvail = 'this is also avail'
  return function innerFunction(innerVariable) {
    console.log("Outer Variable: " + outerVariable) //1. Closure is outerVariable
    console.log("Inner Variable: " + innerVariable)
  }
}

const newFunction = outerFunction('outside') //3. Calling with value of variable

newFunction()//logs 'outside' because closure has given the outerVariable to innerFunction already.
newFunction('inner') //logs 'outside' and 'inner'
