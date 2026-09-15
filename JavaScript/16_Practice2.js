// Q1: Get user to input a number using prompt("Enter a number: "). Check if the number is a multiple of 5 or not.

let number = prompt("Enter a number: ");
if(number % 5 == 0) {
    console.log(number, "is multiple of 5");
} else {
    console.log(number, "is not multiple of 5");
}

// Q2: print all the even numbers from 1 to 50.

for(let i = 1; i <= 50; i++) {
    if(i % 2 == 0) {
        console.log(i);
    }
}
