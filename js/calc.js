import { one, two, three } from './nums.js';
import { plus } from './operations.js';

//Try different variations between 1 and 10

console.log("one(plus(one())) returns", one(plus(one())))

//add sound to button
let click = new Audio("Button-click-sound-effect.mp3");
let buttons = document.querySelectorAll("button")
let equalButton = document.querySelector("button.equals");
//input screen
let inputString = document.querySelector("input");
let calcString = ""; 

buttons.forEach(button =>{ 
    button.addEventListener("click", (e) =>{ 
        click.play()
     let buttonNumber =  e.target.innerHTML;
     //prevent equal to be added to string 
     if(buttonNumber === equalButton.innerHTML){
         return "";
     } else {
        //show new calcString to input screen 
        addNumbersToScreen(buttonNumber) 
     }
    });
});

//Add Final value to screen and cheat the math with Eval
equalButton.addEventListener("click", () => { 
    //cheat the math with eval()
    //update screen with final value
    inputString.value = eval(calcString); 
});
 
//updateInputScreen 
const addNumbersToScreen = (number) => { 
    calcString += number;
    inputString.value = calcString;
}
//detect new text on input
inputString.addEventListener("input", (e) => console.log(e.target.value));

console.log(inputString);