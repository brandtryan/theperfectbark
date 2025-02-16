import { getLineWordCounts } from './getLineWordCounts.mjs';
//Create function to calculate reading time (* 1.5 for taking in effects)
export function getLineReadingTimes(line) {
	const wordCount = getLineWordCounts(line);
	const time = (wordCount / 225) * 60;
	return (Math.round(time * 100) / 100) * 1000;
}
