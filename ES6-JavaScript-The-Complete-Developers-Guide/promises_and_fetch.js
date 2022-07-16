// Promise states:
// unresolved - waiting for something to finish
// resolved - finished, ok
// rejected - something went wrong

// alternate url = "https://jsonplaceholder.typicode.com/posts"

// this needs to be used in the browser. copy and paste the below into the browser console.

function getAPI() {
  fetch('https://api.github.com/users')
  .then(function(res){
  if (!res.ok) {
      throw new Error(res.error);
   }
    return res.json();
  })
  .then(function(data) {
    console.log(data)
  })
}
getAPI()


// How to access the return value of a Promise object
//https://dev.to/ramonak/javascript-how-to-access-the-return-value-of-a-promise-object-1bck
// Using ES6 --------------------
// const address = fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((response) => response.json())
//   .then((user) => {
//     return user.address;
//   });

// const printAddress = () => {
//   address.then((a) => {
//     console.log(a);
//   });
// };

// printAddress();

// Using ES5 --------------------
const address = fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(function(response) { 
    return response.json()
  })
  .then(function(user) { //could be data
    return user.address; //then would be data.address
  });

const printAddress = function() {
  address.then(function(a) {
    console.log(a);
  });
};

printAddress();
