// Array is a collection of items.
let marks = [23, 57, 54, 64, 93, 60];
console.log(marks);
console.log(marks.length);

let arr = ["aruna", 53, 38.5, true];
console.log(arr);
console.log(typeof arr);

console.log(arr[1], arr[0], arr[100]);

arr[1] = 100;
console.log(arr[1]);

// Print all elements of an array.
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for(let item of arr) {
    console.log(item);
}
