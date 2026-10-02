// getAttribute

let buttons = document.querySelector    ("button");
console.log(buttons);

let id = buttons.getAttribute("id");
console.log(id);

let name = buttons.getAttribute("name")
console.log(name);

// setAttibute

let para = document.querySelector("p");
console.log(para);

console.log(para.setAttribute("name", "new class"));
