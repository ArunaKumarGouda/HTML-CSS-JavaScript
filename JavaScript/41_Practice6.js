// Q: Take a number n as input from user. Create an array of numbers from 1 to n.
// a: Use the reduce method to calculate sum of all numbers in the array.
// b: Use the reduce method to calculate factorial to all numbers in the array.

{
    let n = prompt("Enter number: ");

    let arr = [];
    for(let i = 1; i <= n; i++) {
        arr[i] = i;
    }

    for(let val of arr) {
        console.log(val);
    }

    let sum = arr.reduce((previous, current) => {
        return previous + current;
    })
    console.log("Sum of all numbers =", sum);

    let factorial = arr.reduce((previous, current) => {
        return previous * current;
    })
    console.log("Factorial of all numbers =", factorial);
}
