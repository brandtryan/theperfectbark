// keywords: hoisting, function, declaration, expression, interview question

// Key difference between function decaration and function expression:

// function declaration can be called BEFORE it's declaration

/* The reason is because before executing code JavaScript MOVES ALL FUNCTION DECLARATIONS TO THE TOP */

/* ...which is called HOISTING */

// Function Declaration
walk(); // <-- function executed BEFORE it's been declared

function walk() {
    console.log('walk');
}

// Function Expression
// Just like calling a variable before it's defined ...
// console.log(x);
// let x = 1;
// ... produces a REFERENCE error - 'ReferenceError: Cannot access 'x' before initialization'

// so does calling a function EXPRESSION before it's defined
run(); // 'ReferenceError: Cannot access 'run' before initialization'

let run = function () {
    console.log('run');
};
