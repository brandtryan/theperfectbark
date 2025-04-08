const template = document.createElement('template');
template.innerHTML = `
	<slot></slot>
`;
// template.innerHTML = `
// 	<style>
// 		@import url('../style.css');
// 	</style>
// 	<slot></slot>
// `;

export default class MovingTextPage extends HTMLElement {
	constructor() {
		super();
		let clone = template.content.cloneNode(true);
		this.appendChild(clone);
	}
	connectedCallback() {}
}

if (!customElements.get('mt-page')) {
	customElements.define('mt-page', MovingTextPage);
}
