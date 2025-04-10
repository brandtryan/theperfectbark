// vfa-manuscript.js

class VfaManuscriptComponent extends HTMLElement {
	constructor() {
		super();
		console.log('vfa-manuscript constructor');

		// --- Component State & Data Storage ---
		this.pages = []; // Array of <vfa-page> elements
		this.currentPage = null; // Reference to the currently visible <vfa-page> element
		this.linesByPage = new Map(); // Map<VfaPageComponent, VfaLineComponent[]>
		this.wordsByPage = new Map(); // Map<VfaPageComponent, VfaWordComponent[]>
		this.animationsByPage = new Map(); // Map<VfaPageComponent, Animation[]>
		this.animationsByLine = new Map(); // Map<VfaLineComponent, Animation[]> (For preview)

		// --- Intersection Observer ---
		this.pageObserver = null;
		this.observerOptions = {
			root: null,
			rootMargin: '0px',
			threshold: 0.6, // Use the threshold from your main.js
		};

		// --- Bind Methods ---
		// Ensure 'this' context is correct in callbacks and event handlers
		this.handleIntersection = this.handleIntersection.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this);
		this.handlePreviewLine = this.handlePreviewLine.bind(this); // Handler for line preview event
	}

	connectedCallback() {
		console.log('vfa-manuscript connected');
		// Defer setup until child elements are likely defined and parsed
		requestAnimationFrame(() => {
			this.initializeManuscript();
		});
	}

	disconnectedCallback() {
		console.log('vfa-manuscript disconnected');
		// Cleanup
		if (this.pageObserver) {
			this.pageObserver.disconnect();
			this.pageObserver = null;
			console.log('IntersectionObserver disconnected.');
		}
		// Remove global event listeners
		document.removeEventListener('keydown', this.handleKeyDown);
		this.removeEventListener('vfa-preview-line', this.handlePreviewLine);
		console.log('Event listeners removed.');
	}

	// --- Initialization ---
	initializeManuscript() {
		console.log('Initializing manuscript...');
		this.collectAndGroupElements();
		this.setupPageObserver();
		this.attachEventListeners();
		// Set initial state (e.g., first page as current, pause all)
		this.currentPage = this.pages.length > 0 ? this.pages[0] : null;
		this.pauseAllAnimations(); // Ensure everything starts paused
		console.log('Manuscript initialized.');
	}

	// --- Element Collection and Grouping ---
	collectAndGroupElements() {
		console.log('Collecting and grouping elements...');
		const allPages = this.querySelectorAll('vfa-page');
		const allLines = this.querySelectorAll('vfa-line');
		const allWords = this.querySelectorAll('vfa-word');

		console.log(`Found: ${allPages.length} pages, ${allLines.length} lines, ${allWords.length} words.`);
		this.pages = Array.from(allPages);

		// Check for Map.groupBy support
		if (!Map.groupBy) {
			console.error('Map.groupBy is not supported in this browser. Manuscript features may be limited.');
			// Implement manual fallback if needed, otherwise grouping won't work.
			// For simplicity, we'll proceed assuming Map.groupBy exists or a polyfill is used.
			// If not, the maps below will remain empty.
			return; // Stop setup if groupBy isn't available
		}

		// Group elements using Map.groupBy and element keys
		this.linesByPage = Map.groupBy(allLines, line => line.closest('vfa-page'));
		this.wordsByPage = Map.groupBy(allWords, word => word.closest('vfa-page'));
		this.animationsByLine = Map.groupBy(
			// allWords.filter(word => word.animation), // Only consider words that successfully created an animation
			allWords,
			word => word.closest('vfa-line')
		);
		// Map line keys to arrays of *animations* instead of words
		for (const [lineElement, wordsOnLine] of this.animationsByLine.entries()) {
			if (lineElement) {
				this.animationsByLine.set(
					lineElement,
					wordsOnLine.map(w => w.animation)
				);
			} else {
				this.animationsByLine.delete(lineElement); // Remove null/undefined keys
			}
		}

		// Group Animations by Page (derived from wordsByPage)
		this.animationsByPage = new Map();
		for (const [pageElement, wordsOnPage] of this.wordsByPage.entries()) {
			if (pageElement) {
				const animationsOnPage = wordsOnPage.map(word => word.animation).filter(Boolean); // Filter out null/undefined animations
				this.animationsByPage.set(pageElement, animationsOnPage);
			}
		}

		console.log('Element grouping complete.');
		// console.log('animationsByPage:', this.animationsByPage);
		// console.log('animationsByLine:', this.animationsByLine);
	}

	// --- Intersection Observer Setup ---
	setupPageObserver() {
		if (this.pageObserver) {
			// Disconnect previous observer if any
			this.pageObserver.disconnect();
		}
		if (this.pages.length > 0) {
			this.pageObserver = new IntersectionObserver(this.handleIntersection, this.observerOptions);
			this.pages.forEach(page => this.pageObserver.observe(page));
			console.log('IntersectionObserver setup complete.');
		} else {
			console.warn('No vfa-page elements found to observe.');
		}
	}

	// --- Event Listener Setup ---
	attachEventListeners() {
		// Remove first to prevent duplicates if called multiple times
		document.removeEventListener('keydown', this.handleKeyDown);
		this.removeEventListener('vfa-preview-line', this.handlePreviewLine);
		// Add listeners
		document.addEventListener('keydown', this.handleKeyDown);
		this.addEventListener('vfa-preview-line', this.handlePreviewLine);
		console.log('Global event listeners attached.');
	}

	// --- Intersection Observer Callback ---
	handleIntersection(entries, observer) {
		let isAnyPageIntersecting = false;
		entries.forEach(entry => {
			const pageElement = entry.target;
			if (entry.isIntersecting) {
				isAnyPageIntersecting = true;
				// Check if this page wasn't already considered the current one
				if (this.currentPage !== pageElement || !pageElement.classList.contains('vfa-page-active')) {
					console.log(`Page ${pageElement.id || 'no-id'} is intersecting.`);
					this.playPageAnimations(pageElement);
					this.currentPage = pageElement; // Update current page
					pageElement.classList.add('vfa-page-active'); // Mark as active
				}
			} else {
				// Page is no longer sufficiently visible
				// Only pause if it was previously active
				if (pageElement.classList.contains('vfa-page-active')) {
					console.log(`Page ${pageElement.id || 'no-id'} is NOT intersecting.`);
					this.pausePageAnimations(pageElement);
					pageElement.classList.remove('vfa-page-active'); // Unmark as active
				}
			}
		});
		// If multiple pages might intersect, ensure only one is marked active / playing?
		// This simple logic plays any intersecting page. More complex logic could
		// prioritize based on intersectionRatio or only play the 'most visible' one.
	}

	// --- Animation Control Methods ---
	playPageAnimations(pageElement) {
		const animations = this.animationsByPage.get(pageElement);
		if (animations) {
			// Get the time when the page became visible to calculate startTimes
			const pageVisibleTime = document.timeline.currentTime;
			console.log(`Playing ${animations.length} animations for page ${pageElement.id} starting at ${pageVisibleTime}`);

			animations.forEach(animation => {
				const wordElement = animation.effect.target; // Get the target vfa-word
				// Use the 'start' property (from the attribute) for staggered timing
				// Fallback to 0 if start attribute/property is missing or invalid
				const staggerDelay = wordElement.start || 0;

				// Validate staggerDelay
				const validStaggerDelay = isNaN(staggerDelay) ? 0 : Math.max(0, staggerDelay);

				// Set the animation's startTime relative to the page becoming visible
				// This overrides any 'delay' set in the animation's timing options
				animation.startTime = pageVisibleTime + validStaggerDelay;
				// No need to call play() when setting startTime, it starts automatically.
			});
		} else {
			console.warn(`No animations found for page element:`, pageElement);
		}
	}

	pausePageAnimations(pageElement) {
		const animations = this.animationsByPage.get(pageElement);
		if (animations) {
			// console.log(`Pausing ${animations.length} animations for page ${pageElement.id}`);
			animations.forEach(animation => {
				animation.pause();
				// Optional: Reset time? Depends on desired behavior when scrolling back.
				// animation.currentTime = 0;
			});
		}
	}

	pauseAllAnimations(options = {}) {
		const { excludeAnimations = [] } = options; // Option to exclude specific animations
		console.log('Pausing all animations...');
		this.animationsByPage.forEach(pageAnimations => {
			pageAnimations.forEach(anim => {
				if (!excludeAnimations.includes(anim)) {
					anim.pause();
					// anim.currentTime = 0; // Optional reset
				}
			});
		});
		// Also remove active class from all pages
		this.pages.forEach(p => p.classList.remove('vfa-page-active'));
	}

	// --- Navigation Methods ---
	goToNextPage() {
		if (!this.currentPage) return;
		const currentIndex = this.pages.indexOf(this.currentPage);
		const nextIndex = currentIndex + 1;
		if (nextIndex < this.pages.length) {
			console.log('Scrolling to next page:', this.pages[nextIndex].id);
			this.pages[nextIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });
		} else {
			console.log('Already on the last page.');
		}
	}

	goToPreviousPage() {
		if (!this.currentPage) return;
		const currentIndex = this.pages.indexOf(this.currentPage);
		const previousIndex = currentIndex - 1;
		if (previousIndex >= 0) {
			console.log('Scrolling to previous page:', this.pages[previousIndex].id);
			this.pages[previousIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });
		} else {
			console.log('Already on the first page.');
		}
	}

	// --- Event Handlers ---
	handleKeyDown(event) {
		// Use event.key for modern browsers
		switch (event.key) {
			case 'ArrowRight':
				event.preventDefault(); // Prevent default scroll
				this.goToNextPage();
				break;
			case 'ArrowLeft':
				event.preventDefault(); // Prevent default scroll
				this.goToPreviousPage();
				break;
			// Add other keybindings if needed
		}
	}

	handlePreviewLine(event) {
		console.log('Manuscript received preview-line event:', event.detail);
		const { lineElement, previewedAnimations } = event.detail;

		if (previewedAnimations && previewedAnimations.length > 0) {
			// Pause all animations *except* the ones being previewed
			this.pauseAllAnimations({ excludeAnimations: previewedAnimations });
			console.log(`Paused other animations while previewing line ${lineElement.id}`);
		}
	}
}

// Define the custom element
if (!customElements.get('vfa-manuscript')) {
	customElements.define('vfa-manuscript', VfaManuscriptComponent);
}
