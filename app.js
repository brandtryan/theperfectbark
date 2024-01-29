// let fvss = "";
// let x = 0;

// let fvar = [
//   { "tag": "wght", "minValue": 200, "defaultValue": 200, "maxValue": 900, "name": { "en": "wght" } },
//   { "tag": "wdth", "minValue": 60, "defaultValue": 60, "maxValue": 140, "name": { "en": "wdth" } },
//   { "tag": "ital", "minValue": 0, "defaultValue": 0, "maxValue": 12, "name": { "en": "ital" } },
//   { "tag": "cont", "minValue": 0, "defaultValue": 100, "maxValue": 100, "name": { "en": "cont" } }
// ]

let wordArray1 = [];
let wordArray2 = [];
let wordArray3 = [];
let wordArray4 = [];
let wordArray5 = [];
let wordArray6 = [];
let wordArray7 = [];
let wordArray8 = [];
let wordArray9 = [];
let wordArray10 = [];

// Create a container element to hold the LINE divs
const container = document.createElement('div');
container.className = "container";

// Now you can append the container to the desired location in your HTML document
document.body.appendChild(container);

// Loop to create LINE divs
for (let i = 1; i < 11; i++) {
  // Create a div element for each line
  const div = document.createElement('div');
  // Give each new LINE div a unique id
  div.id = "ln" + [i];
  // Give each new LINE div the line-container class
  div.className = "line-container";
  // Append the LINE divs to the container
  container.appendChild(div);
}
// Create strings for each line
let str1 = `My teachers look at me funny when I make weird noises,`
let str2 = `but my friends, they usually just laugh. It's funny to them,`
let str3 = `and they are pretty cool about it – they don't make fun of`
let str4 = `me really, but only get a kick out of it – like when we are in`
let str5 = `the middle of a test or something and then out of nowhere`
let str6 = `I let out a bark – I mean a loud bark – where everyone turns`
let str7 = `around to me and smiles, and then someone starts laughing`
let str8 = `and then everyone else gets going. To tell you the truth it`
let str9 = `doesn't bother me at all and I laugh right along with them`
let str10 = `most of the time.`

// Create array of words for each line from line strings

wordArray1 = str1.split(/(\s+)/);
wordArray2 = str2.split(/(\s+)/);
wordArray3 = str3.split(/(\s+)/);
wordArray4 = str4.split(/(\s+)/);
wordArray5 = str5.split(/(\s+)/);
wordArray6 = str6.split(/(\s+)/);
wordArray7 = str7.split(/(\s+)/);
wordArray8 = str8.split(/(\s+)/);
wordArray9 = str9.split(/(\s+)/);
wordArray10 = str10.split(/(\s+)/);

