// keywords: functions, function, object, objects, value types, primitive types, reference types, primitive, reference, type

// Functions are objects!!

// There are two kinds of types in Javascript
// "Value Types/Primitives" and "Reference Types"
// Value Types:
//      Number
//      String
//      Boolean
//      Symbol
//      undefined
//      null

// Reference Types:
//      Object
//      Function (object)
//      Array (object)

// // using primitives, variables are completely independent of each other and values
// // are stored in variable
// let x = 10;
// let y = x;

// x = 20;
// // output x is 20 and y is 10

// using object they are not
let x = { value: 10 };
let y = x;

x.value = 20;
// output x is 20 and y is 20!
// takeaway - objects are NOT stored in variable, but in a memory address
// so when we copy x into y above, it's the address/reference that is copied-
// which is to say both x and y are point to SAME ADDRESS IN MEMORY, so when
// changes are made to one, that change is immediately apparent in the other

// PRIMITIVES are copied by their VALUE
// OBJECTS are copied by their REFERENCE
let number = 10;

function increase(number) {
    number++;           // this number variable is independent of the one above
}

increase(number);
// What do you think will appear in console?
console.log(number); // -> 10

// the number in the function is local to the function and COMPLETELY INDEPENDENT 
// so when console.log is called OUTSIDE the function, it refers to the first number
// variable

// Try again with variable being an object with a value property
let obj = { value: 10 };

function increaseValue(obj) {
    obj.value++;        // this obj variable is NOT independent of the one above
}

increaseValue(obj);
// What do you think will appear in console?
console.log(obj); // -> {value: 11}
// Now we are NOT dealing with two independent variables, but 2 variables POINTING
// to the SAME OBJECT

