// keywords: object, objects, modify property, properties, delete, delete property

const circle = {
    radius: 1
};

// Objects are dynamic - you can add/remove properties and methods
circle.color = 'yellow';
circle.draw = function () { }

delete circle.color;
delete circle.draw;

console.log(circle);
