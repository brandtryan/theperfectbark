import { wordCounts, readTimes } from "./modules/wordCounts.mjs";

document.addEventListener('DOMContentLoaded', () => {
  //HTML has loaded
  console.log('Main.js and the DOM are loaded');
});

console.table(wordCounts);


//
//get lines
const s00Lines = document.querySelectorAll('line-element');
console.log(s00Lines);


