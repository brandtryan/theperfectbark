const breathFrames = [
	{ fontVariationSettings: `"wght" 295, "wdth" 100, "ital" 0, "cont" 0` },
	{ fontVariationSettings: `"wght" 900, "wdth" 140, "ital" 12, "cont" 100` },
	{ fontVariationSettings: `"wght" 295, "wdth" 100, "ital" 0, "cont" 0` },
];

const breathTiming = {
	delay: 0,
	direction: 'normal',
	duration: 3600, // lineDuration0,
	endDelay: 0,
	fill: 'none',
	easing: 'cubic-bezier(0.45, 0, 0.55, 1)',
	iterationStart: 0.0,
	iterations: '1',
	composite: 'replace',
	iterationComposite: 'replace',
};

export default { breathFrames, breathTiming };
