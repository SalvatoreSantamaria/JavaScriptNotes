class Set {
    
  /**
   * initialization of an object.
   */
  constructor() {
      this.collection = [];
  }
  /**
   * Adds an element to the set.
   * @param Set value an element for Set
   */
  add(value) {
      if (!this.has(value)) {
          this.collection.push(value);
          return true;
      }
      return false;
  }
  /**
   * Checks weather a particular element is exists or not in set.
   * @param Set value an element of Set.
   */
  has(value) {
      if (this.collection.indexOf(value) !== -1) {
          return true;
      }
      return false;
  }
  /**
   * Returns all the values on the set.
   */
  values() {
      return this.collection;
  }
  /**
   * Removes an element from the set.
   * @param Set value an element of Set.
   */
  remove(value) {
      if (this.has(value)) {
          var index = this.collection.indexOf(value);
          this.collection.splice(index, 1);
          return true;
      }
      return false;
  }
  /**
   * Returns union of two sets.
   * @param Set otherSet object of set. 
   */
  union(otherSet) {
      var set = new Set();
      this.collection.forEach(element => {
          set.add(element);
      });
      otherSet.values().forEach(element => {
          set.add(element);
      });
      return set;
  }
  /**
   * Returns intersection of two sets.
   * @param Set otherSet object of set.
   */
  intersection(otherSet) {
      var set = new Set();
      this.collection.forEach(element => {
          if (otherSet.has(element)) {
              set.add(element);
          }
      });
      return set;
  }
  /**
   * Returns difference of two sets.
   * @param Set otherSet object of set.
   */
  difference(otherSet) {
      var set = new Set();
      this.collection.forEach(element => {
          if (!otherSet.has(element)) {
              set.add(element);
          }
      });
      return set;
  }
}
var set = new Set();
set.add(10);
set.add(20);
set.add(30);
var set1 = new Set();
set1.add(20);
set1.add(40);
console.log(set.values());
console.log(set.has(10));
set.remove(10);
console.log(set.has(10));
set.add(40);
console.log(set.values());
console.log(set.union(set1));
console.log(set.intersection(set1));
console.log(set.difference(set1));


// my rewrite ///////////////////////////////////////////////////////////////////////////

class Set {
  //initialization of an object.
 constructor() {
     this.arr = [];
 }
 // add a value, values must be unique in a set
 add(value) {
   for (let i = 0; i < this.arr.length; i++) {
     if (this.arr[i] === value) {
       return false
     }
   }
   this.arr[this.arr.length] = value
   return this.arr
 }
 //check to see if it has a value
 has(value) {
   for (let i = 0; i < this.arr.length; i++) {
     if (this.arr[i] == value) {
       return true
     } 
   }
    return false
 }
 // check the size
 size() {
     return this.arr.length;
 }
 // delete 
 delete(value) {
   for (let i = 0; i < this.arr.length; i++) {
     if (this.arr[i] == value) {
       this.arr[i] = this.arr[this.arr.length - 1]
       // take element first and then decrement array. instead of using pop()
       let temp = this.arr[this.arr.length - 1]
       this.arr.length = this.arr.length - 1
       return temp

     }
   }
 }




}
var set = new Set();
set.add(10);
set.add(20);
set.add(30);
set.delete(20)
console.log(set)