// Loop through each word in Line 1
for (let i = 0; i < wordArray1.length; i++) {
  // Create a div element in the array
  const div = document.createElement('div');
  // Give each new div element a unique id
  div.id = "ln1w" + [i];
  // Give each new div element the word class
  div.className = "word";
  // Set the text content of the div to the current element
  div.textContent = wordArray1[i];
  // Append the div to the container
  ln1.appendChild(div);
}
// Loop through each word Line 2
for (let i = 0; i < wordArray2.length; i++) {
  // Create a div element for each element in Line 2
  const div = document.createElement('div');
  // Give each new div element a unique id
  div.id = "ln2w" + [i];
  // Give each new div element the word class
  div.className = "word";
  // Set the text content of the div to the current element
  div.textContent = wordArray2[i];
  // Append the div to the container
  ln2.appendChild(div);
}
// Loop through each word Line 3
for (let i = 0; i < wordArray3.length; i++) {
  // Create a div element for each element in Line 2
  const div = document.createElement('div');
  // Give each new div element a unique id
  div.id = "ln3w" + [i];
  // Give each new div element the word class
  div.className = "word";
  // Set the text content of the div to the current element
  div.textContent = wordArray3[i];
  // Append the div to the container
  ln3.appendChild(div);
}
// Loop through each word Line 4
for (let i = 0; i < wordArray4.length; i++) {
  // Create a div element for each element in Line 2
  const div = document.createElement('div');
  // Give each new div element a unique id
  div.id = "ln4w" + [i];
  // Give each new div element the word class
  div.className = "word";
  // Set the text content of the div to the current element
  div.textContent = wordArray4[i];
  // Append the div to the container
  ln4.appendChild(div);
}
// Loop through each word Line 5
for (let i = 0; i < wordArray5.length; i++) {
  // Create a div element for each element in Line 2
  const div = document.createElement('div');
  // Give each new div element a unique id
  div.id = "ln5w" + [i];
  // Give each new div element the word class
  div.className = "word";
  // Set the text content of the div to the current element
  div.textContent = wordArray5[i];
  // Append the div to the container
  ln5.appendChild(div);
}
// Loop through each word Line 6
for (let i = 0; i < wordArray6.length; i++) {
  // Create a div element for each element in Line 2
  const div = document.createElement('div');
  // Give each new div element a unique id
  div.id = "ln6w" + [i];
  // Give each new div element the word class
  div.className = "word";
  // Set the text content of the div to the current element
  div.textContent = wordArray6[i];
  // Append the div to the container
  ln6.appendChild(div);
}
// Loop through each word Line 7
for (let i = 0; i < wordArray7.length; i++) {
  // Create a div element for each element in Line 2
  const div = document.createElement('div');
  // Give each new div element a unique id
  div.id = "ln7w" + [i];
  // Give each new div element the word class
  div.className = "word";
  // Set the text content of the div to the current element
  div.textContent = wordArray7[i];
  // Append the div to the container
  ln7.appendChild(div);
}
// Loop through each word Line 8
for (let i = 0; i < wordArray8.length; i++) {
  // Create a div element for each element in Line 2
  const div = document.createElement('div');
  // Give each new div element a unique id
  div.id = "ln8w" + [i];
  // Give each new div element the word class
  div.className = "word";
  // Set the text content of the div to the current element
  div.textContent = wordArray8[i];
  // Append the div to the container
  ln8.appendChild(div);
}
// Loop through each word Line 9
for (let i = 0; i < wordArray9.length; i++) {
  // Create a div element for each element in Line 2
  const div = document.createElement('div');
  // Give each new div element a unique id
  div.id = "ln9w" + [i];
  // Give each new div element the word class
  div.className = "word";
  // Set the text content of the div to the current element
  div.textContent = wordArray9[i];
  // Append the div to the container
  ln9.appendChild(div);
}
// Loop through each word Line 10
for (let i = 0; i < wordArray10.length; i++) {
  // Create a div element for each element in Line 2
  const div = document.createElement('div');
  // Give each new div element a unique id
  div.id = "ln10w" + [i];
  // Give each new div element the word class
  div.className = "word";
  // Set the text content of the div to the current element
  div.textContent = wordArray10[i];
  // Append the div to the container
  ln10.appendChild(div);
}
// Create random number generator
function randomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};
// Create common keyframes for demo of sample words animations
const keyframes = [
  { fontVariationSettings: `"wdth" ${randomNum(60, 100)}` },
  { fontVariationSettings: `"wdth" ${randomNum(101, 140)}` },
];
// Create timings for each sample word animation to offset each animations start time
const timing0 = {
  id: "animaWidth",
  delay: 0,
  direction: "alternate",
  duration: 300,
  easing: "cubic-bezier(0.37, 0, 0.63, 1)",
  endDelay: 0,
  fill: "none",
  iterationStart: 0.0,
  iterations: 1.5,
  composite: "add",
  iterationComposite: "replace"
};
const timing1 = {
  id: "animaWidth",
  delay: 1500,
  direction: "alternate",
  duration: 300,
  easing: "cubic-bezier(0.65, 0, 0.35, 1)",
  endDelay: 0,
  fill: "none",
  iterationStart: 0.0,
  iterations: 1.5,
  composite: "add",
  iterationComposite: "replace"
};
const timing2 = {
  id: "animaWidth",
  delay: 3000,
  direction: "alternate",
  duration: 300,
  easing: "cubic-bezier(0.83, 0, 0.17, 1)",
  endDelay: 0,
  fill: "none",
  iterationStart: 0.0,
  iterations: 1.5,
  composite: "add",
  iterationComposite: "replace"
};
const timing3 = {
  id: "animaWidth",
  delay: 4500,
  direction: "alternate",
  duration: 300,
  easing: "cubic-bezier(0.85, 0, 0.15, 1)",
  endDelay: 0,
  fill: "none",
  iterationStart: 0.0,
  iterations: 1.5,
  composite: "add",
  iterationComposite: "replace"
};
const timing4 = {
  id: "animaWidth",
  delay: 6000,
  direction: "alternate",
  duration: 300,
  easing: "cubic-bezier(0.45, 0, 0.55, 1)",
  endDelay: 0,
  fill: "none",
  iterationStart: 0.0,
  iterations: 1.5,
  composite: "add",
  iterationComposite: "replace"
};
const timing5 = {
  id: "animaWidth",
  delay: 7500,
  direction: "alternate",
  duration: 300,
  easing: "cubic-bezier(0.76, 0, 0.24, 1)",
  endDelay: 0,
  fill: "none",
  iterationStart: 0.0,
  iterations: 1.5,
  composite: "add",
  iterationComposite: "replace"
};
const timing6 = {
  id: "animaWidth",
  delay: 9000,
  direction: "alternate",
  duration: 300,
  easing: "cubic-bezier(0.87, 0, 0.13, 1)",
  endDelay: 0,
  fill: "none",
  iterationStart: 0.0,
  iterations: 1.5,
  composite: "add",
  iterationComposite: "replace"
};
const timing7 = {
  id: "animaWidth",
  delay: 10500,
  direction: "alternate",
  duration: 300,
  easing: "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
  endDelay: 0,
  fill: "none",
  iterationStart: 0.0,
  iterations: 1.5,
  composite: "add",
  iterationComposite: "replace"
};
const timing8 = {
  id: "animaWidth",
  delay: 12000,
  direction: "alternate",
  duration: 300,
  easing: "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
  endDelay: 0,
  fill: "none",
  iterationStart: 0.0,
  iterations: 1.5,
  composite: "add",
  iterationComposite: "replace"
};
const timing9 = {
  id: "animaWidth",
  delay: 13500,
  direction: "alternate",
  duration: 300,
  easing: "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
  endDelay: 0,
  fill: "none",
  iterationStart: 0.0,
  iterations: 1.5,
  composite: "add",
  iterationComposite: "replace"
};
const timing10 = {
  id: "animaWidth",
  delay: 15000,
  direction: "alternate",
  duration: 300,
  easing: "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
  endDelay: 0,
  fill: "none",
  iterationStart: 0.0,
  iterations: 1.5,
  composite: "add",
  iterationComposite: "replace"
};
const timing11 = {
  id: "animaWidth",
  delay: 16500,
  direction: "alternate",
  duration: 300,
  easing: "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
  endDelay: 0,
  fill: "none",
  iterationStart: 0.0,
  iterations: 1.5,
  composite: "add",
  iterationComposite: "replace"
};
const timing12 = {
  id: "animaWidth",
  delay: 18000,
  direction: "alternate",
  duration: 300,
  easing: "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
  endDelay: 0,
  fill: "none",
  iterationStart: 0.0,
  iterations: 1.5,
  composite: "add",
  iterationComposite: "replace"
};
const timing13 = {
  id: "animaWidth",
  delay: 19500,
  direction: "alternate",
  duration: 300,
  easing: "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
  endDelay: 0,
  fill: "none",
  iterationStart: 0.0,
  iterations: 1.5,
  composite: "add",
  iterationComposite: "replace"
};
const timing14 = {
  id: "animaWidth",
  delay: 21000,
  direction: "alternate",
  duration: 300,
  easing: "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
  endDelay: 0,
  fill: "none",
  iterationStart: 0.0,
  iterations: 1.5,
  composite: "add",
  iterationComposite: "replace"
};
const timing15 = {
  id: "animaWidth",
  delay: 22500,
  direction: "alternate",
  duration: 300,
  easing: "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
  endDelay: 0,
  fill: "none",
  iterationStart: 0.0,
  iterations: 1.5,
  composite: "add",
  iterationComposite: "replace"
};
const timing16 = {
  id: "animaWidth",
  delay: 24000,
  direction: "alternate",
  duration: 300,
  easing: "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
  endDelay: 0,
  fill: "none",
  iterationStart: 0.0,
  iterations: 1.5,
  composite: "add",
  iterationComposite: "replace"
};
const timing17 = {
  id: "animaWidth",
  delay: 25500,
  direction: "alternate",
  duration: 300,
  easing: "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
  endDelay: 0,
  fill: "none",
  iterationStart: 0.0,
  iterations: 1.5,
  composite: "add",
  iterationComposite: "replace"
};
const timing18 = {
  id: "animaWidth",
  delay: 27000,
  direction: "alternate",
  duration: 300,
  easing: "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
  endDelay: 0,
  fill: "none",
  iterationStart: 0.0,
  iterations: 1.5,
  composite: "add",
  iterationComposite: "replace"
};
const timing19 = {
  id: "animaWidth",
  delay: 28500,
  direction: "alternate",
  duration: 300,
  easing: "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
  endDelay: 0,
  fill: "none",
  iterationStart: 0.0,
  iterations: 1.5,
  composite: "add",
  iterationComposite: "replace"
};

