export default class VariableFontAnimatedPage extends HTMLElement {
	constructor() {
		super();
	}
}

if (!customElements.get('vfa-page')) {
	customElements.define('vfa-page', VariableFontAnimatedPage);
}
