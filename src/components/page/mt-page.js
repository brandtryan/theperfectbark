export default class MovingTextPage extends HTMLElement {
	constructor() {
		super();
		this.append(this.slot);
	}
}

if (!customElements.get('mt-page')) {
	customElements.define('mt-page', MovingTextPage);
}
