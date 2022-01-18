


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
// _____________________________________________________________________
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

// _____________________________________________________________________
//another real world:

let items = [
  { id: 1, name: 'One', color: 'red' },
  { id: 2, name: 'Two', color: 'blue' },
  { id: 3, name: 'Three', color: 'black' },
  { id: 4, name: 'Four', color: 'black' },
  { id: 5, name: 'Five', color: 'black' }
]


//resources[0].plans[0].perksList = resources[0].plans[0].perksList.filter(perk => perk.key !== perkkey);
items = items.filter(i => i.color !== 'black')
console.log('items is ', items)
// logs
// items is  [
//   { id: 1, name: 'One', color: 'red' },
//   { id: 2, name: 'Two', color: 'blue' }
// ]