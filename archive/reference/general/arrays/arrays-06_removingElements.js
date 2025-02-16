// keywords: array, push, pop, shift, splice
// Removing Elements from array

const numbers = [1, 2, 3, 4];

// End
// Use ".pop" method
// const last = numbers.pop()
// console.log(numbers);   // <- [1, 2, 3]
// console.log(last);      // <- 4

// Beginning
// Use ".shift" method
// const first = numbers.shift()
// console.log(numbers);   // <- [2, 3]
// console.log(first);     // <- [1]

// Middle
// Use ".splice" method
// arg1 = index, arg2 = deleteCount
numbers.splice(2, 1);
console.log(numbers); // <- [1, 2, 4]

// delete multiple items with second arg
numbers.splice(0, 2);
console.log(numbers); // <- [4]
