// keywords: array, length, spice, while, pop

// Emptying an Array

// const numbers = [1, 2, 3, 4];
let numbers = [1, 2, 3, 4];
let another = numbers;

// Solution 1 DOES NOT WORK WITH CONSTANTS
// numbers = [];
// console.log(numbers);   // <- []

// numbers array hasn't been garbage collected yet, so since another below
// is a separate REFERENCE that points to memory address it returns array!
// console.log(another);   // <- [1, 2, 3, 4]

// Solution 2 RECOMMENDED/ELEGANT SOLUTION
// numbers.length = 0;  // returns []

// Solution 3
// numbers.splice(0, numbers.length);  // returns []

// Solution 4 NOT RECOMMENDED WITH LARGE ARRYS!!
while (numbers.length > 0) numbers.pop(); // returns []

console.log(numbers); // returns []
console.log(another); // returns []
