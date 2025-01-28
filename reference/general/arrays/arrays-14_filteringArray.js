// array, filter

// How to filter an array based on criteria

const numbers = [1, -1, 2, 3];

// ".filter" method - function as argument, up to 3 values:
// value, index, array[]

// all elements matching criteria returned in a NEW array
const filtered = numbers.filter(n => n >= 0);

console.log(filtered); // returns [1, 2, 3]
