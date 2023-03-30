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