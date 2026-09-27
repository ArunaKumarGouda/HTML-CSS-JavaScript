// Create a new array of elements that give true for a condition/filter.
// Eg: all even element.

let arr = [1, 2, 3, 4, 5, 6];

// Even number
let even = arr.filter((val) => {
    return val % 2 == 0;
})
console.log(even);

// Odd number
let odd = arr.filter((val) => {
    return val % 2 != 0;
})
console.log(odd);

// greater number of 3.
let greater = arr.filter((val) => {
    return val > 3;
})
console.log(greater);
