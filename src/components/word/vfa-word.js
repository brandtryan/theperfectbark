export default class VariableFontAnimatedWord extends HTMLElement {
	constructor() {
		super();

		this.textContent = this.getAttribute('txt');
		this.keyframes = [
			{
				fontVariationSettings: `"wght" ${parseInt(this.getAttribute('from-ax-1'))}, "wdth" ${parseInt(
					this.getAttribute('from-ax-2')
				)}, "ital" ${parseInt(this.getAttribute('from-ax-3'))}, "cont" ${parseInt(this.getAttribute('from-ax-4'))}`,
			},
			{
				fontVariationSettings: `"wght" ${parseInt(this.getAttribute('to-ax-1'))}, "wdth" ${parseInt(
					this.getAttribute('to-ax-2')
				)}, "ital" ${parseInt(this.getAttribute('to-ax-3'))}, "cont" ${parseInt(this.getAttribute('to-ax-4'))}`,
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
		this.animation = this.animate(this.keyframes, this.timing);
		this.animation.pause();
	}

	static get observedAttributes() {
		return [
			'start',
			'current',
			'rate',
			'async-rate',
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
			'from-ax-1',
			'to-ax-1',
			'from-ax-2',
			'to-ax-2',
			'from-ax-3',
			'to-ax-3',
			'from-ax-4',
			'to-ax-4',
			'txt',
			'preview',
			'reverse',
			'enable',
		];
	}

	//#region Property/Attribute Reflection
	get start() {
		return parseFloat(this.getAttribute('start'));
	}
	set start(value) {
		this.setAttribute('start', value);
	}
	get current() {
		return parseFloat(this.getAttribute('current'));
	}
	set current(value) {
		this.setAttribute('current', value);
	}
	get rate() {
		return parseInt(this.getAttribute('rate'));
	}
	set rate(value) {
		this.setAttribute('rate', value);
	}
	get asyncRate() {
		return parseInt(this.getAttribute('async-rate'));
	}
	set asyncRate(value) {
		this.setAttribute('async-rate', value);
	}
	get del() {
		return parseInt(this.getAttribute('del'));
	}
	set del(value) {
		this.setAttribute('del', value);
	}
	get dur() {
		return parseInt(this.getAttribute('dur'));
	}
	set dur(value) {
		this.setAttribute('dur', value);
	}
	get endDel() {
		return parseInt(this.getAttribute('end-del'));
	}
	set endDel(value) {
		this.setAttribute('end-del', value);
	}
	get iterStart() {
		return parseFloat(this.getAttribute('iter-start'));
	}
	set iterStart(value) {
		this.setAttribute('iter-start', value);
	}
	get iters() {
		return parseInt(this.getAttribute('iters'));
	}
	set iters(value) {
		this.setAttribute('iters', value);
	}
	get dir() {
		return this.getAttribute('dir');
	}
	set dir(value) {
		this.setAttribute('dir', value);
	}
	get ease() {
		return this.getAttribute('ease');
	}
	set ease(value) {
		this.setAttribute('ease', value);
	}
	get fill() {
		return this.getAttribute('fill');
	}
	set fill(value) {
		this.setAttribute('fill', value);
	}
	get comp() {
		return this.getAttribute('comp');
	}
	set comp(value) {
		this.setAttribute('comp', value);
	}
	get iterComp() {
		return this.getAttribute('iter-comp');
	}
	set iterComp(value) {
		this.setAttribute('iter-comp', value);
	}
	get pseudo() {
		return this.getAttribute('pseudo');
	}
	set pseudo(value) {
		this.setAttribute('pseudo', value);
	}
	get fromAx1() {
		return parseFloat(this.getAttribute('from-ax-1'));
	}
	set fromAx1(value) {
		this.setAttribute('from-ax-1', value);
	}
	get toAx1() {
		return parseFloat(this.getAttribute('to-ax-1'));
	}
	set toAx1(value) {
		this.setAttribute('to-ax-1', value);
	}
	get fromAx2() {
		return parseFloat(this.getAttribute('from-ax-2'));
	}
	set fromAx2(value) {
		this.setAttribute('from-ax-2', value);
	}
	get toAx2() {
		return parseFloat(this.getAttribute('to-ax-2'));
	}
	set toAx2(value) {
		this.setAttribute('to-ax-2', value);
	}
	get fromAx3() {
		return parseFloat(this.getAttribute('from-ax-3'));
	}
	set fromAx3(value) {
		this.setAttribute('from-ax-3', value);
	}
	get toAx3() {
		return parseFloat(this.getAttribute('to-ax-3'));
	}
	set toAx3(value) {
		this.setAttribute('to-ax-3', value);
	}
	get fromAx4() {
		return parseFloat(this.getAttribute('from-ax-4'));
	}
	set fromAx4(value) {
		this.setAttribute('from-ax-4', value);
	}
	get toAx4() {
		return parseFloat(this.getAttribute('to-ax-4'));
	}
	set toAx4(value) {
		this.setAttribute('to-ax-4', value);
	}
	get txt() {
		return this.getAttribute('txt');
	}
	set txt(value) {
		this.setAttribute('txt', value);
	}
	get preview() {
		return this.hasAttribute('preview');
	}
	set preview(value) {
		const isPreview = Boolean(value);
		if (isPreview) this.setAttribute('preview', '');
		else this.removeAttribute('preview');
	}
	get enable() {
		return this.hasAttribute('enable');
	}
	set enable(value) {
		const isEnabled = Boolean(value);
		if (isEnabled) this.setAttribute('enable', '');
		else this.removeAttribute('enable');
	}
	get reverse() {
		return this.hasAttribute('reverse');
	}
	set reverse(value) {
		const isReversed = Boolean(value);
		if (isReversed) this.setAttribute('reverse', '');
		else this.removeAttribute('reverse');
	}
	//#endregion

	// connectedCallback() {}
	// disconnectedCallback() {}
	// attributeChangedCallback() {}
}

if (!customElements.get('vfa-word')) {
	customElements.define('vfa-word', VariableFontAnimatedWord);
}
