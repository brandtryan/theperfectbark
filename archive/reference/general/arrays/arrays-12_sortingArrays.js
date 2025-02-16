// keywords: array, sorting, sort, reverse,

// Sorting Arrays

const numbers = [2, 3, 1];

// ".sort" method
numbers.sort();
console.log(numbers);

// ".reverse" method
numbers.reverse();
console.log(numbers);

// with object elements you have to pass comparison function as second arg
const courses = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'JavaScript' },
];

// Try to sort array by name of course
// Nothing happens by default
courses.sort();
console.log(courses); // Node.js still is first

// Use comparison function and pass two parameters
courses.sort(function (a, b) {
    // a < b => -1
    // a > b => 1
    // a === b => 0

    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
});

console.log(courses);
// IF NAME OF COURSE STARTS WITH LOWERCASE LETTER IT WON'T WORK
// e.g. courses.name = "javaScript"
// this is because the capital letter ASCII code number is less than the
// lowercase ASCII code number

// If this is the case, using example above, add this to function:

// const nameA = a.name.toUpperCase();
// const nameB = b.name.toUpperCase();

// AND change the following:

// (nameA < nameB) return -1
// (nameA > nameB) return 1
