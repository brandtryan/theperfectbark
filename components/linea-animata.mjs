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
    return ['slot', 'data-anima', 'data-dur', 'data-ease', 'data-iter', 'data-go'];
  }

  // Create properties to match attributes
  get anima() {
    return this.getAttribute('data-anima');
  }
  set anima(value) {
    this.setAttribute('data-anima', value);
  }
  get dur() {
    return parseFloat(this.getAttribute('data-dur')) || 0;
  }
  set dur(value) {
    this.setAttribute('data-dur', value);
  }

  get ease() {
    return this.getAttribute('data-ease');
  }
  set ease(value) {
    this.setAttribute('data-ease', value);
  }
  get iter() {
    return parseFloat(this.getAttribute('data-iter')) || 0;
  }
  set iter(value) {
    this.setAttribute('data-iter', value);
  }
  get go() {
    return parseFloat(this.getAttribute('data-go')) || 0;
  }
  set go(value) {
    this.setAttribute('data-go', value);
  }


  connectedCallback() {
    const slot = this.getAttribute('slot');
    const anima = this.getAttribute('data-anima');
    const dur = this.getAttribute('data-dur');
    const ease = this.getAttribute('data-ease');
    const iter = this.getAttribute('data-iter');
    const go = this.getAttribute('data-go');
    console.log(`Word Component with id: ${slot} connected with anima: ${anima} with a delay of
      ${dur}, an easing of ${ease} an iteration count of ${iter} and a startTime of ${go}`);
    // setup styles and element based on the id or animation attributes
    this.applyAnimation(anima);
  }

  //
  //handle values and changes to the attribute
  // This method will run everytime attribute changes, including on page load
  // that means when I provide a value for an attribute in main.js or directly in html
  // attrName, oldVal, newVal always get passed in as arguments (don't have to use them all)

  attributeChangedCallback(attrName, oldVal, newVal) {
    console.log(`Attribute changed: ${attrName}`, { oldVal, newVal });

    if (attrName === 'anima') {
      this.applyAnimation(newVal);
    }
  }

  applyAnimation(anima) {
    // if (this.currentAnimation) {
    //   this.currentAnimation.cancel();
    // }

    const go = this.go;
    const startTime = document.timeline.currentTime + go;

    if (!anima) return;

    if (anima === 'breath') {
      const anima = breath;
      anima.effect.target = this;
      anima.startTime = startTime;
      anima.play();
      // this.currentAnimation = anima;
    }
  }
}
customElements.define('linea-animata', LineaAnimata);
