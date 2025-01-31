// word-element.mjs

class WordElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <span>
        <slot></slot>
      </span>
    `;
  }

  //define the allowed attributes
  static get observedAttributes() {
    return ['animated', 'frames', 'timing', 'startTime'];
  }
  //
  //sync attributes with properties as you want
  get animated() {
    return this.getAttribute('animated');
  }
  set animated(value) {
    this.setAttribute('animated', value);
  }

  get frames() {
    return this.getAttribute('frames');
  }
  set frames(value) {
    this.setAttribute('frames', value);
  }

  get timing() {
    return this.getAttribute('timing');
  }
  set timing(value) {
    this.setAttribute('timing', value);
  }

  get startTime() {
    return this.getAttribute('startTime');
  }
  set startTime(value) {
    this.setAttribute('startTime', value);
  }

  //
  //handle values and changes to the attribute
  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName === 'animated') {

    }
    if (attrName === 'frames') {

    }
    if (attrName === 'timing') {

    }
    if (attrName === 'startTime') {

    }
  }

}

customElements.define('word-element', WordElement);
