// Create array of words per line from strings
const wordArray0 = `My teachers look at me funny when I make weird noises,`.split(/(\s+)/);
const wordArray1 = `but my friends, they usually just laugh. It's funny to them,`.split(/(\s+)/);
const wordArray2 = `and they are pretty cool about it – they don't make fun of`.split(/(\s+)/);
const wordArray3 = `me really, but only get a kick out of it – like when we are in`.split(/(\s+)/);
const wordArray4 = `the middle of a test or something and then out of nowhere`.split(/(\s+)/);
const wordArray5 = `I let out a bark – I mean a loud bark – where everyone turns`.split(/(\s+)/);
const wordArray6 = `around to me and smiles, and then someone starts laughing`.split(/(\s+)/);
const wordArray7 = `and then everyone else gets going. To tell you the truth it`.split(/(\s+)/);
const wordArray8 = `doesn't bother me at all and I laugh right along with them`.split(/(\s+)/);
const wordArray9 = `most of the time.`.split(/(\s+)/);

//Set duration of line animations based on average reading time
const line0Duration = lineReadingTime(wordArray0);
const line1Duration = lineReadingTime(wordArray1);
const line2Duration = lineReadingTime(wordArray2);
const line3Duration = lineReadingTime(wordArray3);
const line4Duration = lineReadingTime(wordArray4);
const line5Duration = lineReadingTime(wordArray5);
const line6Duration = lineReadingTime(wordArray6);
const line7Duration = lineReadingTime(wordArray7);
const line8Duration = lineReadingTime(wordArray8);
const line9Duration = lineReadingTime(wordArray9);

// ANIMATIONS
const vanishFrames = [{ opacity: 1 }, { opacity: 0, transform: `translate(0, -5vh)` }];

const vanishTiming = {
	id: 'vanish',
	delay: 5000,
	direction: 'normal',
	duration: 1000,
	endDelay: 0,
	fill: 'forwards',
	easing: 'cubic-bezier(0.45, 0, 0.55, 1)',
	iterationStart: 0.0,
	iterations: 1,
	composite: 'replace',
	iterationComposite: 'replace',
};

const breathFrames = [
	{ fontVariationSettings: `"wght" 295, "wdth" 100, "ital" 0, "cont" 0` },
	{ fontVariationSettings: `"wght" 900, "wdth" 140, "ital" 12, "cont" 100` },
	{ fontVariationSettings: `"wght" 295, "wdth" 100, "ital" 0, "cont" 0` },
];

const breathTiming = {
	delay: 0,
	direction: 'normal',
	duration: line0Duration,
	endDelay: 0,
	fill: 'none',
	easing: 'cubic-bezier(0.45, 0, 0.55, 1)',
	iterationStart: 0.0,
	iterations: '1',
	composite: 'replace',
	iterationComposite: 'replace',
};

// Create LINE 0 WORD animations and store the Animation objects in an array
const line0WordAnimations = [ln0w6.animate(breathFrames, breathTiming), ln0w14.animate(breathFrames, breathTiming)];

// Set duration of each word animation to be reading time divided by number of word animations
line0WordAnimations.forEach((item) => item.effect.updateTiming({ duration: line0Duration / 4 }));
// Set startTime of each word animation so each starts after the previous animation, fitting to reading time
line0WordAnimations[0].startTime = 1000.0;
line0WordAnimations[1].startTime = line0WordAnimations[0].startTime + line0Duration / line0WordAnimations.length;

console.log('Line0_0 overall = ' + overall_duration(line0WordAnimations[0]));
console.log('Line0_1 overall = ' + overall_duration(line0WordAnimations[1]));

// Create LINE 1 WORD animations and store the Animation objects in an array
const line1WordAnimations = [ln1w6.animate(breathFrames, breathTiming), ln1w14.animate(breathFrames, breathTiming)];

// Set duration of each word animation to be reading time divided by number of word animations
line1WordAnimations.forEach((item) => item.effect.updateTiming({ duration: line1Duration / 4 }));
// Set startTime of each word animation so each starts after the previous animation, fitting to reading time
line1WordAnimations[0].startTime = line0Duration + 1000.0;
line1WordAnimations[1].startTime = line1WordAnimations[0].startTime + line0Duration / line1WordAnimations.length;

console.log('Line1_0 overall = ' + overall_duration(line1WordAnimations[0]));
console.log('Line1_1 overall = ' + overall_duration(line1WordAnimations[1]));

// MISC FUNCTIONS

// calculates animation complete duration
function overall_duration(animation) {
	const timing = animation.effect.getTiming();
	return timing.delay + timing.iterations * timing.duration + timing.endDelay;
}

//Create function to calculate reading time
function lineReadingTime(wordarray) {
	const words = wordarray.length / 2;
	const time = (words / 225) * 60;
	return (Math.round(time * 100) / 100) * 1000;
}

// Create random number generator
function randomNum(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
}

// const animation = sampleElements.map(Element => Element.animate(keyframes, timing));
