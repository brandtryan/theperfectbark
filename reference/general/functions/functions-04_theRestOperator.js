// keywords: rest operator, function arguments

// to have variable number of arguments use the rest operator

// DON'T CONFUSE WITH ARRAY SPREAD METHOD

// THE REST OPERATOR ONLY APPLYS TO LAST FORMAL PARAMETER OF FUNCTION (i.e. the REST OF THE PARAMETERS)
//                           ˅˅˅ the REST OPERATOR is the three dots prefixed to parameter of function
function sumWithRestOperator(...args) {
    console.log(args); // returns array of special 'arguments' property from function call below
}

console.log(sumWithRestOperator(1, 2, 3, 4, 5, 10));
    // returns array [1, 2, 3, 4, 5, 10]

function sumWithoutRestOperator(args) {
    console.log(args); // returns first argument from call below
    // returns 1
}

console.log(sumWithoutRestOperator(1, 2, 3, 4, 5, 10));

// So ... to create sum function that will sum any number of argument supplied, we can use reduce method
// ... since the special 'arguments' property of function object returns an ARRAY:
function sum(...args) {
    return args.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9)); // returns 45
console.log(sum(1, 3)); // returns 4
console.log(sum(1)); // returns 1
console.log(sum(0)); // returns 0

// Next Level - shopping cart with discount!!

function sumCartWithDiscount(discount, ...prices) {
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount); // total * .9 (with 0.1 discount)
}

// 10% discount with 1 item in cart for $20 and the other $30
console.log(sumCartWithDiscount(0.1, 20, 30)); // returns 45
