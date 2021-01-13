let id = Symbol();

const user = {
  name: "Kuma",
  weight: "12 lbs"
}

user[id] = 1234; //saved as a symbol. symbols are great as unique identifiers
console.log(user)