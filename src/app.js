// Register GSAP plugins
gsap.registerPlugin(SplitText);

document.addEventListener("DOMContentLoaded", () => {
	const textContent = document.querySelector(".text-content");

	// Use SplitText to break the text into lines and words
	const split = new SplitText(textContent, {
		type: "lines, words",
		linesClass: "line-wrapper",
		wordsClass: "word-span",
		autoSplit: true, // This makes the split responsive to resizes
	});

	// --- Performance-Optimized Animation with Intersection Observer ---

	// Create an observer to watch for lines entering the viewport
	const observer = new IntersectionObserver((entries, obs) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				// Animate the line when it becomes visible
				gsap.to(entry.target, {
					y: 0,
					opacity: 1,
					duration: 0.8,
					ease: "power2.out",
					delay: 0.1,
				});
				// Stop observing the element once it has been animated in
				obs.unobserve(entry.target);
			}
		});
	}, {
		threshold: 0.1, // Trigger when 10% of the element is visible
		rootMargin: "0px 0px -50px 0px" // Adjust the viewport bounds
	});

	// Observe each of the newly created lines
	split.lines.forEach(line => {
		observer.observe(line);
	});
});
