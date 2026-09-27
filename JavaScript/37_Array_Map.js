// Create a new array with the results of some operation. The value its callback returns are used to form new array.

let arr = [1, 2, 3, 4, 5];

// print the array.
arr.map((val) => {
    console.log(val);
})

// print the array copy in another array.
let newArr = arr.map((val) => {
    return val;
})
console.log(newArr);

// return the square of the array.
let square = arr.map((val) => {
    return val * val;
})
console.log(square);
