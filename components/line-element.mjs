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

    //handling slots
    let lineSlot = this.shadowRoot.querySelector('p slot');
    // method that returns array of nodes added into slot
    let contentInSlot = lineSlot.assignedNodes()[0] //OR assignedElements()
    if (contentInSlot) {
      lineSlot.addEventListener('slotchanged', (ev) => {
        console.log(contentInSlot);
      });

      //handling events
      lineSlot.addEventListener('clicked', (ev) => {
        // we want hello() or goodbye() from main.js to fire
        let anima =
          this.anima && typeof window[this.anima] === 'function'
            ? window[this.anima]
            : this.defaultAnimaForLineElement;
        anima(ev);
      });
    }
  };
  defaultAnimaForLineElement() {
    console.log('Missing a VALID attribute value');
  }

  //Web Components added or removed from page
  connectedCallback() {
    // runs when <line-element> is attached to page (either directly in HTML or in JS when appending to DOM/page)
    // good time to set defaults for attributes
    console.log('added to page');
    if (this.duration === "") {
      this.duration = '2000'
    }
  }
  disconnectedCallback() {
    // runs when <line-element> is removed from page
  }

  // Attributes and Properties ...
  //define the allowed attributes
  static get observedAttributes() {
    return ['duration', 'keyframes', 'timing', 'start', 'anima'];
  }
  //create properties so get/setAttribute OR property names work
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
  get anima() {
    return this.getAttribute('anima');
  }
  set anima(value) {
    this.setAttribute('anima', value);
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
    if (attrName === 'anima') {
      // do something
    }
  }
}

customElements.define('line-element', LineElement);
