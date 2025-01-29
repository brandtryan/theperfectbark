const template = document.createElement("template")
template.innerHTML = `
  <style>
    :host {
      display: grid;
      grid-template-columns: auto 38ch auto;
      grid-template-rows: 2ch max-content;
      grid-template-areas: "left center right";
      width: 100cqw;
    }
    .left {
      grid-area: left;
      place-self: left;
      color: rgba(255, 255, 255, 0.9);
      border: 2px dotted cornflowerblue;
    }
    .line {
      grid-area: center;
      place-self: center;
      white-space: nowrap;
      overflow: visible;
      border: 1px solid cornflowerblue;
    }
    .right {
      grid-area: right;
      place-self: right;
      color: rgba(255, 255, 255, 0.9);
      border: 2px dotted cornflowerblue;
      text-align: right;
    }
  </style>
  <div class="line"><slot name="line"></slot></div>
  <div class="line"><slot name="line"></slot></div>
  <div class="line"><slot name="line"></slot></div>
  <div class="line"><slot name="line"></slot></div>
  <div class="line"><slot name="line"></slot></div>
  <div class="line"><slot name="line"></slot></div>
  <div class="line"><slot name="line"></slot></div>
  <div class="line"><slot name="line"></slot></div>
  <div class="line"><slot name="line"></slot></div>
  <div class="line"><slot name="line"></slot></div>
  <div class="line"><slot name="line"></slot></div>
  <div class="line"><slot name="line"></slot></div>
  <div class="line"><slot name="line"></slot></div>
  <div class="line"><slot name="line"></slot></div>
  <div class="line"><slot name="line"></slot></div>
  <div class="line"><slot name="line"></slot></div>
  <div class="line"><slot name="line"></slot></div>
  <div class="line"><slot name="line"></slot></div>
`;

class PageComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.append(template.content.cloneNode(true));
  };
}

customElements.define('page-component', PageComponent);


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
