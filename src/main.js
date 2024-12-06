import './modules/style.module.css';
import './modules/normalize.module.css';
import { htmlString } from './modules/data/htmlString.mjs';

const html = htmlString;

const content = document.createElement('div');
content.id = 'content';
content.innerHTML = html;
const app = document.getElementById('app');
app.appendChild(content);

const introParagraph = document.getElementById('p00');
introParagraph.setAttribute('class', 'intro');

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
