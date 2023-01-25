//Simple Hash Table pattern
let containsDuplicate = function(nums) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], 0)
        } else {
            map.set(nums[i], (map.get(nums[i]) + 1))
        }
    }
    console.log('map', map)
};

// ----------------------------------------------------------------
// Using a Hash Table to avoid double for loops in two arrays

// How many jewels letters are included in the stones? Letters are cases sensitive
var numJewelsInStones = function(jewels, stones) {
    let map = new Map()
    let count = 0

    for (let i = 0; i < jewels.length; i++) {
      map.set(jewels[i], true) // it doesn't matter what the value is set to- but this is useful for other algos
    }
    console.log('map', map)

    for (let i = 0; i < stones.length; i++) {
      if (map.get(stones[i])) {
        count += 1
      }
    }
    return count
};

console.log(numJewelsInStones("aA", "aAAbbbb")) // returns 3
