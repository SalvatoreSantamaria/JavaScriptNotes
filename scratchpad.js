let expense = {
  type: 'stuff',
  value: 1,
}



const someFunction = ({value, type}) => {
  console.log(value, type)
}

someFunction(expense)