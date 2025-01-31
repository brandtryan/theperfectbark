import { allLinesArray } from "./paragraphsArray.mjs";
const linesArray = [...allLinesArray];

export const wordCounts = [];
export const readTimes = [];
export const words = [];

for (const line of linesArray) {
  words.push(line.split(' '));
  wordCounts.push(words.length)
}

for (let i = 0; i < wordCounts.length; i++) {
  const time = wordCounts[i] / 225 * 60;
  readTimes.push((Math.round(time * 100) / 100) * 1000);
}