const sampleElements = [
  document.getElementById("ln1w0"),
  document.getElementById("ln1w2"),
  document.getElementById("ln2w4"),
  document.getElementById("ln2w8"),
  document.getElementById("ln3w6"),
  document.getElementById("ln3w16"),
  document.getElementById("ln4w2"),
  document.getElementById("ln4w6"),
  document.getElementById("ln5w2"),
  document.getElementById("ln5w12"),
  document.getElementById("ln6w18"),
  document.getElementById("ln6w26"),
  document.getElementById("ln7w0"),
  document.getElementById("ln7w8"),
  document.getElementById("ln8w10"),
  document.getElementById("ln8w20"),
  document.getElementById("ln9w0"),
  document.getElementById("ln9w14"),
  document.getElementById("ln10w0"),
  document.getElementById("ln106"),
];

// Create animations for two sample words per line
const anima0 = sampleElements[0].animate(keyframes, timing0);
const anima1 = sampleElements[1].animate(keyframes, timing1);
const anima2 = sampleElements[2].animate(keyframes, timing2);
const anima3 = sampleElements[3].animate(keyframes, timing3);
const anima4 = sampleElements[4].animate(keyframes, timing4);
const anima5 = sampleElements[5].animate(keyframes, timing5);
const anima6 = sampleElements[6].animate(keyframes, timing6);
const anima7 = sampleElements[7].animate(keyframes, timing7);
const anima8 = sampleElements[8].animate(keyframes, timing8);
const anima9 = sampleElements[9].animate(keyframes, timing9);
const anima10 = sampleElements[10].animate(keyframes, timing10);
const anima11 = sampleElements[11].animate(keyframes, timing11);
const anima12 = sampleElements[12].animate(keyframes, timing12);
const anima13 = sampleElements[13].animate(keyframes, timing13);
const anima14 = sampleElements[14].animate(keyframes, timing14);
const anima15 = sampleElements[15].animate(keyframes, timing15);
const anima16 = sampleElements[16].animate(keyframes, timing16);
const anima17 = sampleElements[17].animate(keyframes, timing17);
const anima18 = sampleElements[18].animate(keyframes, timing18);

