{
    let a = 5;
    let b = 6;
    console.log("a =", a, " & ", "b =", b);

    let cond1 = a < b;
    let cond2 = a === b;

    console.log("cond1 && cond2 =", cond1 && cond2);        // &&: Logical AND
    console.log("a > b || a === b =", a > b || a === 5);    // ||: Logical OR
    console.log("!(a < b) :", !(a < b));                    // !: Logical NOT (true: false, false, true)
};
