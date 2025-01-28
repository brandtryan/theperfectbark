// keywords: spread, operator, copy, array,

// The Spread Operator
// ES6 - and cleaner than using ".slice"

const first = [1, 2, 3];
const second = [4, 5, 6];

// When we spread an array, all its elements are copied individually
const combined = [...first, ...second];
console.log(combined); // returns [1, 2, 3, 4, 5, 6]

// We can add elements as well
const combinedAddElement = [...first, 'a', ...second, 'b'];
console.log(combinedAddElement); // returns [1, 2, 3, 'a', 4, 5, 6, 'b']

// Recall slicing w/ no args returns copy of array:
// const copy = combined.slice();

// We can also copy array with the spread operator:
const copy = [...combined];
console.log(copy); // returns [1, 2, 3, 4, 5, 6]
