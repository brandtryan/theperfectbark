const template = document.createElement("template")
template.innerHTML = `
  <style>
    :host {
      display: block;
      grid-template-columns: 1fr 38ch 1fr;
      grid-template-areas: "left paragraph right";
      margin: 0;
      padding: 0;
    }
    .left {
      grid-area: left;
      place-self: left;
      border: 2px dotted cornflowerblue;
    }
    .paragraph {
      grid-area: paragraph;
      place-self: center;
      white-space: nowrap;
      overflow: visible;
      border: 1px solid lavender;
    }
    .right {
      grid-area: right;
      place-self: right;
      border: 2px dotted cornflowerblue;
    }
  </style>
  <p class="center"><slot name='paragraph'></slot></p>
`;

class LineElement extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.append(template.content.cloneNode(true));
  };
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
