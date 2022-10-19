// Steve Griffith https://www.youtube.com/watch?v=KiLB8sViPMA
// basics
function doThing(other) {//pass in function
  let x = 7
  console.log('here is x: ', x)
  //do other stuff
  other() //callback function, and run it.
}

function hello() {
  console.log('hi')
}

doThing(hello) //call doThing, pass in hello function, but NOT call it yet.

//-------------------------------------------------------------------------------------------------
// passing in a param to a callback function:

function doThing2(other) {//pass in function hello2

  let name = "Kuma Dog"
  other(name) //callback function, and pass it a value, and run it.
}

function hello2(nm) { //take value
  console.log('hello', nm) //log it
}

doThing2(hello2)

//-------------------------------------------------------------------------------------------------
// Remember forEach is a callback function

let names = ['waffles', 'warkitten', 'mona']
names.forEach(hello2)

//-------------------------------------------------------------------------------------------------
// Excersize in another way that I could use with an output or async function


const calc = (cb, n, type) => {//2

  if (type === 'add') {
    let r =  n + 10
    cb('cb with', r)
  }
  
  if (type === 'times') {//3
    let r =  n * 10
    cb('cb with', r)//4
  }
}

//This could be an async function
const cb = (text, result) => {//5
  console.log(text, result)
}


calc(cb, 10, 'times')// 1
