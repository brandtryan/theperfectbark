// keywords: object, objects, enumerating objects, key, value, for-of, for of, in, bracket, keys

const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

// use bracket notation to get value of key
for (let key in circle)
    console.log(key, circle[key]);
// -> radius 1
// -> draw f
// -> draw() {
// ->   console.log('draw');
// -> }

// for (let key of circle)
//     console.log(key);
// -> TypeError: circle is not iterable

// FOR-OF loops only work with iterables like ARRAYS and MAPS
// OBJECTS are NOT ITERABLE so have to use FOR-IN loop

// HOWEVER, this works as Object.keys returns ARRAY of VALUES
for (let key of Object.keys(circle))
    console.log(key);
// -> radius
// -> draw

// Object also has a keys method which returns an ARRAY OF KEY/VALUE PAIRS:
for (let entry of Object.entries(circle))
    console.log(entry);

// Can also use IN operator to see if object has a property
if ('radius' in circle) console.log('yes');

// THE SIMPLEST WAY TO GET PROPERTIES OF OBJECT IS WITH FOR-IN LOOPS
// BUT CAN ALSO USE OBJECT.KEYS AND OBJECT.ENTRIES AND "IN" OPERATOR
