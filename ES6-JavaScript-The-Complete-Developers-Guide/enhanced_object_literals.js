//key value pairs can be condensed to one word when the word is the same:
// {
//  const COLORS = { red: red, blue: blue };
// can be written as 
// const COLORS = { red, blue}


let name = "Kuma"
let breed = "Yorkie"
let bark = (times) => {
  let amount = 1 * times
  return amount
}

// let dog = {
//   name: name,
//   breed: breed
// };

// console.log(dog) //logs { name: 'Kuma', breed: 'Yorkie' }

//using ES6

let dog = { name, breed, bark }
console.log(dog) //{ name: 'Kuma', breed: 'Yorkie', bark: [Function: bark] }
console.log(dog.name) //logs Kuma
console.log(dog.bark(5))



////////////////////////////////////////////////////////////////////////////////////////////////////////////

//literals in functions
const canvasDimensions = function(width, initialHeight) {
  const height = initialHeight * 9 /16;
  return { 
    width: width, 
    height: height 
  };
}
//is the same as 
const canvasDimensions2 = function(width, initialHeight) {
  const height = initialHeight * 9 /16;
  return { 
    width,
    height
  };
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////

//enhanced literal notation
const color = 'red';

const Car = {
  color: color,
  drive: function() {
    return 'Vroom!';
  },
  getColor: function() {
    return this.color;
  }
};
//can be written as
const color2 = 'red';

const Car2 = {
  color,
  drive: function() {
    return 'Vroom!';
  },
  getColor: function() {
    return this.color;
  }
};
