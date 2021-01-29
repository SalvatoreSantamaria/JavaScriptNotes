//console.log('hello')
//reminder: 0 false, 1 true

let list = ['puff', 'jerk', 'dumbass']
const isProfane = (profanity_list, test_input) => {
    return profanity_list.filter(word => {
      const regExp = new RegExp(`(\\b|_)${word.replace(/(\W)/g, '\\$1')}(\\b|_)`, 'gi')
      console.log(regExp.test(test_input))
      return regExp.test(test_input)
    }).length
  }



  console.log(isProfane(list, 'letspuff'))

  /////

// The test() method executes a search for a match between a regular expression and a specified string. 
// Returns true or false 

`(\\b|_)${word.replace(/(\W)/g, '\\$1')}(\\b|_)`, 'gi'
// filter only returns whats true
//unsure      (\\b|_) match b char OR _ 
//      /(\W)/g global search for not word
//unsure     '\\$1' $1 capture group
//      gi global and ignore case