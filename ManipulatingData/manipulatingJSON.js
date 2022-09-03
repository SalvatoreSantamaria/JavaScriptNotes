// use JSON.parse() to convert to either an array or any object

let json = '{"name":"John", "age":30, "city":"New York"}'
//console.log(json) //{"name":"John", "age":30, "city":"New York"}

const json2 = '["Ford", "BMW", "Audi", "Fiat"]';
const jsonArr = JSON.parse(json2);
//console.log(jsonArr) //[ 'Ford', 'BMW', 'Audi', 'Fiat' ]

const jsonObj = JSON.parse(json)
//console.log(jsonObj) //{ name: 'John', age: 30, city: 'New York' }

const jsonMap = new Map(Object.entries(JSON.parse(json)))
//console.log(jsonMap)

// Challenges: pull similar data out of these and put them into a new Map.
// Then query the map for something. 

// Something with just plain objects 
// Make a new obj with combined colors
// Make a new object with only black cars
let plainObjOne = {
  1: 'Ford Escape',
  2: 'Ford F150',
  3: 'Ford F250',
  4: 'Dodge Ram 1500',
}

let plainObjTwo = {
  1: 'Blue',
  2: 'Black',
  3: 'Black',
  4: 'Grey',
}

const combineObjects = (objOne, objTwo) => {
  const newObj = new Map(Object.entries(objOne))
  const newObjTwo = new Map(Object.entries(objTwo))
  // console.log('newObj', newObj)
  for (let i of newObj.entries()) {
    //console.log('i', i[1])
    const color = newObjTwo.get(i[0])
    newObj.set(i[0], `${color} ${i[1]}`)
    // for (let k in objTwo) {
    //   console.log(k)
      
    // }
  }
// console.log(newObj)
  return newObj
}
let result = new Map()
const combined = combineObjects(plainObjOne, plainObjTwo)
for (let [v, k] of combined) {
  // console.log(k)
  if (k.includes('Black')) {
    result.set(v, k)
  }
}
// console.log('result ', result)


// Something with arr of obj
let plainObjInArray = [{
  1: 'Ford Escape',
  2: 'Ford F150',
  3: 'Ford F250',
  4: 'Dodge Ram 1500',
  }, {
  1: 'Blue',
  2: 'Black',
  3: 'Black',
  4: 'Grey',
}]

const one = plainObjInArray[0]
const two = plainObjInArray[1]
// console.log('one', one)
// console.log('two', two)

// Savings algo
// How much to transfer per day based on how much this user is spending per month.
let transactions = [{
  date: '8/5/2022',
  amount: -10,
  }, 
  {
    date: '8/4/2022',
    amount: -1,
  },
  {
    date: '8/4/2022',
    amount: -7,
  },
  {
    date: '8/3/2022',
    amount: -13,
  },
]

let income = [
  {
    date: '8/1/2022',
    amount: 500,
  },
  {
    date: '8/1/2022',
    amount: 500,
  },
]

const incomePerMonth = (income) => {
  let total = 0
  for (let i of income) {
    //console.log('i', i.amount)
    total += i.amount
  }
  return total
}

const revenue = incomePerMonth(income)
console.log('revenue', revenue)

const spendPerDay = (t) => {
  let total = 0
  let count = 0
  
  for (let i of t) {
    count += 1
    total += i.amount
  }
  console.log('spent', total)
  console.log('count ', count)
  let spendRate = total / count
  return spendRate
}

let spendRate = spendPerDay(transactions)

const amountToSave = (revenue, spendRate) => {
  const spendTotal = spendRate * 30
  return (revenue - spendTotal) / 30 
}

console.log(amountToSave(revenue, spendRate))
// Something with obj of obj 
// Something with obj of array







// Match up these Key Values and output the collections they share.
// Output
// {
//   "58,17": ["Software Design", "Linear Algebra"]
//   "58,94": ["Economics"]
//   "58,25": ["Economics"]
//   "94,25": ["Economics"]
//   "17,94": []
//   "17,25": []
// }


// const enrollments1 = [
//   ["58", "Linear Algebra"],
//   ["94", "Art History"],
//   ["94", "Operating Systems"],
//   ["17", "Software Design"],
//   ["58", "Mechanics"],
//   ["58", "Economics"],
//   ["17", "Linear Algebra"],
//   ["17", "Political Science"],
//   ["94", "Economics"],
//   ["25", "Economics"],
//   ["58", "Software Design"]
// ];