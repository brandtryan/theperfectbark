const template = document.createElement('template');
template.innerHTML = `
	<style>
		@import url('../../style.css');
	</style>
	<slot></slot>
`;

export default class MovingTextPage extends HTMLElement {
	constructor() {
		super();
		let clone = template.content.cloneNode(true);
		this.appendChild(clone);
	}
	connectedCallback() {}

	// groupPageAnimations() {
	// 	const words = document.querySelectorAll('mt-word');
	// 	const wordsByPage = Object.groupBy(words, w => w.closest('mt-page').id);

	// 	const pageAnimations = {};
	// 	for (const pageId in wordsByPage) {
	// 		const wordElements = wordsByPage[pageId];
	// 		const animations = [];

	// 		wordElements.forEach(word => {
	// 			const animation = word.getAnimations();
	// 			animations.push(animation);
	// 		});
	// 		pageAnimations[pageId] = animations;
	// 	}
	// }
}

if (!customElements.get('mt-page')) {
	customElements.define('mt-page', MovingTextPage);
}
