/* Dave Gray Tutorial (using a different example)
https://www.youtube.com/watch?v=7T051-eeacQ&list=PL0Zuz27SZ-6N3bG4YZhkrCL3ZmDcLTuGd&index=12 
*/

// A switch statement

const value = 'B';

const switchFunction = (value) => {
    switch (value) {
        case 'A':
          return 'Value is A';
        case 'B':
          return 'Value is B';
        case 'C':
          return 'Value is C';
        default:
          'Value is not A, B, or C';
      }
}

const switchResult = switchFunction(value);
console.log('switchResult is',  switchResult);

// Using an object instead of a switch statement

const letterObject = {
    A: 'Value is A',
    B: 'Value is B',
    C: 'Value is C',
};        

const letterObjectFunction = (value) => {
    return letterObject[value] || 'Value is not A, B, or C'; // same as the switch statement above, the || is the default value
}

const letterObjectResult = letterObjectFunction(value);
console.log('letterObjectResultt is',  letterObjectResult);