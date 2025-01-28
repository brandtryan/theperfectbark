// keywords: array, indexOf, lastIndexOf, includes

// Finding elements in an array depends on if we're dealing with PRIMITIVES or
// REFERENCE-based objects

// Working with PRIMITIVES
const numbers = [1, 2, 3, 3, 4];

// ".indexOf" - returns index of element
// if element not found -1 is returned
console.log(numbers.indexOf('a')); // <- -1

console.log(numbers.indexOf(3)); // <- 2

// ".lastIndexOf" returns last index of same elements
console.log(numbers.lastIndexOf(3)); // <- 3

// ".includes" returns boolean if element exists in array
console.log(numbers.includes(2)); // <- true

// Use second argument in all methods to start from specific index
console.log(numbers.indexOf(3, 3)); // <- 3
console.log(numbers.indexOf(3, 4)); // <- -1
