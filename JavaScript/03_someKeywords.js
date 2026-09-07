var a = 12;
var a = 37;
var a = 58;     // var: variable can be re-declared and updated. A global scope variable.
console.log(a);

let b = 19;
b = 49;
b = 20;         // let: variabel cannot be re-declared but can be updated. A block scope variable.
console.log(b);

const pi = 3.141;  // const: variable cannot be re-declared or updated. A block scope variable.
console.log(pi);

let d;
d = 10;
console.log(d);

{
    let a = 10;
    console.log(a);
}
{
    let a = 60;
    console.log(a);
}
