export const twirlingLineFrames = [{ transform: ['translateX(0) rotate(0deg)', 'translateX(80vw) rotate(2700deg)'] }];

export const twirlingLineTiming = {
	direction: 'alternate',
	iterations: Infinity,
	duration: 3500, // DURATION,
	easing: 'ease-in-out',
	fill: 'both',
	delay: (3500 / 4) * i, // (DURATION / 4) * i
	endDelay: 3500 - (3500 / 4) * i, // DURATION - (DURATION / 4) * i
};
