


let beers = [
  { name: 'One', type: 'IPA', qty: 100 },
  { name: 'Two', type: 'Pale Ale', qty: 100 },
  { name: 'Three', type: 'Brown', qty: 100 },
  { name: 'Four', type: 'IPA', qty: 0 },
  { name: 'Five', type: 'IPA', qty: 6 }
]


let IPAs = beers.filter((b)=> {
 return(b.type == "IPA")
})
console.log(IPAs)

//can chain filter:
let IPAsInStock = beers.filter((b)=> {
  return(b.type == "IPA" && b.qty > 0) 
})
console.log(IPAsInStock)

//real world:
let post = {id: 4, title: 'Post 4'};
let comments = [
  {postId: 1, content: 'Abcd'},
  {postId: 4, content: 'efgh'},
  {postId: 3, content: 'ijklm'},
  {postId: 4, content: 'nopqr'},
  {postId: 4, content: 'stuv'},
]
function postComments(post, comments) {
  return comments.filter((c)=> {
    return c.postId === post.id
  })
}
console.log(postComments(post, comments))