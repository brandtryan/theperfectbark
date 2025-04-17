import VariableFontAnimatedWord from './word/PREvfa-word';

const animationManager = {
	pageElements: document.querySelectorAll('vfa-page'),
	intersectionObserver: null,
	currentPage: document.querySelector('vfa-page'),

	playPageAnimations(pageId, pageStartTime) {
		pageStartTime = document.timeline.currentTime;
		const animationsToPlay = pageAnimations[pageId];

		if (animationsToPlay) {
			animationsToPlay.forEach((animation, index) => {
				const element = animation.effect.target;
				const delay = pageStartTime + element.start;
				animation.play();
				animation.startTime = delay;
			});
		} else {
			console.warn(`No animations found for page ID: ${pageId}`);
		}
	},

	pausePageAnimations(pageId) {
		const animationsToPause = pageAnimations[pageId];
		if (animationsToPause) {
			animationsToPause.forEach((animation, index) => {
				animation.pause();
			});
		}
	},

	init() {
		this.createObserver();
		this.attachEventListeners();
	},

	createObserver() {
		this.intersectionObserver = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						this.playPageAnimations(entry.target.id);
						// this.pausePageAnimations(entry.target.id);
						this.currentPage = entry.target; // Update current page
					}
				});
			},
			{ threshold: 0.6 }
		);
		this.observePages();
	},

	observePages() {
		const pages = document.querySelectorAll('vfa-page');
		pages.forEach(page => {
			this.intersectionObserver.observe(page);
			this.pausePageAnimations(page);
		});
	},

	goToNextPage() {
		const nextPage = this.currentPage.nextElementSibling;
		if (nextPage) {
			nextPage.scrollIntoView({ behavior: 'smooth' });
		}
	},

	goToPreviousPage() {
		const previousPage = this.currentPage.previousElementSibling;
		if (previousPage) {
			previousPage.scrollIntoView({ behavior: 'smooth' });
		}
	},

	attachEventListeners() {
		document.addEventListener('keydown', event => {
			if (event.key === 'ArrowRight') {
				this.goToNextPage();
			}
			if (event.key === 'ArrowLeft') {
				this.goToPreviousPage();
			}
		});
	},
};

const lineAnimations = getLineAnimations();

function getLineAnimations() {
	const words = document.querySelectorAll('vfa-word');
	const wordsInLine = Object.groupBy(words, w => w.closest('vfa-line').id);

	const lineAnimations = {};

	for (const lineId in wordsInLine) {
		const lineWords = wordsInLine[lineId];
		const animationsOnline = [];

		lineWords.forEach(w => {
			const animation = w.animation;
			animationsOnline.push(animation);
		});

		lineAnimations[lineId] = animationsOnline;
	}
	return lineAnimations;
}

const pageAnimations = getPageAnimations();

function getPageAnimations() {
	const words = document.querySelectorAll('vfa-word');
	const wordsOnPage = Object.groupBy(words, w => w.closest('vfa-page').id);

	const pageAnimations = {};

	for (const pageId in wordsOnPage) {
		const pageWords = wordsOnPage[pageId];
		const animationsOnPage = [];

		pageWords.forEach(w => {
			const animation = w.animation;
			animationsOnPage.push(animation);
		});

		pageAnimations[pageId] = animationsOnPage;
	}
	return pageAnimations;
}

document.addEventListener('DOMContentLoaded', event => {
	animationManager.init();
	console.log('Animation Manager initialized.');
	console.log('DOM fully loaded and parsed');
});
