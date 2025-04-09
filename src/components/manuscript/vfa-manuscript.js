class VariableFontAnimatedManuscript extends HTMLElement {
	constructor() {
		super();
	}
}

if (!customElements.get('vfa-manuscript')) {
	customElements.define('vfa-manuscript', VariableFontAnimatedManuscript);
}
