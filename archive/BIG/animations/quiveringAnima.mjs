let wrds = document.getElementsByClassName("words");
let wordsArray = [];

let str = "Tourettic Text"

// Create array of words
wordsArray = str.split(/(\s+)/);

// Create a container element to hold the divs
const container = document.createElement('div');
container.id = "container";

// Loop through the array
for (let i = 0; i < 2; i++) {
  // Create a div element for each element in the array
  const div = document.createElement('div');
  // Give each new div element a unique id
  div.id = [i];
  // Give each new div element the words class
  div.className = "words";
  // Set the text content of the div to the current element
  div.textContent = wordsArray[i];

  // Append the div to the container
  container.appendChild(div);
}
// Now you can append the container to the desired location in your HTML document
document.body.appendChild(container);

const firstWord = document.getElementById("0");
// const secondWord = document.getElementById("1");

// const tremor = container.animate(
//   [
//     { transform: "translateX(-0.32px)" },
//     { transform: "translateX(0.32px)" },
//   ],
//   {
//     id: "baseTremor",
//     duration: 100,
//     iterations: Infinity,
//     easing: "linear",
//     direction: "alternate"
//   },
// );

// {"tag":"wght","minValue":47,"defaultValue":200,"maxValue":900,"name":{}}
// {"tag":"wdth","minValue":60,"defaultValue":60,"maxValue":140,"name":{}}
// {"tag":"ital","minValue":0,"defaultValue":0,"maxValue":12,"name":{}}
// {"tag":"cont","minValue":0,"defaultValue":100,"maxValue":100,"name":{}}




// wght Range: 200 - 900
const weight = firstWord.animate(
  [
    { fontVariationSettings: `"wght" 47, "wdth" 100, "ital" 0, "cont" 0` },
    { fontVariationSettings: `"wght" 150, "wdth" 100, "ital" 0, "cont" 0` }
  ],
  {
    id: "animaWeight",
    delay: 0,
    direction: "alternate",
    duration: 1000,
    // easing: "linear(0, 0.5 50%, 1)",
    easing: "cubic-bezier(0.1, -0.6, 0.2, 0)",
    endDelay: 0,
    fill: "none",
    iterationStart: 0.0,
    iterations: Infinity,
    composite: "add",
    iterationComposite: "replace"
  }
);
// wdth Range: 60 - 140
const width = firstWord.animate(
  [
    { fontVariationSettings: `"wght" 47, "wdth" 60, "ital" 0, "cont" 0` },
    { fontVariationSettings: `"wght" 900, "wdth" 140, "ital" 0, "cont" 0` }
  ],
  {
    id: "animaWidth",
    delay: 0,
    direction: "alternate",
    duration: 1000,
    // easing: "cubic-bezier(0.87, 0, 0.13, 1)",
    easing: "cubic-bezier(0.1, -0.6, 0.2, 0)",
    endDelay: 0,
    fill: "none",
    iterationStart: 0.0,
    iterations: Infinity,
    composite: "add",
    iterationComposite: "replace",
  }
);
// ital Range: 0 - 12
const italics = firstWord.animate(
  [
    { fontVariationSettings: `"wght" 47, "wdth" 60, "ital" 0, "cont" 0` },
    { fontVariationSettings: `"wght" 150, "wdth" 140, "ital" 12, "cont" 0` }
  ],
  {
    id: "animaItalics",
    delay: 0,
    direction: "alternate",
    duration: 50,
    // easing: "cubic-bezier(0.87, 0, 0.13, 1)",
    easing: "linear",
    endDelay: 0,
    fill: "none",
    iterationStart: 0.0,
    iterations: Infinity,
    composite: "add",
    iterationComposite: "replace"
  }
);
// cont Range: 0 - 100
const contrast = firstWord.animate(
  [
    { fontVariationSettings: `"wght" 200, "wdth" 60, "ital" 12, "cont" 0` },
    { fontVariationSettings: `"wght" 900, "wdth" 140, "ital" 0, "cont" 100` }
  ],
  {
    id: "animaContrast",
    delay: 0,
    direction: "alternate",
    duration: 1000,
    easing: "cubic-bezier(0.83, 0, 0.17, 1)",
    endDelay: 300,
    fill: "none",
    iterationStart: 0.0,
    iterations: Infinity,
    composite: "add",
    iterationComposite: "replace"
  }
);


// width.startTime = weight.startTime + 3000;
// italics.startTime = weight.startTime + 500;
// contrast.startTime = weight.startTime + 1500;

// weight.playbackRate = 2;
// width.playbackRate = 0.5;
// italics.playbackRate = 5;
// contrast.playbackRate = 2;

// weight.pause()
// width.pause()
// italics.pause()
// contrast.pause()

// weight.cancel()
width.cancel()
// italics.cancel()
contrast.cancel()
