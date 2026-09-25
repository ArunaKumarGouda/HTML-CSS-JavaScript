// Q1: Create a function using the "function" keyword that takes a String as an argument and returns the number of vowels in the string.
function numberOfVowels(a) {
    let count = 0;
    for(let i = 0; i < a.length; i++) {
        let b = a.charAt(i).toLowerCase();
        if(b === 'a' || b === 'e' || b === 'i' || b === 'o' || b === 'u') {
            count++;
        }
    }
    return count;
}
let result = numberOfVowels("Aruna");
console.log(result);


// Q2: Create an arrow function to perform the same task;
{
    const numberOfVowels = (a) => {
        let count = 0;
        for(let i = 0; i < a.length; i++) {
            let b = a.charAt(i).toLowerCase();
            if(b === 'a' || b === 'e' || b === 'i' || b === 'o' || b === 'u') {
                count++;
            }
        }
        return count;
    }
    let result = numberOfVowels("Aruna");
    console.log(result); 
};
