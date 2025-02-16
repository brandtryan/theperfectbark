// keywords: array, every, some,

// Testing elements of Array using new methods .every and .sum

const numbers = [1, 2, 3];

// ".every" takes a function with up to 3 parameters:
//  value: number, index: number, array: number[0] (YOU DON"T HAVE TO USE THEM ALL)

// Below, will search all elements and return true if they are all greater than 0.
// (and will STOP SEARCHING and return FALSE when it finds first false otherwise)
const allPositive = numbers.every(function (value) {
    return value >= 0;
});

console.log(allPositive); // returns true

// ".some" is the same, but returns true if at least one element matches

const gteThree = numbers.some(function (value) {
    return value >= 3;
});

console.log(gteThree); // returns true
