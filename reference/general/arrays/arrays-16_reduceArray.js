// keywords: array, reduce, accumulate,

// How to sum numbers using .reduce

// NOT using .reduce
const numbers = [1, -1, 2, 3];

let sum = 0;
for (let n of numbers) sum += n;

console.log(sum);

// Using .reduce
// Can be elements of any type

// Takes 2 args: function, initial value
// function takes two arguments:
// previous value (accumulator)
// current element value

// Callback function is called on each element and returns value that is in turn
// used as argument for callback on next element, etc. for each element, finally
// returning a single value (it accumulates each time)

// Here is what is happening:
// a = 0, c = 1 => a = 1
// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5
// return 5;

// const sumFromReduce = numbers.reduce((accumulator, currentValue) => {
//     accumulator + currentValue;
// }, 0);

// console.log(sumFromReduce); // returns 5

// Cleaner code w/o initial value:
// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5
const sumFromReduce = numbers.reduce((a, c) => a + c);
console.log(sumFromReduce);
