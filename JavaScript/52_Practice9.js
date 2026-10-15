// Q: Create a toggle button that changes the screen to dark-mode when clicked and light mode when clicked again.

let modeBtn = document.querySelector("#mode");

modeBtn.style.color = "black";
modeBtn.style.backgroundColor = "red";

// let mode = "light";
// modeBtn.addEventListener("click", () => {
//     if(mode == "light") {
//         mode = "dark";
//         document.querySelector("body").style.backgroundColor = "black";
//     } else {
//         mode = "light";
//         document.querySelector("body").style.backgroundColor = "white";
//     }
//     console.log(mode);
// });

let mode = "light";
modeBtn.onclick = () => {
    if(mode == "light") {
        mode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    } else if(mode == "dark") {
        mode = "green";
        document.querySelector("body").style.backgroundColor = "green";
    }
    else {
        mode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(mode);
}
