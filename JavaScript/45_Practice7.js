// Q1: Create a H2 heading element with text - "hello JavaScript".Append "from GIET students" to this text using js.

let h1 = document.querySelector("h1");
console.dir(h1.innerText);

h1.innerText = h1.innerText + "from GIET students";
console.dir(h1.innerText);



// Q2: Create 3 divs with common class name - "box". Access them and add some unique text to each of them.

let divs = document.querySelectorAll(".box");

let index = 1;
for(let div of divs) {
    console.log(div.innerText);
    div.innerText = "New Unique Value " + index;
    console.log(div.innerText);
    index ++;
}

// console.log(divs[0]);
// console.log(divs[1]);
// console.log(divs[2]);

// divs[0].innerText = "New Unique value 0"; 
// divs[1].innerText = "New Unique value 1"; 
// divs[2].innerText = "New Unique value 2"; 

