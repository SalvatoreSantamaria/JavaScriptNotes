//TO RUN: Right Click + "Run Code"

// Object Literal
const dog = {
  name: 'Kuma',
  age: 12
}

console.log(dog)
console.log(dog.name)

// constructor function
function Dog(n, a) {
  this.name = n; //property
  this.age = a;  //property
  this.legs = 4; //property
  this.someFunction = function(x) {
    return this.legs * x
  }
}
const pet = new Dog('Kuma', 10);
console.log(pet.someFunction(10))

//////////////////////////////////////////////////////////////////////////////////

// Prototypes
// All objects inhereit methods from their prototype
// object literals: Object.protoype 
// if the object comes from a constructor like Dog above, then inheirits from Dog.prototype
// in a console.log look at the __proto__. A contructor witll have the Dog prototype methods(like someFunction, see above) and also 
//    another __proto__, which is the object that the Dog inherited from

// stored in the prototype, not the object!
Dog.prototype.addedPrototypeFunctionAgeMultiplier = function(x) {
  this.age = this.age * x
}
console.log(`This is Kuma's age before ${pet.age}`)
pet.addedPrototypeFunctionAgeMultiplier(2)
console.log(`This is Kuma's age after ${pet.age}`)

//////////////////////////////////////////////////////////////////////////////////

// Prototypical Inheritance
// Person Contructor
function Person(fn, ln) {
  this.firstName = fn;
  this.lastName = ln;
}
// Greeting function for prototypical inheiritence
Person.prototype.greeting = function() {
  return `Hello ${this.firstName}`
}

person1 = new Person('Joe', 'Doe')
console.log(person1.greeting());

function Customer(fn, ln, phone, membership) {
  Person.call(this, fn, ln) //call function from somewhere else in current context
  this.phonenumber = phone
  this.membershiptype = membership;
}

// inheirit the person prototype methods
Customer.prototype = Object.create(Person.prototype)

// Make customer.protoype return Customer
Customer.prototype.constructor = Customer;

const customer1 = new Customer('Bill', "Williamson", '555-555-555', 'Gold Club')
console.log(customer1)
console.log(customer1.greeting()) //this only works because we inheirited from line 63

//////////////////////////////////////////////////////////////////////////////////

// Using Object.create
// Another, easier way to create objects

const personPrototypes = {
  greeting: function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function(newLastName) {
    this.lastName = newLastName;
  }
}

const mary = Object.create(personPrototypes)
//add properties
mary.firstName = 'Mary'
mary.lastName = 'Willams'
mary.age = 30
mary.getsMarried('Thompson')
console.log(mary.greeting()) //logs 'Hello there Mary Williams

// a different syntax with second param of an object
const brad = Object.create(personPrototypes, {
  firstName: {value: 'Brad'},
  lastName: {value: 'Traversy'},
  age: {value: 36}
});
console.log(brad);
console.log(brad.greeting());

