//calculates start_time for LINE ANIMATIONS
export function setLineAnimaStartTime(animation, linedurationX, animationDurations) {
	const totalMilliseconds = animationDurations + linedurationX * 1.2;
	animation.startTime = performance.now() + totalMilliseconds;
}
