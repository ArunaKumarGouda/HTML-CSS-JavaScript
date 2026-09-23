// Functions: Block of code that perform a specific task, can be invoked whenever needed.

function myFunction() {
    console.log("Welcome to JavaScript Tutorial");
    console.log("Thank You");
}

myFunction();

function func(msg, n) {    // msg: function parameter.
    console.log(msg, n);
}
func("I Love JS", 10);      // function argument / function call

{
    // add two number using function

    function sum(a, b) {
        console.log("add =", a + b);
    }
    sum(2, 3);
};

{
    // using return statement in function.
    function sum(a, b) {
        s = a + b;
        console.log("Before return");
        return s;
        console.log("After return");
    }

    let result = sum(4, 6);
    console.log(result);
};
