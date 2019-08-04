import { one, two, three } from './nums.js';
import { plus } from './operations.js';

//Try different variations between 1 and 10

console.log("one(plus(one())) returns", one(plus(one())))

//add sound to button
let click = new Audio("/Button-click-sound-effect.mp3");
let buttons = document.querySelectorAll("button")

buttons.forEach(button => button.addEventListener("click", () => click.play()));