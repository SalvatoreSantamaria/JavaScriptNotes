// https://www.udemy.com/course/master-the-coding-interview-big-tech-faang-interviews/learn/lecture/22359504#overview

// Step to solving recursion according to this lecture.
// 1. Identify the base case
// 2. Identify the recursive case
// 3. Get closer and closer and return when needed (usually 2 returns)


let counter = 0
function inception() {
  console.log(counter)
  if(counter > 3) {
    return 'done'
  }
  counter++
  inception() //this line NEEDS to be a return
  //return inception() // like this
}

console.log(inception()) //THIS WILL RETURN UNDEFINED IF WE DON'T RETURN THE FUNCTION RESULT! 

// Anything you do with recursion can be done iteratively with a loop BUT recursion costs more memory.
// Also, sometimes it's less complex and more readable to use recursion


// When to use Recursion
// Trees, Graphs, divide and conquer, occasional sorting.
// Every time  you are using a tree or converting something into a tree, consider recursion
// 1. Divided into a number of subproblems that are smaller instances of the same problem.
// 2. Each instance of the subproblem is identical in nature. 
// 3. The solutions of each subproblem can be combined to solve the problem at hand.