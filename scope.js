//global scope

var name = 'global'


function x() {
  name = 'local now'
  console.log(name) 
  alsoGlobalBecauseNoVar = 'also global'
  console.log(alsoGlobalBecauseNoVar)
}

x()
// https://www.youtube.com/watch?v=FyWdrCZZavQ

//Scope in javascript is lexical- meaning variable access depends on where written 
//Scope chain- child function can access parent variables