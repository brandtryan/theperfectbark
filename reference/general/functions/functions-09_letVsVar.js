// keywords: let var variable window object scope

// // even if we remove brackets the FIRST STATEMENT (FOR ...FIRST CONSOLE.LOG) EXCEPTION IS THROWN
// function start() {
//     // for (let i = 0; i < 5; i++) console.log(i);
//     // BECAUSE OF LET, code above is a complete statement, so ˅ (i) is out of scope
//     // using VAR, (i) IS IN SCOPE, since it is still within the FUNCTION
//     for (var i = 0; i < 5; i++) console.log(i);
//     // (i) is accessible OUTSIDE block above when VAR is used

//     // WITH VAR, SCOPE IS ONLY LIMITED TO FUNCTION, NOT LIMITED TO JUST THE CODE BLOCK/STATEMENT
//     console.log(i);
// }

// // BEFORE ES6 (ES2015) var => FUNCTION-SCOPED
// // ES6: let, const => BLOCK-SCOPED

// start();

// Second Problem

// When we create a var outside of a functin, it becomes a GLOBAL variable
// REPRESENTING THE WINDOW OBJECT IN BROWSERS!!!
var color = 'red';
console.log(window.color); // returns red
// When we create a let variable, it is NOT ATTACHED to WINDOW object
let age = 30;
console.log(window.age); // returns undefined

// TAKEAWAY - avoid using var globally as it may overwrite a third-party library that uses that variable
// to attach to WINDOW object

// Technically, when we create a function it is attached to Window object.
// How can we prevent this?
function sayHi() {
    console.log('hi');
}
window.sayHi();

// later in course we will encapsulate so they won't be part of Window object