// Create array of LINES
const lines = [
  document.getElementById("ln1"),
  document.getElementById("ln2"),
  document.getElementById("ln3"),
  document.getElementById("ln4"),
  document.getElementById("ln5"),
  document.getElementById("ln6"),
  document.getElementById("ln7"),
  document.getElementById("ln8"),
  document.getElementById("ln9"),
  document.getElementById("ln10"),
];
// Create head shake for Line 1
document.getElementById("ln1").animate(
  [
    { transform: "translateX(0px)" },
    { transform: "translateX(-1000px)" },
    { filter: "blur(1.3px)" },
    { transform: "translateX(1000px)" },
    { filter: "blur(1.3px)" },
    { transform: "translateX(-1000px)" },
  ],
  {
    id: "animaWidth",
    delay: 1000,
    direction: "alternate",
    duration: 170,
    endDelay: 0,
    fill: "none",
    iterationStart: 0.0,
    iterations: 2,
    composite: "add",
    iterationComposite: "replace"
  }
);

// Create head shake for Line 4
document.getElementById("ln4").animate(
  [
    { transform: "translateX(0px)" },
    { transform: "translateX(-1000px)" },
    { filter: "blur(1.3px)" },
    { transform: "translateX(1000px)" },
    { filter: "blur(1.3px)" },
    { transform: "translateX(-1000px)" },
  ],
  {
    id: "animaWidth",
    delay: 9000,
    direction: "alternate",
    duration: 170,
    endDelay: 0,
    fill: "none",
    iterationStart: 0.0,
    iterations: 2,
    composite: "add",
    iterationComposite: "replace"
  }
);
// Create second head shake for Line 4
document.getElementById("ln4").animate(
  [
    { transform: "translateX(0px)" },
    { transform: "translateX(-1000px)" },
    { filter: "blur(1.3px)" },
    { transform: "translateX(1000px)" },
    { filter: "blur(1.3px)" },
    { transform: "translateX(-1000px)" },
  ],
  {
    id: "animaWidth",
    delay: 10000,
    direction: "alternate",
    duration: 160,
    endDelay: 0,
    fill: "none",
    iterationStart: 0.0,
    iterations: 2,
    composite: "add",
    iterationComposite: "replace"
  }
);

// Create head shake for Line 9
document.getElementById("ln9").animate(
  [
    { transform: "translateX(0px)" },
    { transform: "translateX(-1000px)" },
    { filter: "blur(1.3px)" },
    { transform: "translateX(1000px)" },
    { filter: "blur(1.3px)" },
    { transform: "translateX(-1000px)" },
  ],
  {
    id: "animaWidth",
    delay: 25000,
    direction: "alternate",
    duration: 170,
    endDelay: 0,
    fill: "none",
    iterationStart: 0.0,
    iterations: 2,
    composite: "add",
    iterationComposite: "replace"
  }
);
// Create second head shake strain for Line 9
document.getElementById("ln9").animate(
  [
    { transform: "translateX(0px)" },
    { transform: "translateX(-1000px)" },
    { filter: "blur(1.3px)" },
    { transform: "translateX(1000px)" },
    { filter: "blur(1.3px)" },
    { transform: "translateX(-1000px)" },
  ],
  {
    id: "animaWidth",
    delay: 25800,
    direction: "alternate",
    duration: 150,
    endDelay: 0,
    fill: "none",
    iterationStart: 0.0,
    iterations: 2,
    composite: "add",
    iterationComposite: "replace"
  }
);


// const animation = sampleElements.map(Element => Element.animate(keyframes, timing));