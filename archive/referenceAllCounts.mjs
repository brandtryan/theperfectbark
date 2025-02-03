import { lineReadingTimes, lineWordCounts, lineWords, paragraphLines, numberOfParagraghLines } from "./wordCounts.mjs";

export function allCounts() {
  console.table(numberOfParagraghLines);
  console.table(lineWordCounts)
}

allCounts();
