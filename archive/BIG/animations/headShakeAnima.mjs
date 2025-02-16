export const headShakeFrames = [
	{ transform: 'translateX(0px)' },
	{ transform: 'translateX(1000px)' },
	{ transform: 'translateX(-1000px)' },
];

export const headShakeTiming = {
	id: 'animaWidth',
	delay: 1000,
	direction: 'alternate',
	duration: 125,
	endDelay: 0,
	fill: 'none',
	iterationStart: 0.0,
	iterations: 2,
	composite: 'add',
	iterationComposite: 'replace',
};
