// keywords: array, push, unshift, splice

// Declaring an array as a constant only throws error if an attempt is made to
// assign the variable NAME again.
// We are free to manipulate the contents of an array declared as a constant.
const numbers = [3, 4];

// 3 examples of methods to manipulate array

// End
numbers.push(5, 6);

// Beginning
numbers.unshift(1, 2);

// Middle
// first parameter is index of starting point
// second parameter is items to delete
// third... items to add
numbers.splice(2, 0, 'a', 'b');

console.log(numbers);
