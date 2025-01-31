import { wordCounts, readTimes } from "../modules/wordCounts.mjs";

const template = document.createElement("template")
template.innerHTML = `
  <style>
    :host {
      place-content: center;
      grid-template-columns: 38ch;
      margin: 0;
      padding: 0;
    }
    p {
      width: 38ch;
      place-self: center;
      white-space: nowrap;
      overflow: visible;
      padding: 0;
      margin: 0;
    }
  </style>

  <p>
  <slot></slot>
  </p>
`;

class LineElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    let clone = template.content.cloneNode(true);
    this.shadowRoot.append(clone);
  };

  //define the allowed attributes
  static get observedAttributes() {
    return ['wordCount', 'readTime', 'animated', 'frames', 'timing', 'startTime'];
  }
  //
  //sync attributes with properties as you want
  get wordCount() {
    return this.getAttribute('wordCount');
  }
  set wordCount(value) {
    this.setAttribute('wordCount', value);
  }

  get readTime() {
    return this.getAttribute('readTime');
  }
  set readTime(value) {
    this.setAttribute('readTime', value);
  }

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
    if (attrName === 'wordCount') {

    }
    if (attrName === 'readTime') {

    }
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

customElements.define('line-element', LineElement);
