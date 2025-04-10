// vfa-word.js
// Your provided code for the vfa-word component.
// Key aspects:
// - Reflects many attributes to properties.
// - Creates keyframes and timing options in connectedCallback.
// - Calls this.animate() and stores the result in this.animation.
// - Starts the animation paused.

export default class VariableFontAnimatedWord extends HTMLElement {
	static get observedAttributes() {
		// Ensure all attributes used in connectedCallback are observed if they
		// might change and require the animation to be recreated.
		// For simplicity now, assuming initial attributes are sufficient.
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

	constructor() {
		super();
		// Initialize animation property
		this.animation = null;
		// console.log('vfa-word constructor says hello');
	}

	//#region Property/Attribute Reflection (Your getters/setters here)
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
		if (Boolean(value)) this.setAttribute('preview', '');
		else this.removeAttribute('preview');
	}
	get enable() {
		return this.hasAttribute('enable');
	}
	set enable(value) {
		if (Boolean(value)) this.setAttribute('enable', '');
		else this.removeAttribute('enable');
	}
	get reverse() {
		return this.hasAttribute('reverse');
	}
	set reverse(value) {
		if (Boolean(value)) this.setAttribute('reverse', '');
		else this.removeAttribute('reverse');
	}
	//#endregion

	connectedCallback() {
		// Set text content when connected
		this.textContent = this.txt || ''; // Use empty string as fallback

		// --- Animation Setup ---
		// Use getter methods to access parsed attribute values for clarity
		// Provide default values (e.g., 0, 100, 'linear') if attributes are missing/invalid
		const keyframes = [
			{
				fontVariationSettings: `"wght" ${this.fromAx1 || 100}, "wdth" ${this.fromAx2 || 100}, "ital" ${
					this.fromAx3 || 0
				}, "cont" ${this.fromAx4 || 0}`,
			},
			{
				fontVariationSettings: `"wght" ${this.toAx1 || 900}, "wdth" ${this.toAx2 || 100}, "ital" ${
					this.toAx3 || 0
				}, "cont" ${this.toAx4 || 100}`,
			},
		];

		const timing = {
			// NOTE: The 'del' attribute value is used here for the delay property.
			// The manuscript component might override this by setting startTime directly
			// based on the 'start' attribute when a page becomes visible.
			duration: this.dur || 0, // Default to 0 if attribute missing/invalid
			delay: this.del || 0,
			endDelay: this.endDel || 0,
			easing: this.ease || 'linear',
			fill: this.fill || 'none',
			iterations: this.iters || 1,
			iterationStart: this.iterStart || 0.0,
			direction: this.dir || 'normal',
		};

		// Validate timing properties that must be non-negative
		timing.duration = Math.max(0, timing.duration);
		timing.delay = Math.max(0, timing.delay);
		timing.endDelay = Math.max(0, timing.endDelay);
		// Iterations should be >= 0, but Infinity is also valid. Allow >= 0.
		// Handle potential NaN from parseInt('') for iters
		timing.iterations = isNaN(timing.iterations) ? 1 : Math.max(0, timing.iterations);
		timing.iterationStart = Math.max(0, timing.iterationStart);

		// Check if essential properties are valid (duration needs to be > 0 for animation to run)
		if (timing.duration > 0) {
			try {
				// Create the animation
				const animation = this.animate(keyframes, timing);
				// Start paused - Manuscript will control playback
				animation.pause();
				// Store the animation object on the element instance
				this.animation = animation;
				// console.log(`vfa-word: Animation created and stored for "${this.txt}"`);
			} catch (error) {
				// Log errors during animation creation
				console.error(`vfa-word: Error creating animation for "${this.txt}"`, error, { keyframes, timing });
			}
		} else {
			// Log if duration is not valid for animation
			// console.warn(`vfa-word: Animation not created for "${this.txt}" due to invalid duration (${timing.duration})`);
		}
	}
}

// Define the custom element if it hasn't been defined yet
if (!customElements.get('vfa-word')) {
	customElements.define('vfa-word', VariableFontAnimatedWord);
}
