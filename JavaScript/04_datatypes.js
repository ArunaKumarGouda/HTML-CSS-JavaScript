let x;
console.log(x, typeof x);

{
    let x;
    x = null;
    console.log(x, typeof x);
}

{
    let x = BigInt("12341");
    console.log(x);
    console.log("the type of x is: ", typeof x);
}
 
{
    let x = "Aruna Kumar Gouda";
    console.log(x," ", "type is: ", typeof "x");
}

{
    y = Symbol("Hello!");
    console.log(y, typeof y);
}
