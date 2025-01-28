import { linesArray } from ".//linesArray.mjs";

const lines = [...linesArray];

export const wordCounts = [];

for (const line of lines) {
  const words = line.split(' ')
  wordCounts.push(words.length)
}

function lineReadingTimes(line) {
  const wordCount = getLineWordCounts(line);
  const time = (wordCount / 225) * 60;
  return (Math.round(time * 100) / 100) * 1000;
}
