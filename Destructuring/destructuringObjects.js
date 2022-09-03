// reference: https://www.youtube.com/watch?v=NIq3qLaHCIs

// destructuring is taking an obj/arr and converting into smaller obj/arr/vars

const personOne = {
  name: 'Addison',
  age: 4,
  address: {
    city: 'city1',
    state: 'state1'
  }
}

const personTwo = {
  name: 'Kuma',
  age: 9,
  address: {
    city: 'city2',
    state: 'state2'
  }
}

//not based on position, based on the name of the key!
const {name, age} = personTwo //get the name and age from personTwo
// const {name: firstName} = personTwo // set the name to a variable called firstName
// const {name, favoriteFood = 'treats'} = personTwo has a default value for favoriteFood if favoraiteFood does not exist
// const {name: firstName} = personTwo // set the name to a variable called firstName
const {name: firstName = 'defaultValue'} // this is a default value for variable firstName if name does not exist

// destructure nested objects
const {name: firstName, address: { city }} = personTwo

const {name: firstName, ...rest} = personTwo
//get the rest of the personTwo object and set it two the variable rest

//combine two objects
const personThree = {...personOne, ...personTwo} //personTwo will overwrite any repeated keys in personOne


function printUser(user) {
  console.log(user.name, user.age)
}
printUser(personOne) //print name and age

function printUser({name, age}) { // because passing in object desctructred with name and age keys!
  console.log(name + age) 
}
printUser(personOne)//logs name and age destructured