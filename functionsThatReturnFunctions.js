// Excellent Explanation: https://stackoverflow.com/questions/7629891/functions-that-return-a-function

function counter() {
  var count1 = 0;
  return function() {
    console.log(count1++);
  }
}
//example 1:
let count = counter(); 
count();//0
count();//1
count();//2

//example 2:
counter()()//0
counter()()//still logs 0!





function a() {
  console.log('A');
}
//alerts 'A', returns undefined

function b() {
  console.log('B');
  return a;
}
//alerts 'B', returns function a

// function c() {
//   alert('C');
//   return a();
// }
//alerts 'C', alerts 'A', returns undefined

// alert("Function 'a' returns " + a());
// alert("Function 'b' returns " + b());
// alert("Function 'c' returns " + c());

//Example how how this might get used:
let test = b(a) //set the result of b(a) to the variable called test. calling b() will console.lob 'B' BUT it was also return the function a, and that function gets assigned to test variable

test() //now, test won't return anything, BUT it will log out 'A'

