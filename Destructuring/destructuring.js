
[a, b, c, ...rest] = [100, 200, 300, 400, 500]

console.log(a) //100
console.log(b) //200
console.log(c) //300
console.log(rest) //400, 500





// Object Destructuring

const dog = {
  name: "Kuma",
  age: 9, 
  breed: "Yorkie",
  weight: "12 lbs",
  bark: function() {
    return('Birk! Birk! Birk!')
  }
}

//old ES5 getting values
// const name = dog.name //"Kuma"
// const age = dog.age //etc
// const breed = dog.breed
// const weight = dog.weight

//New ES6 destructuring
const {name, age, breed, bark} = dog
console.log(name) //logs 'Kuma'
console.log(age) //logs 9
console.log(breed) //logs "Yorkie"
console.log(bark()); //logs 'Birk! Birk! Birk!'



const lunch = {
  sandwich: "Turkey",
  drink: 'Monster',
  snack: 'Chips',
}

const { sandwich, drink, snack } = lunch

console.log(sandwich, drink, snack)
