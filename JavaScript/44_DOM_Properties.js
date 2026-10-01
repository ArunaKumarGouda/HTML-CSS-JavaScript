// tagName: returns tag for element nodes.

let buttons = document.getElementById("button");
console.log(buttons);

console.log(buttons.tagName);


console.dir(document.body.firstChild);
console.dir(document.body.lastChild);

console.log(document.querySelector("div").children);


// innerText: returns the text content of the element and all its children.
let div = document.querySelector("div");
console.dir(div.innerText);

// innerHTML: returns the plain text or HTML contents in the element.
let div1 = document.querySelector("div");
console.log(div1.innerHTML);

// textContent: returns textual content even for hidden elements.
let div2 = div.textContent = "abcd";
console.dir(div2);
