const template = document.createElement("template")
template.innerHTML = `
  <style>
    :host {
      width: 100cqw;
      place-content: center;
      grid-template-columns: 1fr 38ch 1fr;
      grid-template-areas: "left line right";
      margin: 0;
      padding: 0;
    }
    .left {
      grid-area: left;
      border: 2px dotted cornflowerblue;
    }
    .line {
      grid-area: line;
      width: 38ch;
      place-self: center;
      white-space: nowrap;
      overflow: visible;
      margin: 0;
      padding: 3px;
      border: 2px solid cornflowerblue;
    }
    .right {
      grid-area: right;
      border: 2px dotted cornflowerblue;
    }
    p ::slotted(span) {
      border: 1px solid goldenrod;
    }
    .animated {
      color: green; 
    }
    .notAnimated {
      color: red; 
    }
  </style>

  <p class="line">
  <slot></slot>
  <span class="word">
    <slot name="word"></slot>
  </span>
  </p>
`;

class LineElement extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'open' });
    // shadowRoot shields the web component from external styling, mostly
    let clone = template.content.cloneNode(true);
    this.root.append(clone);
  };

  //define the allowed attributes
  static get observedAttributes() {
    return ['wordCount', 'readTime', 'animated', 'animation', 'frames', 'timing', 'startTime'];
  }
  //
  //sync attributes with properties as you want
  get wordCount() {
    return this.getAttribute('word-count');
  }
  set wordCount(value) {
    this.setAttribute('word-count', value);
  }

  get readTime() {
    return this.getAttribute('read-time');
  }
  set readTime(value) {
    this.setAttribute('read-time', value);
  }

  get animated() {
    return this.getAttribute('animated');
  }
  set animated(value) {
    this.setAttribute('animated', value);
  }

  get animation() {
    return this.getAttribute('animation');
  }
  set animation(value) {
    this.setAttribute('animation', value);
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
    return this.getAttribute('start-time');
  }
  set startTime(value) {
    this.setAttribute('start-time', value);
  }
  //
  //handle values and changes to the attribute
  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName.toLowerCase() === 'word-count') {

    }
    if (attrName.toLowerCase() === 'read-time') {

    }
    if (attrName.toLowerCase() === 'animated') {
      const div = this.root.querySelector('.root');
      let span = div.querySelector('span');
      if (span.animated = "true") (span) => span.classList('.animated')
      span.classList('.notAnimated')
    }
    if (attrName.toLowerCase() === 'animation') {

    }
    if (attrName.toLowerCase() === 'frames') {

    }
    if (attrName.toLowerCase() === 'timing') {

    }
    if (attrName.toLowerCase() === 'start-time') {

    }
  }
}

customElements.define('line-element', LineElement);


// // Create function to calculate reading time (* 1.5 for taking in effects)
// function getLineReadingTimes(line) {
//   const wordCount = getLineWordCounts(line);
//   const time = (wordCount / 225) * 60;
//   return (Math.round(time * 100) / 100) * 1000;
// }


// // Elements
// const allElements = document.querySelectorAll('*');
// const allElementsArray = Array.from(allElements);
// const [elements] = [allElementsArray];

// const allPagesCollection = document.getElementsByTagName('div');
// const allPagesArray = Array.from(allPagesCollection);
// export const [pages] = [allPagesArray];

// const allWordsCollection = document.getElementsByTagName('span');
// const allWordsArray = Array.from(allWordsCollection);
// export const [words] = [allWordsArray];

// // Attaches reading times to each line object (probably not going to work!)
// allLinesArray.forEach((line) => {
//   line.readingTime = getLineReadingTimes(line);
// });
