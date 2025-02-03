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
    return ['duration', 'keyframes', 'timing', 'start'];
  }

  //
  //create properties to match attributes
  //so either get/setAttribute or property names work

  get duration() {
    return this.getAttribute('duration');
  }
  set duration(value) {
    this.setAttribute('duration', value);
  }

  get keyframes() {
    return this.getAttribute('keyframes');
  }
  set keyframes(value) {
    this.setAttribute('keyframes', value);
  }

  get timing() {
    return this.getAttribute('timing');
  }
  set timing(value) {
    this.setAttribute('timing', value);
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
    if (attrName === 'duration') {
      // do something
    }
    if (attrName === 'keyframes') {
      // do something
    }
    if (attrName === 'timing') {
      // do something
    }
    if (attrName === 'start') {
      // do something
    }
  }
}

customElements.define('line-element', LineElement);
