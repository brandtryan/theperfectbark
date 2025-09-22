import { incoming } from "./hiccup.js";
import { serialize } from "@thi.ng/hiccup";

const html = serialize(incoming);

const app = document.getElementById("app");
app.innerHTML = html;

console.log("App initialized");
console.log("Serialized HTML:", html);
console.log("Incoming Hiccup Data:", incoming);
