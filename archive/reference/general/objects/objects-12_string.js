// keywords: string, string primitive, string object, includes, startsWith, endsWith, indexOf, replace, toUpperCase,
// toLowerCase, trim, \n, escape, split


// String Primitive
const message = 'This is my first message';
console.log(typeof(message)); // returns string

// String Object
const another = new String('hi');
console.log(typeof(another)); // returns object

// Primitives are not supposed to have properties and methods, but when you type message. a bunch of properties and
// methods are displayed. This is because JavaScript internally wraps string Primitives in astring Object!
console.log(message.length); // returns 24
console.log(message[0]); // returns T
console.log(message.includes('first')); // returns true
console.log(message.startsWith('This')); // returns true
console.log(message.endsWith('message')); // returns true
console.log(message.indexOf('my')); // returns 8
console.log(message.replace('first', 'second')); // returns NEW string
console.log(message.toUpperCase()); // returns in uppercase (NEW string)
console.log(message.toLowerCase()); // returns in lowercase (NEW string)
console.log(message.trim()); // trims any whitespace before/after string (NEW STRING)

// Escape Notation e.g. including a single quote inside a string surrounded with single quotes
const escaped = 'Don\'t try to escape.';
console.log(escaped); // returns Don't try to escape.
// \n New Line
const longMessage = 'This is a typical post from Brandt that goes on\n and on for pages where you have to scroll.';
console.log(longMessage);
// returns:
// This is a typical post from Brandt that goes on
// and on for pages where you have to scroll

// Split by space (word) - new array is returned
console.log(message.split(' '));
// Split by character ('') - new array is returned
console.log(message.split(''));
