//Double NOT (!!)
//It is possible to use a couple of NOT operators in series to explicitly force the conversion of any value to the corresponding boolean primitive. The conversion is based on the "truthyness" or "falsyness" of the value (see truthy and falsy).

//The same conversion can be done through the Boolean function.

//This is useful for converting strings

n1 = !!true                   // !!truthy returns true
n2 = !!{}                     // !!truthy returns true: any object is truthy...
n3 = !!(new Boolean(false))   // ...even Boolean objects with a false .valueOf()!
n4 = !!false                  // !!falsy returns false
n5 = !!""                     // !!falsy returns false
n6 = !!Boolean(false)         // !!falsy returns false