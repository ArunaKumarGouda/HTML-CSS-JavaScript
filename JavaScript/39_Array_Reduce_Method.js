// Preforms some operations and reduces the array to a single value. It return that single value.

let arr = [1, 2, 3, 4];

let sum = arr.reduce((result, current) => {
    return result + current;
})
console.log(sum);


// find the maximum element in a given array
{
    let arr = [4, 2, 5, 7, 1, 6];

    let previous = 0;
    let max = arr.reduce((previous, current) => {
        if(previous < current) {
            previous = current;
        }
        return previous;
    })
    console.log(max);
};

// another format
{
    let arr = [4, 2, 5, 7, 1, 6];

    let max = arr.reduce((previous, current) => {
        return previous > current ? previous : current;
    })
    console.log(max);
};

// find the minimum element in a given array
{
    let arr = [4, 2, 5, 7, 1, 6];

    let min = arr.reduce((previous, current) => {
        return previous < current ? previous : current;
    })
    console.log(min);
};
