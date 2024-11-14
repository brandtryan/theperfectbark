const breathFrames = [
  { fontVariationSettings: `"wght" 100, "wdth" 75, "slnt" 0` },
  { fontVariationSettings: `"wght" 900, "wdth" 125, "slnt" -12` },
];

const breathTiming = {
  id: 'breath',
  delay: 100,
  direction: 'normal',
  duration: 1000,
  fill: 'none',
  easing: 'cubic-bezier(0.45, 0, 0.55, 1)',
  iterationStart: 0.0,
  iterations: '3',
  composite: 'replace',
  iterationComposite: 'replace',
};

const p001 = document.getElementById('p001');

p001.animate(breathFrames, breathTiming);

function generateLoremIpsumParagraph(paragraphCount) {
  const loremIpsum =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  const words = loremIpsum.split(' ');
  let result = '';

  for (let i = 0; i < paragraphCount; i++) {
    for (let j = 0; j < 10; j++) {
      // Adjust the number of words per line
      result += words[i * 10 + j] + ' ';
    }
    result += '\n';
  }

  return result.trim();
}

// // Example usage:
// generateLoremIpsumParagraph(3);

// const x = generateLoremIpsumParagraph(3);
// const paragraph = document.createElement('p');
// const myDiv = document.getElementById('container');
// paragraph.textContent = x;
// myDiv.appendChild(paragraph);
