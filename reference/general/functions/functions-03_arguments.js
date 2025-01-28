// keywords: function arguments, for-of loop, arguments, function property

// Dynamic nature of typing in JavaScript
// let x = 10;
// x = 'a';
// console.log(x); // returns a

// Similarly we have the same concept in arguments
// function sum(a, b) {
// 	console.log(arguments);
//     return a + b;
// }

// console.log(sum(1, 2)); // returns 3
// console.log(sum(1)); // returns NaN because b is undefined
// console.log(sum(1, 2, 3, 4, 5)); // returns NaN because only the first 2 args are used

// What if you want to have a variable amount of args in a function?
// Every function in JavaScript has a special property called 'arguments'
// use for-of loop to loop over arguments
// for-of loop can be used on any iterable object
function sumWithoutRestOperator() {
    console.log(arguments);
    // return a + b;
    let total = 0;
    for (let value of arguments) total += value;
    return total;
}

console.log(sumWithoutRestOperator(1, 2)); // returns 3
console.log(sumWithoutRestOperator(1)); // returns 1
console.log(sumWithoutRestOperator(1, 2, 3, 4, 5)); // returns 15
