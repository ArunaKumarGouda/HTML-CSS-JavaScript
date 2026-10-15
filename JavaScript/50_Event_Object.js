// Event Object: 
// It is a special object that has details about the event.
// All event handlers have access to the Event Object's properties and methods.

let btn1 = document.querySelector("#btn1");

btn1.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
};

let div = document.querySelector("#div1");

div.onmouseover = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
}
