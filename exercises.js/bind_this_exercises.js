// Bind is used to 'bind' functions to objects so that they can work together

// Question 1 ------------------------------------------------------------------------------

const userOne = {
  firstName: "Kuma",
  lastName: "Santamaria"
}

const userTwo = {
  firstName: "Raven",
  lastName: "Santamaria"
}


/* We want to be able to bind function and objects together
  so that firstName and lastName can be accessed by the fullName() function */ 
// Part 1
const fullName = function() { 
  //return ____ ______
}

// Part 2
const kumaDogName = fullName(userOne)
//console.log(kumaDogName()) //logs Kuma Santamaria

const ravenDogName = fullName(userTwo)
//console.log(ravenDogName()) //TypeError: ravenDogName is not a function


// Question 2 ------------------------------------------------------------------------------

const truck = {
  name: 'F1250',
  sound: 'honk!',
  horn: function() {
    console.log(this.sound)
  }
}

//set hornFunctionBound to the truck horn
//const hornFunctionBound = ____
// call it and make it work
//hornFunctionBound()

//Question 3 ------------------------------------------------------------------------------------

// Here is a function
let talk = function() {
  console.log(this.sound)
}

// Bind reference --------------------
//let kuma = {
 //Way 1: Bind reference to a property of an object
 //____
 //____
//}
//kuma.speak() // Bark bark bark!


// Bind function to object ----------
//let kbound = ____ //Way 2. Bind the function explicitly to the object
//kbound() // Bark bark bark!