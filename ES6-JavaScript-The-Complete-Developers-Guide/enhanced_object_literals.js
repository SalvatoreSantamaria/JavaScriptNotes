//key value pairs can be condensed to one word when the word is the same:
// {
//  const COLORS = { red: red, blue: blue };
// can be written as 
// const COLORS = { red, blue}
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
const canvasDimensions = function(width, initialHeight) {
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
const color = 'red';

const Car = {
  color,
  drive: function() {
    return 'Vroom!';
  },
  getColor: function() {
    return this.color;
  }
};
