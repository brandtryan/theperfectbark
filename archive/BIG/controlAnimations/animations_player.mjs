// Controller for a group of animations

export function animations_player(animations) {
	// Function to call a method on all animations where callback could be any one of the call_on_all below
	const call_on_all = function (callback) {
		return function () {
			animations.forEach(function (element) {
				callback(element);
			});
		};
	};

	function set_timing_option(key) {
		return function (value) {
			call_on_all(function (animation) {
				const timing = animation.effect.getTiming();
				timing[key] = value;
				animation.effect.updateTiming(timing);
			})();
		};
	}

	return Object.freeze({
		play: call_on_all((animation) => animation.play()),
		pause: call_on_all((animation) => animation.pause()),
		// current_time: Set the current time of the animation (Seek)
		current_time: (time = 0) =>
			call_on_all(function (animation) {
				animation.currentTime = time;
			})(),
		// 'stop' Reset the animation to the beginning and pause
		stop: call_on_all(function (animation) {
			animation.pause();
			animation.currentTime = 0;
		}),
		delay: set_timing_option('delay'),
		direction: set_timing_option('direction'),
		duration: set_timing_option('duration'),
		easing: set_timing_option('easing'),
		endDelay: set_timing_option('endDelay'),
		fill: set_timing_option('fill'),
		iterationStart: set_timing_option('iterationStart'),
		iterations: set_timing_option('iterations'),
		composite: set_timing_option('composite'),
		iterationComposite: set_timing_option('iterationComposite'),
		pseudoElement: set_timing_option('pseudoElement'),
	});
}
