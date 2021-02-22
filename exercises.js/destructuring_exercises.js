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


// Pull data from objects
//ie const { ____ } = ____

// pull data from arrays
//const [ ____, _____ ] = ______

// pull data from arrays in an object
// const someObject = {
//     arr: ['a', 'b', 'c', 'd', 'e', 'f']
//   }
// const { arr: [,,,,,last]} = someObject
// console.log(last)

// pull data from objects in an array
const someArray = [
    {one: 'a'},
    {two: 'b'}
]
const [ one ] = someArray
console.log(one)

// pull data from objects directly in functions
// const ____ = ({}) => {
//     return _____ 
// }

const tax = (amount) => {
    return (amount * .08)
}

const total = ({quantity, price}) => {
    const subtotal = (quantity * price)
    return (tax(subtotal) + subtotal)
}

amount = total(order)
console.log(amount)

// Using Default Values
// Default values can be assigned to the variables just in case the value extracted from the array is undefined:

// let [greeting = "hi",name = "Sarah"] = ["hello"];

// console.log(greeting);//"Hello"
// console.log(name);//"Sarah"

//Swapping Values using the Destructuring Assignment
// We can use the destructuring assignment to swap the values of variables:
//let a = 3;
// let b = 6;

// [a,b] = [b,a];

// console.log(a);//6
// console.log(b);//3
