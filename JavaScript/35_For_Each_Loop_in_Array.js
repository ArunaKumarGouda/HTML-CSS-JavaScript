// arr.forEach(callBackFunction)
// callBackFunction: Here, it is a function to execute for each element in the array
// A callback is a function passed as an argument to another function.

let arr = [1, 2, 3, 4, 5, 6];

arr.forEach(function printVal(val) {
    console.log(val);
})

console.log("using arrow function");
arr.forEach((val) => {
    console.log(val);
})

{
    let city = ["Pune", "Mumbai", "Hydrabad", "Chennai"];

    city.forEach(function printCity(val) {
        console.log(val.toLowerCase());
    })

    console.log("Using arrow function");
    city.forEach((val, index, city) => {
        console.log(val.toUpperCase(), index, city);
    })
}; 
