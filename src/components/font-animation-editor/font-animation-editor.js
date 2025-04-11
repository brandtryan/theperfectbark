// font-animation-editor.js
// Import opentype.js (using ES module syntax)
import opentype from 'opentype.js';

class FontAnimationEditor extends HTMLElement {
	#font = null; // Private field for the parsed opentype.js font object
	#axes = []; // Private field for extracted axes data { tag, name, min, max, default, value, step }
	#targetElements = []; // Private field for the DOM elements to apply styles to
	#currentSettings = {}; // Private field for internal state { "wght": 400, ... }
	#controlsContainer = null; // Reference to the UI container div
	#outputDiv = null; // Reference to the div showing the CSS output

	constructor() {
		super();
		// Create Shadow DOM for encapsulation
		this.attachShadow({ mode: 'open' });

		// Initial HTML structure and basic styling for the component
		this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block; /* Make it a block element */
                    border: 1px solid #ccc;
                    padding: 15px;
                    margin: 10px 0;
                    font-family: system-ui, sans-serif; /* Use a system font for the UI itself */
                    min-width: 280px;
                    background-color: #f8f8f8;
                    border-radius: 4px;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                }
                h3 {
                    margin-top: 0;
                    margin-bottom: 15px;
                    color: #333;
                    border-bottom: 1px solid #eee;
                    padding-bottom: 5px;
                }
                .axis-control {
                    margin-bottom: 12px;
                }
                label {
                    display: block;
                    font-size: 0.9em;
                    color: #555;
                    margin-bottom: 4px;
                    font-weight: 500;
                }
                input[type="range"] {
                    width: 100%;
                    cursor: pointer;
                }
                .value-display {
                    font-size: 0.85em;
                    color: #666;
                    margin-left: 8px;
                    display: inline-block; /* Keep it next to the slider label potentially */
                    min-width: 40px; /* Give it some space */
                    text-align: right;
                }
                #controls-container {
                     min-height: 30px; /* Prevent collapse when loading */
                }
                #output-css {
					margin-top: 15px;
					padding-top: 10px;
					border-top: 1px solid #eee;
					font-family: monospace;
					font-size: 0.8em;
					color: #444;
					word-wrap: break-word;
                }
                .loading-message, .error-message {
                    font-style: italic;
                    color: #888;
                }
                .error-message {
                    color: #c00;
                }
            </style>
            <h3>Variable Font Controls</h3>
            <div id="controls-container" class="loading-message">Awaiting font URL...</div>
            <div id="output-css">font-variation-settings: normal;</div>
        `;

		// Store references to key elements in the shadow DOM
		this.#controlsContainer = this.shadowRoot.getElementById('controls-container');
		this.#outputDiv = this.shadowRoot.getElementById('output-css');
	}

	// --- Lifecycle Callbacks ---

	connectedCallback() {
		console.log('FontAnimationEditor connected to DOM.');
		// Check for attributes set initially and trigger actions
		if (this.hasAttribute('font-url')) {
			this.loadFont(this.getAttribute('font-url'));
		}
		if (this.hasAttribute('target-selector')) {
			this.updateTargetElements(this.getAttribute('target-selector'));
		}
	}

	disconnectedCallback() {
		console.log('FontAnimationEditor disconnected from DOM.');
		// Potential cleanup (e.g., remove event listeners from external elements if needed)
	}

	// Watch for changes in these specific attributes
	static get observedAttributes() {
		return ['font-url', 'target-selector'];
	}

	// Handle attribute changes
	attributeChangedCallback(name, oldValue, newValue) {
		console.log(`Attribute '${name}' changed from '${oldValue}' to '${newValue}'`);
		if (oldValue === newValue) return; // No real change

		switch (name) {
			case 'font-url':
				this.loadFont(newValue);
				break;
			case 'target-selector':
				this.updateTargetElements(newValue);
				break;
		}
	}

	// --- Public Methods (can be called from outside) ---

	/**
	 * Loads and parses the variable font from the given URL.
	 * @param {string} url - The URL of the font file (.ttf, .otf, .woff).
	 */
	async loadFont(url) {
		if (!url) {
			this.#controlsContainer.textContent = 'Font URL is missing.';
			this.#controlsContainer.className = 'error-message';
			return;
		}

		this.#controlsContainer.textContent = `Loading font: ${url.split('/').pop()}...`;
		this.#controlsContainer.className = 'loading-message';
		this.#currentSettings = {}; // Reset current settings
		this.#axes = []; // Clear previous axes
		this.#font = null; // Clear previous font object

		try {
			console.log(`Workspaceing font from: ${url}`);
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			const fontBuffer = await response.arrayBuffer();
			console.log('Font file fetched successfully.');

			// Use opentype.js to parse the font data
			this.#font = opentype.parse(fontBuffer);
			console.log('Font parsed successfully:', this.#font.names.fontFamily?.en || 'N/A');

			this.#extractAxes(); // Extract axes information
			this.#renderControls(); // Create UI sliders
			this.#applyCurrentSettings(); // Apply default/initial settings
		} catch (error) {
			console.error('Error loading or parsing font:', error);
			this.#controlsContainer.textContent = `Error: ${error.message}`;
			this.#controlsContainer.className = 'error-message';
			this.#font = null;
			this.#axes = [];
			this.#applyCurrentSettings(); // Update output to show 'normal'
		}
	}

	/**
	 * Updates the target elements based on a CSS selector.
	 * @param {string} 'vfa-word' - The CSS selector for target elements.
	 */
	updateTargetElements(selector) {
		if (!selector) {
			this.#targetElements = [];
			console.log('Target elements cleared.');
		} else {
			// Query relative to the document containing this component
			this.#targetElements = Array.from(document.querySelectorAll('vfa-word'));
			console.log(`Target elements set to ${this.#targetElements.length} element(s) matching "${'vfa-word'}".`);
		}
		// Re-apply the current settings to the new set of target elements
		this.#applyCurrentSettings();
	}

	// --- Private Helper Methods ---

	/**
	 * Extracts variation axis data from the parsed font's fvar table.
	 * @private
	 */
	#extractAxes() {
		this.#axes = [];
		this.#currentSettings = {}; // Reset settings when extracting

		if (!this.#font || !this.#font.tables.fvar) {
			console.warn('Font loaded, but "fvar" table (variable axes) not found.');
			return;
		}

		this.#font.tables.fvar.axes.forEach(axis => {
			// Attempt to get the human-readable name from the 'name' table
			const axisName = this.#font.names[axis.nameID]?.en || axis.tag; // Fallback to tag

			// Store axis details, including the current value (initially the default)
			const axisData = {
				tag: axis.tag,
				name: axisName,
				min: axis.minValue,
				max: axis.maxValue,
				default: axis.defaultValue,
				value: axis.defaultValue, // Initialize slider value to default
				// Determine a reasonable step value (often 1 for weight/width, can be fractional)
				step:
					Number.isInteger(axis.minValue) &&
					Number.isInteger(axis.maxValue) &&
					Math.abs(axis.maxValue - axis.minValue) > 1
						? 1
						: 0.1,
			};
			this.#axes.push(axisData);
			this.#currentSettings[axis.tag] = axisData.value; // Populate initial settings state
		});
		console.log('Extracted axes:', this.#axes);
	}

	/**
	 * Dynamically creates slider controls in the Shadow DOM for each extracted axis.
	 * @private
	 */
	#renderControls() {
		// Clear previous controls or loading/error messages
		this.#controlsContainer.innerHTML = '';
		this.#controlsContainer.className = ''; // Reset class name

		if (this.#axes.length === 0) {
			this.#controlsContainer.textContent = 'No variable axes found in this font.';
			return;
		}

		this.#axes.forEach(axis => {
			const controlDiv = document.createElement('div');
			controlDiv.className = 'axis-control';

			const label = document.createElement('label');
			label.setAttribute('for', `axis-${axis.tag}`);
			// Display Name (Tag) and current value
			const valueDisplay = document.createElement('span');
			valueDisplay.className = 'value-display';
			valueDisplay.textContent = axis.value.toFixed(axis.step < 1 ? 2 : 0); // Format based on step
			label.textContent = `${axis.name} (${axis.tag}): `;
			label.appendChild(valueDisplay); // Put value display inside label

			const slider = document.createElement('input');
			slider.type = 'range';
			slider.id = `axis-${axis.tag}`;
			slider.name = axis.tag;
			slider.min = axis.min;
			slider.max = axis.max;
			slider.step = axis.step;
			slider.value = axis.value;

			// Event listener for when the slider value changes
			slider.addEventListener('input', event => {
				const newValue = parseFloat(event.target.value);
				// Update the internal state
				this.#currentSettings[axis.tag] = newValue;
				axis.value = newValue; // Also update the value in our #axes array
				// Update the displayed value in the label
				valueDisplay.textContent = newValue.toFixed(axis.step < 1 ? 2 : 0);
				// Apply the updated settings to the target elements
				this.#applyCurrentSettings();
			});

			controlDiv.appendChild(label);
			controlDiv.appendChild(slider);
			this.#controlsContainer.appendChild(controlDiv);
		});
	}

	/**
	 * Constructs the CSS 'font-variation-settings' string and applies it.
	 * @private
	 */
	#applyCurrentSettings() {
		// Create the CSS string: "wght" 400, "wdth" 100, ...
		const cssString = Object.entries(this.#currentSettings)
			.map(([tag, value]) => `"${tag}" ${value}`)
			.join(', ');

		// Update the output display within the component
		this.#outputDiv.textContent = `font-variation-settings: ${cssString || 'normal'};`;

		// Apply the style to all targeted elements
		this.#targetElements.forEach(el => {
			if (el && el.style) {
				el.style.fontVariationSettings = cssString;
			}
		});
	}

	// --- Placeholder for Animation Controls ---
	// These would likely interact with the Web Animations API (WAAPI)

	playAnimation() {
		console.warn('playAnimation() not implemented yet.');
		// Example: Find animation targeting font-variation-settings on targets and play
	}

	pauseAnimation() {
		console.warn('pauseAnimation() not implemented yet.');
		// Example: Find animation targeting font-variation-settings on targets and pause
	}

	seekAnimation(timeOrPercent) {
		console.warn(`seekAnimation(${timeOrPercent}) not implemented yet.`);
		// Example: Find animation targeting font-variation-settings on targets and set currentTime
	}
}

// Define the custom element for use in HTML
customElements.define('font-animation-editor', FontAnimationEditor);
