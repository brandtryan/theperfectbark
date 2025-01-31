import { linesArray } from './linesArray.mjs'

const lines = [...linesArray];

export const wordCounts = [];
export const readTimes = [];

for (const line of lines) {
  const words = line.split(' ')
  wordCounts.push(words.length)
}

for (let i = 0; i < wordCounts.length; i++) {
  const time = wordCounts[i] / 225 * 60;
  readTimes.push((Math.round(time * 100) / 100) * 1000);
}

console.table(readTimes);

// function lineReadingTimes(line) {
//   const wordCount = getLineWordCounts(line);
//   const time = (wordCount / 225) * 60;
//   readTimes((Math.round(time * 100) / 100) * 1000);
// }
