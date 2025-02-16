// keywords: array, join, split, methods,

// Joining Arrays - join elements in an array

const numbers = [1, 2, 3];

// ".join" can include seperator string, and returns a string:
const joined = numbers.join(',');
console.log(joined); // returns 1,2,3

// ".split" splits STRINGS
const message = 'This is my first message';
const parts = message.split(' ');
console.log(parts); // each element is word from the string

// Now can use join method on the string
// Particularly usefull building URL's
const combined = parts.join('-');
console.log(combined); // returns This-is-my-first-message
