// array, objects, findIndex,

// Working with REFERENCE-based
const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
];

// Same with arrow function syntax
const courseIndex = courses.findIndex(course => course.name === 'a');

console.log(courseIndex); // <- returns 0 OR if not found, -1
