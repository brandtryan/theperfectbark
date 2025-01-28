// keywords: template literal, strings


// in TEMPLATE LITERALS we can insert any EXPRESSION
const firstName = 'John';

const another = `Hi ${firstName}, you still owe me ${2 + 5} bucks.`;
console.log(another);
// -> 'Hi John, you still owe me 7 bucks.'
