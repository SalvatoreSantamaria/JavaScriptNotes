const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
];



// Mock synchronous Code. This won't output post three, 
// because create takess longer that get
// function createPost(post) {
//   //mimic server response time
//   setTimeout(function(post) {
//     posts.push(post);
//   }, 2000);
// }

// function getPosts() {
//   //mimic server response time
//   setTimeout(function() {
//   let output = '';
//   posts.forEach(function(post){
//     output += `<li>${post.title}</li>`
//   });
//   document.body.innerHTML = output;
//   }, 1000)
// }

// createPost({title: 'Post Three', body: 'This is post three'});
// getPosts();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Mock asynchronous code with callbacks
// function createPost(post, callback) {
//   //mimic server response time
//   setTimeout(function() {
//     posts.push(post);
//     callback(); //adding in the callback function
//   }, 2000);
// }

// function getPosts() {
//   //mimic server response time
//   setTimeout(function() {
//   let output = '';
//   posts.forEach(function(post){
//     output += `<li>${post.title}</li>`
//   });
//   document.body.innerHTML = output;
//   }, 1000)
// }

// // here we are using the callback function
// createPost({title: 'Post Three', body: 'This is post three'}, getPosts);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

function createPost(post) {
  return new Promise(function(resolve, reject){
  //mimic server response time
  setTimeout(function() {
    posts.push(post);

    let error = false; //mimic error with true
    if (!error) { //instead of callback()
      resolve();
    } else {
      reject('Error: something went wrong')
    }

  }, 2000);
  })

}

function getPosts() {
  //mimic server response time
  setTimeout(function() {
  let output = '';
  posts.forEach(function(post){
    output += `<li>${post.title}</li>`
  });
  document.body.innerHTML = output;
  }, 1000)
}

// here we are using promise. If no catch and an error it will say uncaught error
createPost({title: 'Post Three', body: 'This is post three'}).then(getPosts).catch(function(err) {
   console.log(err)})