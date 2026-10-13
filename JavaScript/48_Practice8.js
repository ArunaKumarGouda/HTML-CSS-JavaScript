// Q1: Create a new button element. Give it a text "click me", background color red and text color white
// insert the button as the first element inside the body tag.

let newBtn = document.createElement("button");
newBtn.innerText = "click me";
console.log(newBtn);

newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";

let body = document.querySelector("body");
body.prepend(newBtn);


// Q2: Create a <p> tag in html, give it a class and some styling.
// Now create a new class in css and try to append this class to the <p> element.
// Did you notice how you overwrite the class name when you add a new one?
// Solve this problem using classList.

let para = document.querySelector(".content");
console.log(para.classList.add("newClass"));

// classList.add: add a new class.
// classList.remove: remove a class.
