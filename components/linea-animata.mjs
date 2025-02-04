import { breath } from '../modules/animations.mjs'


const template = document.createElement("template")
template.innerHTML = `
      <style>
        :host {
          display: block; 
        }
        p {
        /* border: 1px solid blue; */
            display: block;
            margin: 0;
            padding: 0;
        }
      </style>
      <p>
          <slot name="w00"></slot>
          <slot name="w01"></slot>
          <slot name="w02"></slot>
          <slot name="w03"></slot>
          <slot name="w04"></slot>
          <slot name="w05"></slot>
          <slot name="w06"></slot>
          <slot name="w07"></slot>
          <slot name="w08"></slot>
          <slot name="w09"></slot>
          <slot name="w10"></slot>
          <slot name="w11"></slot>
          <slot name="w12"></slot>
          <slot name="w13"></slot>
          <slot name="w14"></slot>
          <slot name="w15"></slot>
      </p>
`;
class LineaAnimata extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    let clone = template.content.cloneNode(true);
    this.shadowRoot.append(clone);
  }

  // Define the allowed attributes
  static get observedAttributes() {
    return ['id', 'anima', 'duration', 'delay', 'go'];
  }

  // Create properties to match attributes
  get id() {
    return this.firstElementChild.getAttribute('id');
  }
  get anima() {
    return this.firstElementChild.getAttribute('anima');
  }
  set anima(value) {
    this.firstElementChild.setAttribute('anima', value);
  }
  get go() {
    return parseFloat(this.firstElementChild.getAttribute('go')) || 0;
  }
  set go(value) {
    this.firstElementChild.setAttribute('go', value);
  }

  get duration() {
    return parseFloat(this.firstElementChild.getAttribute('duration')) || 500;
  }
  set duration(value) {
    this.firstElementChild.setAttribute('duration', value);
  }

  get delay() {
    return parseFloat(this.firstElementChild.getAttribute('delay')) || 0;
  }
  set delay(value) {
    this.firstElementChild.setAttribute('delay', value);
  }

  connectedCallback() {
    const wordId = this.firstElementChild.getAttribute('id');
    const animationType = this.firstElementChild.getAttribute('anima');
    const duration = this.firstElementChild.getAttribute('duration');
    const delay = this.firstElementChild.getAttribute('delay');
    const direction = this.firstElementChild.getAttribute('direction');
    const iterations = this.firstElementChild.getAttribute('iterations');
    const easing = this.firstElementChild.getAttribute('easing');
    console.log(`Word Component with id: ${wordId} connected with anima: ${animationType}
      with a delay of ${delay} and a duration of ${duration}`);
    // setup styles and element based on the id or animation attributes
    this.firstElementChild.applyAnimation(animationType);
  }

  //
  //handle values and changes to the attribute
  // This method will run everytime attribute changes, including on page load
  // that means when I provide a value for an attribute in main.js or directly in html
  // attrName, oldVal, newVal always get passed in as arguments (don't have to use them all)

  attributeChangedCallback(attrName, oldVal, newVal) {
    console.log(`Attribute changed: ${attrName}`, { oldVal, newVal });

    if (attrName === 'anima') {
      this.firstElementChild.applyAnimation(newVal);
    }
  }

  applyAnimation(animationType) {
    // if (this.currentAnimation) {
    //   this.currentAnimation.cancel();
    // }

    const go = this.firstElementChild.go;
    const nowTimeline = new DocumentTimeline({
      originTime: document.timeline.currentTime,
    })
    const startTime = nowTimeline.currentTime + go;
    // const startTime = document.timeline.currentTime + go;

    if (!animationType) return;

    if (animationType === 'breath') {
      const anima = breath;
      anima.effect.target = this.firstElementChild;
      anima.startTime = startTime;
      anima.play();
      // this.currentAnimation = anima;
    }
  }
}
customElements.define('linea-animata', LineaAnimata);
