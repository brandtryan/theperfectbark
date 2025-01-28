// keywords: factory function, factory, constructor function, constructor, object constructor, object, objects

// Every object has an object constructor that can be accessed to see the function that created it

// Factory Function
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('draw');
        }
    };
}
const circle = createCircle(1);

// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}
const another = new Circle(1);
