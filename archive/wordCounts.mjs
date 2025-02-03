import { allParagraphsArray } from "./allParagraphsArray.mjs";

const paragraphsArray = [...allParagraphsArray];

// export lines per paragraph
export const paragraphLines = [];
// export # of lines per paragraph
export const numberOfParagraghLines = [];

for (const paragraph of paragraphsArray) {
  numberOfParagraghLines.push(paragraph.length);
  paragraph.map((para) => paragraphLines.push(para))
}
console.log(`p00Lines: ${numberOfParagraghLines[0]}`);     //# of lines in p00
console.log(`p00Line: ${paragraphLines[0]}`);     // p00l00 actual line


// export letters per line count
export const lettersPerLineCounts = [];

for (const lettersPerLine of paragraphLines) {
  lettersPerLineCounts.push(lettersPerLine.length);
}
console.log(`p00l00 letter count: ${lettersPerLineCounts[0]}`);  // p00l00 letterCount


// split lines into words and get word count
export const lineWords = [];
export const lineWordCounts = [];

for (const line of paragraphLines) {
  lineWords.push(line.split(' '));
  lineWordCounts.push(line.split(' ').length);
}
console.log(`p00l00 words: ${lineWords[0]}`);                // p00l00 words
console.log(`p00l00 word count: ${lineWordCounts[0]}`);         // p00l00 wordCount

// line reading times
export const lineReadingTimes = [];

for (let i = 0; i < lineWords.length; i++) {
  const time = lineWordCounts[i] / 225 * 60;
  lineReadingTimes.push((Math.round(time * 100) / 100) * 1000);
}
console.log(`p00l00 read time: ${lineReadingTimes[0]}`);                // p00l00 readTime
