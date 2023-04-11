let addOne = (arr) => {
  let result = []

  let helper = (arr) => {
    if (arr.length === 0) {
      return
    }

    result.push(arr[0] + 1)

    helper(arr.slice(1))
  }
  helper(arr)
  return result 
}

let x = addOne([10,20,30])
console.log('x', x)

















let z = (n) => {
  let result = []

  let helper = (n) => {
    if (n === 0) {
      return 
    }
    result.push(n)
    let o = n - 1
    helper(o)
  }
  helper(n)
  return result
}
console.log(z(10))
























