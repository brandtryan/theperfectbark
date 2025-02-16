import { getLineReadingTimes } from './getLineReadingTimes.mjs';

const allElements = document.querySelectorAll('*');
const allElementsArray = Array.from(allElements);
export const [elements] = [allElementsArray];

const allPagesCollection = document.getElementsByTagName('div');
const allPagesArray = Array.from(allPagesCollection);
export const [pages] = [allPagesArray];

const allLinesCollection = document.getElementsByTagName('p');
const allLinesArray = Array.from(allLinesCollection);
export const [lines] = [allLinesArray];

const allWordsCollection = document.getElementsByTagName('span');
const allWordsArray = Array.from(allWordsCollection);
export const [words] = [allWordsArray];

const linesArray = Array.from(document.getElementsByTagName('p'));

linesArray.forEach((line) => {
	line.readingTime = getLineReadingTimes(line);
});
