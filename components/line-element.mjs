import { lineWords, lineWordCounts, lineReadingTimes } from "../modules/wordCounts.mjs";

const template = document.createElement("template")
template.innerHTML = `
  <style>
    p {
      /* border: 1px solid red; */
      margin: 0;
      padding: 0;
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
    return ['animation', 'duration', 'timeline', 'start'];
  }

  //
  //create properties to match attributes
  //so either get/setAttribute or property names work

  get animation() {
    return this.getAttribute('animation');
  }
  set animation(value) {
    this.setAttribute('animation', value);
  }

  get duration() {
    return this.getAttribute('duration');
  }
  set duration(value) {
    this.setAttribute('duration', value);
  }

  get timeline() {
    return this.getAttribute('timeline');
  }
  set timeline(value) {
    this.setAttribute('timeline', value);
  }

  get start() {
    return this.getAttribute('start');
  }
  set start(value) {
    this.setAttribute('start', value);
  }


  //
  //handle values and changes to the attribute
  // This method will run everytime attribute changes, including on page load
  // that means when I provide a value for an attribute in main.js or directly in html
  // attrName, oldVal, newVal always get passed in as arguments (don't have to use them all)

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName === 'animation') {
      // do something
      const div = this.shadowRoot;
      const anima = this.animation;
    }
    if (attrName === 'duration') {

    }
    if (attrName === 'timeline') {

    }
    if (attrName === 'start') {

    }
  }
}

customElements.define('line-element', LineElement);
