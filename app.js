let wordsArray = [];

let str = "Tourettic Text";

// Create array of words
wordsArray = str.split(/(\s+)/);

for (let i = 0; i < 2; i++) {
	const div = document.createElement("div");
	div.id = [i];
	div.className = "words";
	div.textContent = wordsArray[i];

	document.body.appendChild(div);
}

const firstWord = document.getElementById("0");
const weight = firstWord.animate(
	[
		{ fontVariationSettings: `"wght" 47, "wdth" 100, "ital" 0, "cont" 0` },
		{ fontVariationSettings: `"wght" 900, "wdth" 100, "ital" 0, "cont" 0` },
	],
	{
		id: "animaWeight",
		delay: 0,
		direction: "alternate",
		duration: 1000,
		easing: "cubic-bezier(0.87, 0, 0.13, 1)",
		endDelay: 0,
		fill: "none",
		iterationStart: 0.0,
		iterations: Infinity,
		composite: "replace",
		iterationComposite: "replace",
	}
);
// wdth Range: 60 - 140
const width = firstWord.animate(
	[
		{ fontVariationSettings: `"wght" 47, "wdth" 60, "ital" 0, "cont" 0` },
		{ fontVariationSettings: `"wght" 900, "wdth" 140, "ital" 0, "cont" 0` },
	],
	{
		id: "animaWidth",
		delay: 0,
		direction: "alternate",
		duration: 2000,
		easing: "cubic-bezier(0.87, 0, 0.13, 1)",
		endDelay: 300,
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
		{ fontVariationSettings: `"wght" 47, "wdth" 60, "ital" 12, "cont" 0` },
		{ fontVariationSettings: `"wght" 900, "wdth" 140, "ital" 0, "cont" 0` },
	],
	{
		id: "animaItalics",
		delay: 4000,
		direction: "alternate",
		duration: 3000,
		easing: "cubic-bezier(0.87, 0, 0.13, 1)",
		endDelay: 0,
		fill: "none",
		iterationStart: 0.0,
		iterations: Infinity,
		composite: "add",
		iterationComposite: "replace",
	}
);
// cont Range: 0 - 100
const contrast = firstWord.animate(
	[
		{ fontVariationSettings: `"wght" 200, "wdth" 60, "ital" 12, "cont" 100` },
		{ fontVariationSettings: `"wght" 900, "wdth" 140, "ital" 0, "cont" 0` },
	],
	{
		id: "animaContrast",
		delay: 0,
		direction: "alternate",
		duration: 2300,
		easing: "cubic-bezier(0.83, 0, 0.17, 1)",
		endDelay: 300,
		fill: "none",
		iterationStart: 0.0,
		iterations: Infinity,
		composite: "add",
		iterationComposite: "replace",
	}
);

width.startTime = weight.startTime + 3000;
italics.startTime = weight.startTime + 500;
// contrast.startTime = weight.startTime + 1500;

weight.playbackRate = 5;
width.playbackRate = 2.5;
italics.playbackRate = 3;
contrast.playbackRate = 1;

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
