// keywords: function, declaration, expression, anonymous, object, named, semicolon, reference

// There are 2 ways to call functions in JavaScript:
//      Function Declaration OR
//      Function Expression

// Function Delcaration (only BODY of function gets a semicolon)
function walk() {
    console.log('walk');
}

// Since functions (see below) are OBJECTS, assinging a function to a VARIABLE is like assigning it to an OBJECT

// ANONYMOUS Function Expression:
// There is no "name" in front of function keyword
// ends in semicolon
let run = function () {
    console.log('run');
};

// So we can call function by referencing VARIABLE:
run();

// We can set another var to reference run - and now both will REFERENCE SAME ANONYMOUS FUNCTION (1 object in memory)
let move = run;
move();

// NAMED Function Expression
let runNamed = function run() {
    console.log('run');
};
