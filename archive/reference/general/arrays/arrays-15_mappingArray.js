// keywords: array, filter, map, join,

// How to use map method to map elements to something else

// const numbers = [1, -1, 2, 3];

// const filtered = numbers.filter(n => n >= 0);

// const items = filtered.map(n => '<li>' + n + '</li>');

// const html = '<ul>' + items.join('') + '</ul>';

// console.log(html); // returns <ul><li>1</li><li>2</li><li>3</li></ul>

// Map to Objects

const numbers = [1, -1, 2, 3];

// const filtered = numbers.filter(n => n >= 0);

// curly braces indicate a BLOCK in arrow function so surround with () to indicate
// it's an OBJECT
// const items = filtered.map(n => ({ value: n }));

// console.log(items); // each number was mapped to value property of a new object
// Array of 3 objects returned: {value: 1} {value: 2} {value: 3}

// The .filter and .map methods return NEW ARRAYS and are CHAINABLE

const items = numbers
    .filter(n => n >= 0) // Convention for each method to be on its own line (chain)
    .map(n => ({ value: n }));
//.filter(obj => obj.value > 1)
//.map(obj => obj.value); // returns [2, 3]

console.log(items);
