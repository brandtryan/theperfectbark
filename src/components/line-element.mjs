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
      padding: 0;
      border: 1px solid lavender;
    }
    .right {
      grid-area: right;
      border: 2px dotted cornflowerblue;
    }
    p ::slotted(span) {
      border: 1px dashed orangered;
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
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.append(template.content.cloneNode(true));
  };

  //define the allowed attributes
  static get observedAttributes() {
    return ['id', 'wordCount', 'readTime'];
  }
  //
  //sync attributes with properties as you want
  get id() {
    return this.getAttribute('id');
  }
  set id(value) {
    this.setAttribute('id', value);
  }

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
  //
  //handle values and changes to the attribute
  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName === 'id') {

    }
    if (attrName === 'wordCount') {

    }
    if (attrName === 'readTime') {

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
