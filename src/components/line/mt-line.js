export default class MovingTextLine extends HTMLElement {
	constructor() {
		super();
		// let clone = template.content.cloneNode(true);
		// this.append(clone);
		this.append(this.slot);

		// const lineWords = Array.from(this.children);
		// const lineAnimations = [];

		// for (let word in lineWords) {
		// 	lineAnimations.push(word.animation);
		// }

		// if (this.hasAttribute('preview')) {
		// 	this.style.cursor = 'pointer';
		// 	this.addEventListener('click', this.handlePreviewClick);
		// 	const label = 'connectedCallback';
		// 	console.groupCollapsed(label);
		// 	console.log(`${this.id}: Line Previews ready...`);
		// 	console.log(`${this.id}: connectedCallback() completed`);
		// 	console.groupEnd(label);
		// }

		// this.handlePreviewClick = () => {
		// 	const previewStartTime = document.timeline.currentTime;

		// 	lineAnimations.forEach(animation => {
		// 		animation.cancel();
		// 		const element = animation.effect.target;
		// 		const start = parseFloat(element.getAttribute('start'));
		// 		const delay = previewStartTime + start;
		// 		animation.play();
		// 		animation.startTime = delay;
		// 	});
		// };
	}

	// connectedCallback() {
	// const words = document.querySelectorAll('mt-word');
	// const wordsByLine = Object.groupBy(words, w => w.closest('mt-line').id);
	// const lineAnimations = {};
	// for (const lineId in wordsByLine) {
	// 	const wordElements = wordsByLine[lineId];
	// 	const animations = [];
	// 	wordElements.forEach(word => {
	// 		const animation = word.getAnimations();
	// 		animations.push(animation);
	// 	});
	// 	lineAnimations[lineId] = animations;
	// }
	// }

	// countWords(node) {
	// 	const text = node.innerText || node.textContent;
	// 	return text
	// 		.trim()
	// 		.split(/\s+/g)
	// 		.filter(a => a.trim().length > 0).length;
	// }

	// disconnectedCallback() {
	// 	console.log('MovingText element disconnected from DOM');
	// 	if (this.hasAttribute('preview')) {
	// 		this.removeEventListener('click', this.handlePreviewClick);
	// 		console.log(`disconnectedCallback() completed`);
	// 	}
	// }

	// const label = 'connectedCallback';
	// if (this.hasAttribute('preview') && this.classList.contains('line')) {
	// 	this.style.cursor = 'pointer';
	// 	this.addEventListener('click', this.handlePreviewClick);
	// 	console.groupCollapsed(label);
	// 	console.log(`${this.id}: Line Previews ready...`);
	// 	console.log(`${this.id}: connectedCallback() completed`);
	// 	console.groupEnd(label);
	// }

	// handlePreviewClick = () => {
	// 	const lineAnimations = Array.from(this.children)
	// 		.flatMap(child => child.getAnimations())
	// 		.filter(Boolean);

	// 	const previewStartTime = document.timeline.currentTime;

	// 	lineAnimations.forEach(animation => {
	// 		animation.cancel();
	// 		const element = animation.effect.target;
	// 		const startTimeAttr = element.getAttribute('start');
	// 		const delay = previewStartTime + parseFloat(startTimeAttr);
	// 		animation.play();
	// 		animation.startTime = delay;
	// 	});
	// };
}

if (!customElements.get('mt-line')) {
	customElements.define('mt-line', MovingTextLine);
}
