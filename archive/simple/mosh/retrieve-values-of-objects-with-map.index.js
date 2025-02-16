
const numbers = [1, -1, 2, 3];

// Chaining filter and map
const items = numbers
	.filter(n => n >= 0)
	.map(n => ( { value: n }));

console.log(items);
