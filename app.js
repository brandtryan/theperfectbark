
// Create a container element to hold the divs
const container = document.createElement('div');
container.id = "container";

// Create a div element for each element in the array
const div = document.createElement('div');
// Give each new div element a unique id
div.id = "0";
// Give each new div element the words class
div.className = "words";
// Set the text content of the div to the current element
div.textContent = "Tourettic";

// Append the div to the container
container.appendChild(div);

// Now you can append the container to the desired location in your HTML document
document.body.appendChild(container);


// NOTE: Ikcarus font is in beta and "wght" axis min seems to be 200
// {"tag":"wght","minValue":47,"defaultValue":200,"maxValue":900,"name":{}}
// {"tag":"wdth","minValue":60,"defaultValue":60,"maxValue":140,"name":{}}
// {"tag":"ital","minValue":0,"defaultValue":0,"maxValue":12,"name":{}}
// {"tag":"cont","minValue":0,"defaultValue":100,"maxValue":100,"name":{}}

const allAxesText = document
  .getElementById("0")
  .animate(
    [
      { fontVariationSettings: `"wght" 200, "wdth" 60, "ital" 0, "cont" 0` },
      { fontVariationSettings: `"wght" 900, "wdth" 140, "ital" 12, "cont" 100` },
    ],
    {
      id: "allAxesText01",
      duration: 1000,
      iterations: Infinity,
      easing: "cubic-bezier(0.42, 0, 0.58, 1)",
      direction: "alternate"
    },
  );
// allAxesText.pause();

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
