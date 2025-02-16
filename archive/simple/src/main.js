import { linesArray } from './modules/data/linesArray.mjs';
import { newLinesArray } from './modules/data/newLinesArray.mjs';

const lines = linesArray;

// const lines = newLinesArray;
// const line0 = lines[0];
// console.log(line0);

// const breaks = lines.filter((word) => word.includes('<br>'));
// console.log(breaks);

// const p1 = lines.slice(0, 12).join('<br>');
// const newP1 = p1.replace(/<br>/g, '\n');

// console.log(newP1);

// const p2 = lines.slice(0, 12).join('\n');
// const newP2 = p2.replace(/<br>/g, ' ');

// document.body.onload = addElement;
function addParagraph(text) {
  const newParagraph = document.createElement('p');
  const newSpan = document.createElement('span');
  const newContent = document.createTextNode(text);
  newParagraph.appendChild(newSpan);
  newSpan.appendChild(newContent);
  // const currentParagraph = document.getElementById('p1');
  // document.body.insertBefore(newParagraph, currentParagraph);
  document.body.appendChild(newParagraph);
}

// const result = lines.filter((n) => n === `<br>`).map((n) => (n = '<p>'));
const result = lines.map((item) => {
  return item === `<br>` ? '<p>' : item;
});

result.unshift(`<p>`);

let isPTag = true;

const half = result.map((item) => {
  if (item === '<p>') {
    const tag = isPTag ? '<p>' : '</p>';
    isPTag = !isPTag;
    return tag;
  } else {
    return item;
  }
});
console.log(half.length);

const paragraphArray = half.reduce((acc, item) => {
  acc.push(item);
  if (item === '</p>') {
    acc.push('<p>');
  }
  return acc;
}, []);

const paraSpansArray = paragraphArray.map((item) => {
  if (item !== '<p>' && item !== '</p>') {
    return `<span class="line">${item}</span>`;
  } else {
    return item;
  }
});

console.log(paraSpansArray);

// const breathFrames = [
//   { fontWeight: 200, fontOpticalSize: 12 },
//   { fontWeight: 1000, fontOpticalSize: 72 },
// ];

// const breathTiming = {
//   id: 'breath',
//   delay: 100,
//   direction: 'alternate',
//   duration: 1000,
//   fill: 'none',
//   easing: 'cubic-bezier(0.42, 0, 0.58, 1)',
//   iterationStart: 0.0,
//   iterations: 'Infinity',
//   composite: 'replace',
//   iterationComposite: 'replace',
// };

// document.getElementById('p0-ln0').animate(breathFrames, breathTiming);
