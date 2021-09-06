// https://stackoverflow.com/questions/2236747/what-is-the-use-of-the-javascript-bind-method

//Bind function:
//https://www.youtube.com/watch?v=95W8PP-jHM8 //edutechional

// Bind is used to 'bind' functions to objects so that they can work together

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
const fullName = function() { 
  return `${this.firstName} ${this.lastName}`; 
}

const kumaDogName = fullName.bind(userOne)
//console.log(kumaDogName()) //logs Kuma Santamaria

const ravenDogName = fullName(userTwo)
//console.log(ravenDogName()) //TypeError: ravenDogName is not a function


// bind and this funfunfunction ------------------------------------------------------------------------------
// https://www.youtube.com/watch?v=GhbhD1HR5vk&t=761s
const truck = {
  name: 'F1250',
  sound: 'honk!',
  horn: function() {
    console.log(this.sound)
  }
}

truck.horn() // honk!
const hornFunction = truck.horn
hornFunction() // undefined
const hornFunctionBound = truck.horn.bind(truck)
hornFunctionBound() // honk!

//Binding examples ------------------------------------------------------------------------------------
// https://www.youtube.com/watch?v=PIkA60I0dKU
let talk = function() {
  console.log(this.sound)
}

// Bind reference --------------------
let kuma = {
  speak: talk, //Way 1: Bind reference to a property of an object
  sound: 'Bark bark bark!'
}
kuma.speak() // Bark bark bark!


// Bind function to object ----------
let kbound = talk.bind(kuma) //Way 2. Bind the function explicitly to the object
kbound() // Bark bark bark!