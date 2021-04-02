// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus

// The unary plus operator (+) precedes its operand and evaluates to its operand
// but attempts to convert it into a number, if it isn't already.



// Usage with numbers -------------------------------------------------------

const x = 1
console.log(+x) //logs 1

const y = -1
console.log(+y) //logs -1

// Usage with non-numbers -------------------------------------------------------
+true // logs 1
+false // logs 0
+null // logs 0
