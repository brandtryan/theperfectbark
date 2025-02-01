import { words, wordCounts, readTimes } from "./modules/wordCounts.mjs";

document.addEventListener('DOMContentLoaded', () => {
  //HTML has loaded
  console.log('Main.js and the DOM are loaded');
});

console.table(words);

console.table(wordCounts);


//
//get lines
// document.querySelector('line-element').setAttribute('wordCount', wordCounts[0]);


