export function setWordAnimaStartTime(animation, linedurationX, wordarrayXlength, wordnumber) {
	const totalMilliseconds = ((linedurationX * 1.5) / wordarrayXlength) * wordnumber;
	animation.startTime = performance.now() + totalMilliseconds;
}
