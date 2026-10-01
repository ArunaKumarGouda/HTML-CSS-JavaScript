// selecting with id.
let heading = document.getElementById("heading1");
console.dir(heading);
console.log(heading);

let button = document.getElementById("button");
console.dir(button);

// selecting with class
let classes = document.getElementsByClassName("heading-class");
console.dir(classes);

// selecting with tag
let tags = document.getElementsByTagName("p");
console.dir(tags);

// Query Selector
let firstElements = document.querySelector("h1");    // return first element
console.dir(firstElements);

let allElements = document.querySelectorAll("h1");
console.dir(allElements);

let classSelector = document.querySelectorAll(".heading-class");    // return first element
console.dir(classSelector);

let idSelector = document.querySelector("#heading1");    // return first element
console.dir(idSelector);
