import { lineWords, lineWordCounts, lineReadingTimes } from "../modules/wordCounts.mjs";

const template = document.createElement("template")
template.innerHTML = `
<style>
  p {
  /* border: 1px solid red; */
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
  //create properties to match attributes
  //so either get/setAttribute or property names work
  get wordCount() {
    return this.getAttribute('wordCount');
  }
  set wordCount(value) {
    this.setAttribute('wordCount', value);
  }

  // get readTime() {
  //   return this.getAttribute('readTime');
  // }
  // set readTime(value) {
  //   this.setAttribute('readTime', value);
  // }

  // get animated() {
  //   return this.getAttribute('animated');
  // }
  // set animated(value) {
  //   this.setAttribute('animated', value);
  // }

  // get frames() {
  //   return this.getAttribute('frames');
  // }
  // set frames(value) {
  //   this.setAttribute('frames', value);
  // }

  // get timing() {
  //   return this.getAttribute('timing');
  // }
  // set timing(value) {
  //   this.setAttribute('timing', value);
  // }

  // get startTime() {
  //   return this.getAttribute('startTime');
  // }
  // set startTime(value) {
  //   this.setAttribute('startTime', value);
  // }


  //
  //handle values and changes to the attribute
  // This method will run everytime attribute changes, including on page load
  // that means when I provide a value for an attribute in main.js or directly in html
  // attrName, oldVal, newVal always get passed in as arguments (don't have to use them all)

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName === 'wordCount') {
      // do something
      const div = this.shadowRoot;
      const wc = this.wordCount;

      for (let i = 0; i < wc; i++) {
        let w = div.querySelector('word-element') ? div.querySelector('word-element') : document.createElement('word-element');
        w.textContent = words[0];
        div.append(w);
      }
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
