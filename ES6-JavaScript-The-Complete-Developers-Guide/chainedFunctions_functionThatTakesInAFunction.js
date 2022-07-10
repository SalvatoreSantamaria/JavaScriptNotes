//-----------
https://medium.com/@khang.lu/javascript-es6-for-react-function-that-returns-another-function-66481f19bbf7

// These are all the same: 

const chainedAddition = a => b => console.log(a+b)

const chainedAddition = (a) => {
  return (b) => {
    console.log(a+b)
  }
}

var chainedAddition = function chainedAddition (a) {
  return function (b) {
    return console.log(a+b);
  };
};

