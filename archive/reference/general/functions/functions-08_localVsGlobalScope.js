// keywords: local global scope

// THE SCOPE OF A VARIABLE DETERMINES WHERE A VARIABLE IS ACCESSIBLE
// when we use "let" or "const", what block they are in determines where they are accessible
// function start() {
//     const message = 'hi';

//     if (true) {
//         const another = 'bye'; // this constant is ONLY available in this "if" block
//     }
//     // console.log(another);
//     // Same problem with for loop
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//     }

//     console.log(i); // error
// }
// console.log(message); // returns "Uncaught ReferenceError: message is not defined"
// start(); // returns "Uncaught ReferenceError: another is not defined
//     at start"

const color = 'red'; // GLOBAL CONST IS AVAILABLE EVERYWHERE BUT IS TRUMPED BY LOCAL OF SAME NAME
function start() {
    const message = 'hi';
    // what is we have const with same name defined in block?
    // LOCAL VARIABLES TAKE PRESEDENCE OVER GLOBALS OF SAME NAME
    const color = 'blue';
    console.log(color); // works
}
// considered BAD PRACTICE to use same name for variables with different scope
// analogy - everyone should have their own toothbrush :)

// Perfectly valid to use 'message" variable again, because scope limits each to its own block
function stop() {
    const message = 'bye';
}

start();
