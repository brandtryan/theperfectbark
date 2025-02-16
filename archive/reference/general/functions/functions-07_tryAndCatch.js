// keywords: error handling try catch defensive programming throw exception
// Can't assume the value we get for setter is valid string!

// TYPICALLY WE SHOULD ADD ERROR-HANDLING AT THE BEGINNING OF A METHOD
// This is called "Defensive Programming"

const person = {
    firstName: 'Brandt',
    lastName: 'Ryan',
    set fullName(value) {
        // const e = new Error(); // An Error object
        // throw e; // The moment it gets THROWN it is now an EXCEPTION

        if (typeof value !== 'string')
            // return previous name above
            // "Error" is a constructor function
            // Somewhere we need to CATCH THE EXCEPTION
            // Can pass a value
            throw new Error('Value is not a string.'); // returns Error: Value is not a string.

        // After error is thrown we stop and jump out of this method and move to catch block below.

        const parts = value.split(' ');
        // Have to ensure BOTH parts of name are given
        if (parts.length !== 2) throw new Error('Enter a first and last name.');

        this.firstName = parts[0];
        this.lastName = parts[1];
    },
};

// person.fullName = true; // returns value.split is not a functions (because booleans aren't functions)
// person.fullName = null; // returns value.split is not a functions (because null isn't a function)
// THIS IS WHERE WE CATCH EXCEPTION
// SO WE NEED TO WRAP IT IN A 'TRY' BLOCK
try {
    // one of these statements needs to throw exception
    // person.fullName = null;
    person.fullName = ''; // no ALERT. firstName is returned as empty string, lastName is undefined
    // after ensuring parts.length !==2 above, returns "Error: Enter a first and last name"
} catch (e) {
    // e is Error thrown above
    alert(e); // not recommended (popup) "Error: Value is not a string"
}

console.log(person);
