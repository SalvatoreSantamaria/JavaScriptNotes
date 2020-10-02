//get local text file data
document.getElementById('button1').addEventListener('click', getText);
function getText() {
  fetch('test.txt')
  .then(function(res){
    return res.text();
  })
  .then(function(data) {
    console.log(data)
    document.getElementById('output').innerHTML = data;
  })
  .catch(function(err){
    console.log(err)
  })
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//get local JSON data
document.getElementById('button2').addEventListener('click', getJson);
function getJson() {
  fetch('posts.json')
  .then(function(res){
    return res.json();
  })
  .then(function(data) {
    console.log(data)
    let output = ''

    //because data is an array format now, have to loop thru
    data.forEach(function(post){
      output += `<li>${post.title}</li>`
    })

    document.getElementById('output').innerHTML = output;
  })
  .catch(function(err){
    console.log(err)
  })
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//get API data
document.getElementById('button3').addEventListener('click', getAPI);
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
    let output = ''

    //because data is an array format now, have to loop thru
    data.forEach(function(user){
      output += `<li>${user.login}</li>`
    })

    document.getElementById('output').innerHTML = output;
  })
  .catch(err => console.log("Error! " + err));
}