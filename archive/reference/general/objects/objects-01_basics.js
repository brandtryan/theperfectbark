// keywords: object literal, object, literal, object, properties, methods

// The purpose of an object is to group together highly-related variables and fucntions.
// Object Literal syntax
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function () {
        console.log('draw');
    }
};

// Can access properties and methods with dot notation

circle.draw();
