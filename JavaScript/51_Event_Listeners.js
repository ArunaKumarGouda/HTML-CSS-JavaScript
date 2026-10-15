// Note: the callback reference should be same to remove.

let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", () => {
    console.log("button was clicked - hander1");
});

btn1.addEventListener("click", () => {
    console.log("button was clicked - handler2");
});

const handler3 = () => {
    console.log("button was clicked - handler3");
}
btn1.addEventListener("click", handler3);

btn1.addEventListener("click", () => {
    console.log("button was clicked - handler4");
});

btn1.removeEventListener("click", handler3);
