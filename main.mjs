import { wordCounts } from "./modules/wordCounts.mjs";
import { subArrays } from "./modules/linesArray.mjs";
import { linesArray } from "./modules/linesArray.mjs";

document.addEventListener('DOMContentLoaded', () => {
  //HTML has loaded
  console.log('Main.js and the DOM are loaded');
});

console.table(wordCounts);
console.log(subArrays.length);
console.table(subArrays);
