// Basic placeholder for vfa-page
class VfaPageComponent extends HTMLElement {
	constructor() {
		super();
		// console.log('vfa-page constructor');
	}
	connectedCallback() {
		// console.log('vfa-page connected', this.id);
		// Add specific page logic if needed later
	}
}

class VfaLineComponent extends HTMLElement {
	constructor() {
		super();
		// console.log('vfa-line constructor');
	}
	connectedCallback() {
		// console.log('vfa-line connected');
		// Add line-specific logic, e.g., click listener for preview
		this.addEventListener('click', this.handleLineClick);
	}
	disconnectedCallback() {
		this.removeEventListener('click', this.handleLineClick);
	}

	handleLineClick() {
		console.log('Line clicked:', this);
		// Find word animations within this line
		const wordsInLine = this.querySelectorAll('vfa-word');
		const animations = Array.from(wordsInLine)
			.map(word => word.animation)
			.filter(Boolean); // Filter out null/undefined animations

		if (animations.length > 0) {
			console.log(`Previewing ${animations.length} animations for this line.`);
			// Reset and play animations for this line only
			animations.forEach(animation => {
				const element = animation.effect.target;
				const start = element.start;
				const delay = document.timeline.currentTime + start;
				animation.currentTime = 0;
				animation.play();
				animation.startTime = delay;
			});

			// *** Dispatch a custom event so the manuscript can pause others ***
			this.dispatchEvent(
				new CustomEvent('vfa-preview-line', {
					bubbles: true, // Allow event to bubble up to the manuscript
					composed: true, // Allow event to cross shadow DOM boundaries (if used later)
					detail: {
						lineElement: this,
						previewedAnimations: animations, // Pass the animations being previewed
					},
				})
			);
		} else {
			console.log('No animations found to preview for this line.');
		}
	}
}

// Define elements
if (!customElements.get('vfa-page')) {
	customElements.define('vfa-page', VfaPageComponent);
}
if (!customElements.get('vfa-line')) {
	customElements.define('vfa-line', VfaLineComponent);
}
