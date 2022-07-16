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


