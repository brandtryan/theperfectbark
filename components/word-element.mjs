// word-element.mjs
import { breath } from "../modules/animations.mjs";

const template = document.createElement("template")
template.innerHTML = `
      <style>
        span {
        /* border: 1px solid blue; */
          margin: 0;
          padding: 0;
        }
      </style>
      <span>
        <slot></slot>
      </span>
`;
class WordElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    let clone = template.content.cloneNode(true);
    this.shadowRoot.append(clone);
  }

  //define the allowed attributes
  static get observedAttributes() {
    return ['id', 'animation', 'duration', 'delay', 'cue'];
  }

  //
  //create properties to match attributes
  //so either get/setAttribute or property names work

  get id() {
    return this.getAttribute('id');
  }
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

  get delay() {
    return this.getAttribute('delay');
  }
  set delay(value) {
    this.setAttribute('delay', value);
  }

  get cue() {
    return this.getAttribute('cue');
  }
  set cue(value) {
    this.setAttribute('cue', value);
  }

  connectedCallback() {
    const wordId = this.getAttribute('id');
    const animationType = this.getAttribute('animation');
    const duration = this.getAttribute('duration');
    const delay = this.getAttribute('delay');

    console.log(`Word Component with id: ${wordId} connected with animation: ${animationType}
      with a delay of ${delay} and a duration of ${duration}`);
    // setup styles and element based on the id or animation attributes
    // this.applyAnimation(breath);
  }

  //
  //handle values and changes to the attribute
  // This method will run everytime attribute changes, including on page load
  // that means when I provide a value for an attribute in main.js or directly in html
  // attrName, oldVal, newVal always get passed in as arguments (don't have to use them all)

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName === 'animation') {
      // do something
    }
    if (attrName === 'duration') {

    }
    if (attrName === 'delay') {

    }
    if (attrName === 'cue') {

    }
  }

  applyAnimation(animationType) {
    // Logic to apply different animations based on the animationType
    if (animationType === 'breath') {
      console.log('Applying breath animation');
      //implementation
      Element.animate(breath);

    } else if (animationType === 'twitch') {
      console.log('Applying twitch animation');
      //implementation
    }
    else {
      console.log('No animation specified');
      //implementation
    }
  }
}
customElements.define('word-element', WordElement);
