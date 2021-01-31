const fetch = require("node-fetch");

// don't forget try and catch

// Async Await:
//By adding async in front of a function, that function now returns a promise. 
async function someFunction() {
    return 'Hello'
}
console.log(someFunction()) // logs Promise { 'Hello' }

// Now that its async you can chain .then

someFunction()
    .then(response => console.log(response)) //logs Hello

//----------------------------------------------------------------------------------
// Use Await for promises inside these async functions.
async function someFunction2() {
    let url = 'https://jsonplaceholder.typicode.com/users/9'
    let response = await fetch(url) // awaits response of fetch call
    let data = await response.json() //awaits again
    console.log('This will log BEFORE the awaits. Getting user...')
    return data
}
someFunction2().then(users => console.log(users)) // logs the users data

//----------------------------------------------------------------------------------
// Use Await for promises inside these async functions. Using Try
async function someFunction3() {
    try {
        let url = 'badUrl'
        let response = await fetch(url) // awaits response of fetch call
        let data = await response.json() //awaits again
        console.log('This will log BEFORE the awaits. Getting user...')
        return data
    } catch(err) {
        console.log('there has been an error' + err)
    }
}
someFunction3().then(users => console.log(users)) // logs the users data