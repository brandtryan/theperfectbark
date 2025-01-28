// keywords: array, concat, slice

// Combining and Slicing Arrays

const first = [1, 2, 3];
const second = [4, 5, 6];

// ".concat" method RETURNS NEW ARRAY
const combined = first.concat(second);
console.log(combined); // returns [1,2,3,4,5,6] (NEW ARRAY)
console.log(first); // returns [1,2,3]
console.log(second); // returns [4,5,6]

// ".slice" returns a NEW ARRAY of sliced values
const slice = combined.slice(2, 4);
console.log(slice); // returns [3, 4]
console.log(combined); // returns [1, 2, 3, 4, 5, 6]

// ".slice" removing second argument slices from arg1 to end
const sliceToEnd = combined.slice(2);
console.log(sliceToEnd); // returns [3, 4, 5, 6]

// ".slice" with NO arguments returns all elements
const sliceAll = combined.slice();
console.log(sliceAll); // returns [1, 2, 3, 4, 5, 6]
