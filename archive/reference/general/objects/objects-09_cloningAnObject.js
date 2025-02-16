
const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

// OLD WAY: To copy all the properties of an object into a new one:

// const another = {}; // initially create an empty object

// // use FOR-IN loop
// for (let key in circle)
//     another[key] = circle[key];

// console.log(another); // -> {radius: 1, draw: f}

// NEW WAY to copy
const another = Object.assign({}, circle); // args are TARGET({}) and SOURCE(circle)

console.log(another); // -> {radius: 1, draw: f}

// Using Object.assign - target can also be existing object/property
const another2 = Object.assign({
    color: 'yellow'
}, circle);

console.log(another2); // -> {color: 'yellow', radius: 1, draw: f}

// An even MORE ELEGANT way to CLONE an OBJECT is to use the SPREAD OPERATOR
const another3 = { ...circle };

console.log(another3);