const person = {
    first_name: 'Sam',
    last_name: 'Santamaria'
}

const user = {
    id: 1, 
    address: '123 Fake Street',
    userName: 'coolguy6',
    name: 'Kuma'
}

const order = {
    quantity: 10, 
    class: 1, 
    shipped: false, 
    id: 201, 
    userId: 293923,
    price: 44.99
}

const dog = {
    name: 'Kuma',
    age: 10, 
    weight: '12lbs',
    breed: 'Yorkie'
}

const arrayData = [1, 3, 5, 7, 9]
const arrayData2 = [1000, 99, 0, 43]
const arrayUser = ['Kuma', 'small', 12, 'dog']

const someObject2 = {
    resource: 'this text will get assigned to _resource',
    notGettingAssigned: 'nope',
    alsoNotGettingAssigned: 'also nope',
    objectProperty: 'this text is from the objectProperty'
  }

// Pull data property from object and reassign it: -------------------------------------------------
//ie let { ______: _resource } = someObject2
//console.log('_resource is: ' + _resource)

// // Pull data property from object and reassign it via shorthard: -------------------------------------------------
//ie let {______} = someObject2
//console.log('_____ is:' )

// pull data from arrays -------------------------------------------------
//const [ ____, _____ ] = ______

// pull data from objects in an array -------------------------------------------------
const countries = [
{
    name: 'Austria',
    uid: 1234,
    info: {
    population: 8217280,
    area: 32382
    }
},
{
    name: 'Belgium',
    uid: 5678,
    info: {
    population: 10431477,
    area: 11787
    }
}]

//keep because I don't remember
//const [ {name: countryName}] = countries
//console.log(countryName)

//Get multiple values from an array of objects ----------------------------------------

const someArray = [
  { data: 1 },
  { data: 2 },
  { data: 3 }
];
    
// const [
//   { data: a },
//   { data: b },
//   { data: c }
// ] = someArray
    
//console.log(a, b, c); //logs out 1, 2, 3

// pull data from objects directly in functions -------------------------------------------------
// const ____ = ({}) => {
//     return _____ 
// }

const x = ({name}) => {
    return name.toLowerCase()
}

console.log(x(dog))


const orderValue = ({quantity, price}) => {
    return(quantity * price)
}

let result = orderValue(order)
//console.log(result)


// const tax = (amount) => {
//     return (amount * .08)
// }

// const total = ({quantity, price}) => {
//     const subtotal = (quantity * price)
//     return (tax(subtotal) + subtotal)
// }

// amount = total(order)
// console.log(amount)

// Using Default Values -------------------------------------------------
// Default values can be assigned to the variables just in case the value extracted from the array is undefined:

// let [greeting = "hi",name = "Sarah"] = ["hello"];

// console.log(greeting);//"Hello"
// console.log(name);//"Sarah"

//Swapping Values using the Destructuring Assignment -------------------------------------------------
// We can use the destructuring assignment to swap the values of variables:
//let a = 3;
// let b = 6;

// [a,b] = [b,a];

// console.log(a);//6
// console.log(b);//3

// Bonus how to ----------------------------------------------------------------------------------------
// pull data from arrays in an object
// const someObject = {
//     arr: ['a', 'b', 'c', 'd', 'e', 'f']
//   }
// const { arr: [,,,,,last]} = someObject
// console.log(last)