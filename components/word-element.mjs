// word-element.mjs
import { breathAnimation } from '../modules/animations.mjs'


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

  // Define the allowed attributes
  static get observedAttributes() {
    return ['id', 'animation', 'duration', 'delay', 'cue'];
  }

  // Create properties to match attributes
  get id() {
    return this.getAttribute('id');
  }
  get animation() {
    return this.getAttribute('animation');
  }
  set animation(value) {
    this.setAttribute('animation', value);
  }
  get cue() {
    return parseFloat(this.getAttribute('cue')) || 0;
  }
  set cue(value) {
    this.setAttribute('cue', value);
  }

  get duration() {
    return parseFloat(this.getAttribute('duration')) || 500;
  }
  set duration(value) {
    this.setAttribute('duration', value);
  }

  get delay() {
    return parseFloat(this.getAttribute('delay')) || 0;
  }
  set delay(value) {
    this.setAttribute('delay', value);
  }

  connectedCallback() {
    const wordId = this.getAttribute('id');
    const animationType = this.getAttribute('animation');
    const duration = this.getAttribute('duration');
    const delay = this.getAttribute('delay');
    console.log(`Word Component with id: ${wordId} connected with animation: ${animationType}
      with a delay of ${delay} and a duration of ${duration}`);
    // setup styles and element based on the id or animation attributes
    this.applyAnimation(animationType);


  }

  //
  //handle values and changes to the attribute
  // This method will run everytime attribute changes, including on page load
  // that means when I provide a value for an attribute in main.js or directly in html
  // attrName, oldVal, newVal always get passed in as arguments (don't have to use them all)

  attributeChangedCallback(attrName, oldVal, newVal) {
    console.log(`Attribute changed: ${attrName}`, { oldVal, newVal });

    if (attrName === 'animation') {
      this.applyAnimation(newVal);
    }
  }

  applyAnimation(animationType) {
    if (this.currentAnimation) {
      this.currentAnimation.cancel();
    }

    const cue = this.cue;
    const startTime = document.timeline.currentTime + cue;

    if (!animationType) return;

    if (animationType === 'breath') {
      const animation = breathAnimation;
      animation.effect.target = this;
      animation.startTime = startTime;
      animation.play();
      this.currentAnimation = animation;
    }
  }
}
customElements.define('word-element', WordElement);
