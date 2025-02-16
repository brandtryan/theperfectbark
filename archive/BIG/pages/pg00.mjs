import { pg00Elements } from '../dom/elements.mjs';
import { animations_player } from '../controlAnimations/animations_player.mjs';
import { lineDurations } from '../controlAnimations/lineDurations.mjs';
import { crunchAnima } from '../animations/crunchAnima.mjs';

export const pg00Words = pg00Elements
	.filter((element) => element.id.includes('wrd'))
	.filter((element) => element.index % 2 === 0);

// Create pg00 WORD animations and store the Animation objects in an array
let word_animations = [crunchAnima];

export let all_animations = Object.create(null);

const animationArrays = {
	word: [word_animations],
	// line: [line_animations],
	// page: [page_animations],
};

Object.keys(animationArrays).forEach(function (name) {
	all_animations[name] = pg00Words.map(function (element) {
		return element.animate(animationArrays[name]);
	});
});

word_animations = all_animations.word;
// line_animations = all_animations.line;
// page_animations = all_animations.page;

export const word_player = animations_player(word_animations);
// const line_player = animations_player(line_animations);
// const page_player = animations_player(page_animations);

// all_animations.addEventListener('finish', function () {
// 	word_player.stop();
// });

// Set duration of each word animation to be reading time divided by number of word animations

export const pg00Duration =
	lineDurations.pg00ln00Duration +
	lineDurations.pg00ln01Duration +
	lineDurations.pg00ln02Duration +
	lineDurations.pg00ln03Duration +
	lineDurations.pg00ln04Duration +
	lineDurations.pg00ln05Duration +
	lineDurations.pg00ln06Duration +
	lineDurations.pg00ln07Duration;

word_animations.forEach((item) => item.effect.updateTiming({ duration: pg00Duration / pg00Words.length }));

// Set startTime of each word animation so each starts after the previous animation, fitting to reading time
// word_animations[0].startTime = 1000.0;

for (let i = 0; i < word_animations.length; i++) {
	word_animations[i].startTime = word_animations[i - 1].startTime + pg00Duration / pg00Words.length;
}

// console.log('Line0_0 overall = ' + overall_duration(line0WordAnimations[0]));
// console.log('Line0_1 overall = ' + overall_duration(line0WordAnimations[1]));

// // Create LINE 1 WORD animations and store the Animation objects in an array
// const line1WordAnimations = [ln1w6.animate(breathAnima), ln1w14.animate(breathAnima)];

// // Set duration of each word animation to be reading time divided by number of word animations
// line1WordAnimations.forEach((item) => item.effect.updateTiming({ duration: line1Duration / 4 }));
// // Set startTime of each word animation so each starts after the previous animation, fitting to reading time
// line1WordAnimations[0].startTime = line0Duration + 1000.0;
// line1WordAnimations[1].startTime = line1WordAnimations[0].startTime + line0Duration / line1WordAnimations.length;

// console.log('Line1_0 overall = ' + overall_duration(line1WordAnimations[0]));
// console.log('Line1_1 overall = ' + overall_duration(line1WordAnimations[1]));

// // MISC FUNCTIONS

// const animation = sampleElements.map(Element => Element.animate(keyframes, timing));

// const player = animationsPlayer(s00p00ln00Animas);
// player.play();

// const linesReadingTimesArray = [];
// const lineAnimations = [];

// const lineWordCounts = s00Lines.map((line) => line.childElementCount);

// for (let count of lineWordCounts) {
// 	let result = lineReadingTime(count);
// 	linesReadingTimesArray.push(result);
// }

// for (let line of s00Lines) {
// 	line.animate(breathAnima);
// 	lineAnimations.push(line.getAnimations());
// }

// console.log(nowTimeLine.currentTime);

// Create PAGE animations and store the animation objects in an array
// const pageAnimations = [s00.animate(headShakeFrames, headShakeTiming)];
// Set PAGE animations startTime
// ?????????????????????????????

// Create PARAGRAPH animations and store the Animation objects in an array
// const paragraphAnimations = [s00p00.animate(barkFrames, barkTiming)];
// Set PARAGRAPH animations startTime
// ?????????????????????????????

// Create LINE animations and store the Animation objects in an array
// const line0Animations = [s00p00ln00.animate(breathAnima)];
// Set LINE animations startTime to start directly after reading time for line

// for (let lineAnimation of lineAnimations) {
// 	for (let i = 0; i < lineAnimation.length; i++) {
// 		setLineAnimaStartTime(lineAnimation, linesReadingTimesArray[i], 2000.0);
// 	}
// }
// setLineAnimaStartTime(line0Animations[0], linesReadingTimesArray[0], 2000.0);

// // Create WORD animations and store the Animation objects in an array
// const line0WordAnimations = [
// 	s00p00ln00w03.animate(breathAnima),
// 	s00p00ln00w08.animate(breathAnima),
// ];
// // Set duration of each word animation to be reading time divided by number of word animations
// line0WordAnimations.forEach((item) => item.effect.updateTiming({ duration: lineDuration0 / 2 }));
// // Set startTime of each word animation so each starts after the previous animation, fitting to reading time
// setWordAnimaStartTime(line0WordAnimations[0], lineDuration0, s00p00ln00.length, 10);
// setWordAnimaStartTime(line0WordAnimations[1], lineDuration0, s00p00ln00.length, 18);

// console.log('Anima0 duration = ' + line0WordAnimations[0].effect.getTiming().duration);
// console.log('Anima1 duration = ' + line0WordAnimations[1].effect.getTiming().duration);
// console.log('Anima0 startTime = ' + line0WordAnimations[0].startTime);
// console.log('Anima1 startTime = ' + line0WordAnimations[1].startTime);
// console.log('Line0_0 overall = ' + overall_duration(line0WordAnimations[0]));
// console.log('Line0_1 overall = ' + overall_duration(line0WordAnimations[1]));
// console.log('Line Reading Time = ' + lineDuration0);

// Start animations and store them
