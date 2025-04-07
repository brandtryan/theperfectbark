// const template = document.createElement('template');
// template.innerHTML = `
// 	<style>
// 		@import url('../../style.css');
// 	</style>
// `;

export default class MovingTextWord extends HTMLElement {
	constructor() {
		super();
		// let clone = template.content.cloneNode(true);
		// this.appendChild(clone);

		if (document.querySelector('mt-word') !== null) {
			this.textContent = this.getAttribute('txt');
		}
		this.animation = null;
		this.keyframes = [
			{
				fontVariationSettings: `"wght" ${parseInt(this.getAttribute('from-axis-1'))}, "wdth" ${parseInt(
					this.getAttribute('from-axis-2')
				)}, "ital" ${parseInt(this.getAttribute('from-axis-3'))}, "cont" ${parseInt(this.getAttribute('from-axis-4'))}`,
			},
			{
				fontVariationSettings: `"wght" ${parseInt(this.getAttribute('to-axis-1'))}, "wdth" ${parseInt(
					this.getAttribute('to-axis-2')
				)}, "ital" ${parseInt(this.getAttribute('to-axis-3'))}, "cont" ${parseInt(this.getAttribute('to-axis-4'))}`,
			},
		];

		this.timing = {
			duration: parseInt(this.getAttribute('dur')),
			delay: parseInt(this.getAttribute('del')),
			endDelay: parseInt(this.getAttribute('end-del')),
			easing: this.getAttribute('ease'),
			fill: this.getAttribute('fill'),
			iterations: parseInt(this.getAttribute('iters')),
			iterationStart: parseFloat(this.getAttribute('iter-start')),
			direction: this.getAttribute('dir'),
		};
		this.start = parseFloat(this.getAttribute('start'));
		this.rate = parseInt(this.getAttribute('rate'));
		this.animation = this.animate(this.keyframes, this.timing);
		this.animation.play();
		this.animation.startTime = document.timeline.currentTime + this.start;
		this.animation.playbackRate = this.rate;
		this.animation.pause();
	}

	static get observedAttributes() {
		return [
			'start',
			'rate',
			'del',
			'dur',
			'end-del',
			'iter-start',
			'iters',
			'dir',
			'ease',
			'fill',
			'comp',
			'iter-comp',
			'pseudo',
			'from-axis-1',
			'to-axis-1',
			'from-axis-2',
			'to-axis-2',
			'from-axis-3',
			'to-axis-3',
			'from-axis-4',
			'to-Axis-4',
			'txt',
			'preview',
		];
	}

	// //#region Property/Attribute Reflection
	// get start() {
	// 	return parseFloat(this.getAttribute('start'));
	// }
	// set start(value) {
	// 	this.setAttribute('start', value);
	// }
	// get rate() {
	// 	return parseInt(this.getAttribute('rate'));
	// }
	// set rate(value) {
	// 	this.setAttribute('rate', value);
	// }
	// get del() {
	// 	return parseInt(this.getAttribute('del'));
	// }
	// set del(value) {
	// 	this.setAttribute('del', value);
	// }
	// get dur() {
	// 	return parseInt(this.getAttribute('dur'));
	// }
	// set dur(value) {
	// 	this.setAttribute('dur', value);
	// }
	// get endDel() {
	// 	return parseInt(this.getAttribute('end-del'));
	// }
	// set endDel(value) {
	// 	this.setAttribute('end-del', value);
	// }
	// get iterStart() {
	// 	return parseFloat(this.getAttribute('iter-start'));
	// }
	// set iterStart(value) {
	// 	this.setAttribute('iter-start', value);
	// }
	// get iters() {
	// 	return parseInt(this.getAttribute('iters'));
	// }
	// set iters(value) {
	// 	this.setAttribute('iters', value);
	// }
	// get dir() {
	// 	return this.getAttribute('dir');
	// }
	// set dir(value) {
	// 	this.setAttribute('dir', value);
	// }
	// get ease() {
	// 	return this.getAttribute('ease');
	// }
	// set ease(value) {
	// 	this.setAttribute('ease', value);
	// }
	// get fill() {
	// 	return this.getAttribute('fill');
	// }
	// set fill(value) {
	// 	this.setAttribute('fill', value);
	// }
	// get comp() {
	// 	return this.getAttribute('comp');
	// }
	// set comp(value) {
	// 	this.setAttribute('comp', value);
	// }
	// get iterComp() {
	// 	return this.getAttribute('iter-comp');
	// }
	// set iterComp(value) {
	// 	this.setAttribute('iter-comp', value);
	// }
	// get pseudo() {
	// 	return this.getAttribute('pseudo');
	// }
	// set pseudo(value) {
	// 	this.setAttribute('pseudo', value);
	// }
	// get fromAxis1() {
	// 	return parseFloat(this.getAttribute('from-axis-1'));
	// }
	// set fromAxis1(value) {
	// 	this.setAttribute('fromAxis1', value);
	// }
	// get toAxis1() {
	// 	return parseFloat(this.getAttribute('to-axis-1'));
	// }
	// set toAxis1(value) {
	// 	this.setAttribute('to-axis-1', value);
	// }
	// get fromAxis2() {
	// 	return parseFloat(this.getAttribute('from-axis-2'));
	// }
	// set fromAxis2(value) {
	// 	this.setAttribute('from-axis-2', value);
	// }
	// get toAxis2() {
	// 	return parseFloat(this.getAttribute('to-axis-2'));
	// }
	// set toAxis2(value) {
	// 	this.setAttribute('to-axis-2', value);
	// }
	// get fromAxis3() {
	// 	return parseFloat(this.getAttribute('from-axis-3'));
	// }
	// set fromAxis3(value) {
	// 	this.setAttribute('from-axis-3', value);
	// }
	// get toAxis3() {
	// 	return parseFloat(this.getAttribute('to-axis-3'));
	// }
	// set toAxis3(value) {
	// 	this.setAttribute('to-axis-3', value);
	// }
	// get fromAxis4() {
	// 	return parseFloat(this.getAttribute('from-axis-4'));
	// }
	// set fromAxis4(value) {
	// 	this.setAttribute('from-axis-4', value);
	// }
	// get toAxis4() {
	// 	return parseFloat(this.getAttribute('to-axis-4'));
	// }
	// set toAxis4(value) {
	// 	this.setAttribute('to-axis-4', value);
	// }
	// get txt() {
	// 	return this.getAttribute('txt');
	// }
	// set txt(value) {
	// 	this.setAttribute('txt', value);
	// }
	// get preview() {
	// 	return this.hasAttribute('preview');
	// }
	// set preview(value) {
	// 	const isPreview = Boolean(value);
	// 	if (isPreview) this.setAttribute('preview', '');
	// 	else this.removeAttribute('preview');
	// }
	// //#endregion

	// connectedCallback() {
	// 	this.innerHTML = `
	// 		<style>
	// 			mt-word:hover::after {
	// 				content: attr(id);
	// 				display: block;
	// 				position: absolute;
	// 				background-color: (0, 0, 0, 0.7);
	// 				color: cornflowerblue;
	// 				padding: 5px;
	// 				border-radius: 3px;
	// 				font-size: 1.2rem;
	// 				top: 10px;
	// 				right: 10px;
	// 				z-index: 10;
	// 			}
	// 		</style>
	// 	`;
}

if (!customElements.get('mt-word')) {
	customElements.define('mt-word', MovingTextWord);
}
