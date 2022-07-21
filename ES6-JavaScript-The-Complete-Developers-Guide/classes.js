class Car {
  constructor(input) {
    this.wheels = 4
    this.make = input
  }
  drive() {
    return 'vroom'
  }
}

const escape = new Car('Ford')
console.log(escape.drive()) //logs vroom
console.log(escape.wheels) //logs 4
console.log(escape.make) //logs 'Ford'

///////////////////////////////////////////////////////////////////////////////////////////////////////

class Car2 {
  constructor(input) { //2 passing in input object
    this.wheels = 4
    this.make = input.manufacturer //3. setting property
  }
  drive() {
    return 'vroom'
  }
}
const escalade = new Car2({ manufacturer: 'Cadillac' })
console.log(escalade.make) //logs Cadillac

class Truck extends Car2 {
  constructor(input) {
    super(input); // 1. calls parent constructor, must include super and in the input object to pass up 
    this.color = input.color
  }
}
const f250 = new Truck({ manufacturer: 'Ford', color: 'Silver'})
console.log(f250) //Truck { wheels: 4, make: 'Ford', color: 'Silver' }
console.log(f250.drive()) //vroom