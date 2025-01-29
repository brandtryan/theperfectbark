
const template = document.createElement("template")
template.innerHTML = `
  <style>
    :host {
      display: block;
    }
    .word {
      border: 1px solid orangered;
    }
  </style>
  <span class="word"><slot name="word"></span></div>
`;

class WordElement extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.append(template.content.cloneNode(true));
  };
}

customElements.define('word-element', WordElement);


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
