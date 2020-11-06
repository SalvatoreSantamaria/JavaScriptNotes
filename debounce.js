function debounce(fn, delay) {
  //i was supposed to implement this so that debounce is only called once
  let timeout
  return function() {
    clearTimeout(timeout)
    timeout = setTimeout(fn, delay)
  }
}


function hello() {
  console.log('hello!')
}


let helloDebounced = debounce(hello, 500)

//this will call the function 10 times
for (let i = 0; i < 10; i_++) {
  helloDebounced()
}