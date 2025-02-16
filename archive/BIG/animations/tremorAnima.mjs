let wrds = document.getElementsByClassName("words");
let wordsArray = [];

let str = `My teachers look at me funny when I make weird noises, but my friends, they usually just laugh. It's funny
to them, and they are pretty cool about it — they don't make fun of me really, but only get a kick out of
it — like when we are in the middle of a test or something, and then out of nowhere I let out a bark, I mean
a loud bark, where everyone turns around to me and smiles, and then someone starts laughing, and then
everyone else gets going. To tell you the truth, it doesn't bother me at all, and I laugh right along with
them most of the time.`

// Create array of words
// wordsArray = str.split(/(\s+)/);
wordsArray = str.split(/(\s+)/);

// Create a container element to hold the divs
const container = document.createElement('div');
container.id = "container";

// Loop through the array
for (let i = 0; i < wordsArray.length; i++) {
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


// NOTE: Ikcarus font is in beta and "wght" axis min seems to be 200
// {"tag":"wght","minValue":47,"defaultValue":200,"maxValue":900,"name":{}}
// {"tag":"wdth","minValue":60,"defaultValue":60,"maxValue":140,"name":{}}
// {"tag":"ital","minValue":0,"defaultValue":0,"maxValue":12,"name":{}}
// {"tag":"cont","minValue":0,"defaultValue":100,"maxValue":100,"name":{}}

// const allAxesText = document
//   .getElementById("226")
//   .animate(
//     [
//       { fontVariationSettings: `"wght" 200, "wdth" 60, "ital" 0, "cont" 0` },
//       { fontVariationSettings: `"wght" 900, "wdth" 140, "ital" 12, "cont" 100` },
//     ],
//     {
//       id: "allAxesText01",
//       duration: 1000,
//       iterations: Infinity,
//       easing: "cubic-bezier(0.42, 0, 0.58, 1)",
//       direction: "alternate"
//     },
//   );
// // allAxesText.pause();

const tremor = document
  .getElementById("container")
  .animate(
    [
      { transform: "translateX(-0.32px)" },
      { transform: "translateX(0.32px)" },
    ],
    {
      id: "baseTremor",
      duration: 100,
      iterations: Infinity,
      easing: "linear",
      direction: "alternate"
    },
  );
// tremor.pause();
