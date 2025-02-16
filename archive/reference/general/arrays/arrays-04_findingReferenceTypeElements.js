// keywords: array, objects, includes, find, findIndex

// Finding elements in an array depends on if we're dealing with PRIMITIVES or
// REFERENCE-based objects

// Working with REFERENCE-based
const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
];

// Since this is a NEW reference it is different than the one in array
console.log(courses.includes({ id: 1, name: 'a' })); // <- false

// The ".find" method works on arrays with objects
// .find takes a callback function as the argument in the form of:
// function(element) { <some boolean expression> }
// if boolean is true the element is returned, otherwise undefined is returned.

const course = courses.find(function (course) {
    return course.name === 'b';
});

console.log(course); // <- returns object

// ".findIndex" works just like ".find" but returns the INDEX of found element
const courseIndex = courses.findIndex(function (course) {
    return course.name === 'a';
});

console.log(courseIndex); // <- returns 0 OR if not found, -1
