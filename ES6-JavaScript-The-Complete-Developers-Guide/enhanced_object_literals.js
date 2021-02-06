// https://www.youtube.com/watch?v=lpAqdeRKaSw

const name = "Kuma"
const breed = "Yorkie"
const role = "pet" // add a property name based on the value of a variable

const dog = {
  name: name,
  breed: breed,
  bark: function(input) {
    return this.name + " barked" + " at " + input + "!"
  }
}

console.log('dog 1 ______________________')
console.log(dog)
console.log(dog.bark('me'))

// with ES6 ____________________________________________________________________________________
const dog2 = {
  [role]: true, // add a property name based on the value of a variable. dog2.role is 'true'
  name,
  breed,
  bark(input) {
    return this.name + " barked" + " at " + input + "!"
  }
}
console.log('dog 2 ______________________')
console.log(dog2) //{ pet: true, name: 'Kuma', breed: 'Yorkie', bark: [Function: bark] }
console.log(dog2.bark('you'))
