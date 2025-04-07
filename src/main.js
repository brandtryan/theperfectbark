import MovingTextWord from './components/word/mt-word';
import MovingTextLine from './components/line/mt-line';
import MovingTextPage from './components/page/mt-page';

export const animationManager = {
	pageElements: document.querySelectorAll('mt-page'),
	intersectionObserver: null,
	currentPage: document.querySelector('mt-page'),
	init() {
		this.createObserver();
		this.attachEventListeners();
	},

	createObserver() {
		this.intersectionObserver = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						// playPageAnimations(entry.target.id);
						pausePageAnimations(entry.target.id);
						this.currentPage = entry.target; // Update current page
					}
				});
			},
			{ threshold: 0.6 }
		);
		this.observePages();
	},

	observePages() {
		const pages = document.querySelectorAll('.page');
		pages.forEach(page => {
			this.intersectionObserver.observe(page);
			pausePageAnimations(page);
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

document.addEventListener('DOMContentLoaded', event => {
	console.log('DOM fully loaded and parsed');
});
