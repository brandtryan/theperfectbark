import { incoming } from "./hiccup.js";
import { serialize } from "@thi.ng/hiccup";

const html = serialize(incoming);

const app = document.getElementById("app");
app.innerHTML = html;

const wordsArray = Array.from(document.querySelectorAll(".word"));

const wordCoordinates = [];

for (let word of wordsArray) {
	const rect = word.getBoundingClientRect();
	wordCoordinates.push({
		id: word.id,
		x: rect.x,
		y: rect.y,
		width: rect.width,
		height: rect.height,
	});
}

console.log(wordCoordinates);
