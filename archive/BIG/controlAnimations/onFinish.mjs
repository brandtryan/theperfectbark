export function onFinish() {
	animations.forEach(
		(animation) =>
			(animation.onfinish = function () {
				isPlaying = false;
				console.log('finished');
			})
	);
}
