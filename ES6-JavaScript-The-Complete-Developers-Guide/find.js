//find is to search through array to find element. It will only return the first matching result.

let users = [
  { name: 'Bob', age: 44 },
  { name: 'John', age: 25 },
  { name: 'Bill', age: 52 },
  { name: 'Will', age: 22 }
]

let result = users.find((u)=> {
  //return (u.name === 'Bill') //works
  return(u.age > 50)
})
console.log(result)


//Real world example
let posts = [
  { id: 1, title: 'Post 1' },
  { id: 2, title: 'Post 2' },
  { id: 3, title: 'Post 3' },
  { id: 4, title: 'Post 4' }
]
let comment = {postId: 3, content: "This is a comment!"}

function postComments(posts, comment) {
  return posts.find((p)=> {
    return p.id === comment.postId
  })
}
console.log(postComments(posts, comment))