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