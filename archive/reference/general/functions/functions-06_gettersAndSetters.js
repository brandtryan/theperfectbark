// keywords: getter setter

// const person = {
//     firstName: 'Brandt',
//     lastName: 'Ryan',

//     // Now when creating METHODS FOR OBJECTS we can drop the 'function' keyword
//     fullName() {
//         return `${person.firstName} ${person.lastName}`;
//     },
// };

// Would be nice to be able to set fullName like:
// person.fullName = 'John Smith';

// Would also be nice if we could treat fullName like a property, and drop the parenthesis
// console.log(person.fullName());

// enter Getters/Setters!

// getters => access properties
// setters => change (mutate) properties

const person = {
    firstName: 'Brandt',
    lastName: 'Ryan',

    // simple add 'get' in front of function
    get fullName() {
        return `${person.firstName} ${person.lastName}`;
    },
    // with SAME FUNCTION NAME create new function prepended with 'set' and use 'value' as parameter.
    // This 'value' is equal to the right side of the new property assignment.
    // so we have to take new assignment and split with ' ' delimiter and then change
    // firstName and lastName properties of object with the respective indexes in the array created by
    // the split function.

    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    },
};

person.fullName = 'John Smith';

console.log(person);
