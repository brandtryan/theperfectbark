
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

const myText = document.getElementById("0");
function randomizeText() {
  randomWeight = Math.random() * (900 - 200) + 200;
  randomWidth = Math.random() * (140 - 60) + 60;
  randomItalics = Math.random() * (12 - 0) + 0;
  randomContrast = Math.random() * (100 - 0) + 0;
  myText.style.fontVariationSettings = "\"wght\" " + randomWeight + ", \"wdth\" " + randomWidth + ", \"ital\" " + randomItalics + ", \"cont\" " + randomContrast;
}

setInterval(randomizeText, 140);
