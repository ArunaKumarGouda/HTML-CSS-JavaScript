// creating new button

let newBtn = document.createElement("button");
newBtn.innerText = "Click me";
console.log(newBtn);

let div = document.querySelector("div");
div.append(newBtn);     // node.append(el): adds the end of node (inside).
div.prepend(newBtn);    // node.prepend(el): adds at the start of the node (inside).
div.before(newBtn);     // node.before(el): adds before the node (outside).
div.after(newBtn);      // node.after(el): adds after the node (outside).

// adding style using JS
newBtn.style.color = "red";
newBtn.style.backgroundColor = "black";


// creating a new heading.

let newHeading = document.createElement("h3");
newHeading.innerText = "This is a new heading";
console.log(newHeading);

newHeading.style.color = "blue";

let div1 = document.querySelector("div").append(newHeading);

// let c = div.innerText;
// div.remove(c);       // node.remove(el): removes the node.

// console.log(div.innerText)
