// The change in the state of an object is known as an Event.
// Events are fired to notify code of "interesting changes" that may affect the code execution.

let btn = document.querySelector("#btn1");

btn.onclick = () => {
    console.log("button was clicked");
    let a = 25;
    a++;
    console.log(a); // 26
}

let div = document.querySelector("#div1");
div.onmouseover = () => {
    console.log("you are inside div");
}
