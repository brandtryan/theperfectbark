// keywords: factory function, constructor function, constructor, factory, object, objects

// Factory Function - Camel Case
// calls a function and returns an object
function createCircle(radius) {
    return {
        radius, // equivalent to: radius: radius,
        draw() {
            console.log('draw');
        }
    };
}

const myCircle = createCircle(1);

// Constructor Functions - Pascal Case
// can think of 'this' as an empty object
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

// with constructor function the 'new' keyword is used
// 3 things happen:
// 1. a new empty object is created
// 2. 'this' refers to it.
// 3. object is returned
const circle = new Circle(1); 
