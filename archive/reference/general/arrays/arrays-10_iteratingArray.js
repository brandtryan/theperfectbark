// keywords: for-of, for-each, loop, iterating, array

// Iterating an Array

const numbers = [1, 2, 3];

// Can use "for-of" loop
for (let number of numbers) {
    console.log(number); // returns 1 2 3
}

// Using "for-each"
numbers.forEach(number => console.log(number)); // returns 1 2 3

// Using "for-each" with second arg
numbers.forEach((number, index) => console.log(index, number));
// returns 0 1 / 1 2 / 2 3
