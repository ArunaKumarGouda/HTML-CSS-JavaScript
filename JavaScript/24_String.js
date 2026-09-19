// String is a sequence of character used to represent text.

let str = "Aruna";
console.log(str);
console.log(typeof str);
console.log(str.length);
console.log(typeof str.length);

console.log(str[0]);
console.log(str[3]);

// The way to have embedded expressions in strings.
// Template Literals
let specialString = `This is a template literal`;
console.log(specialString, ", ", typeof specialString);

let obj = {
    item: "Pen",
    price: 10
};
console.log(obj);
let result = `The cost of ${obj.item} is ${obj.price}`;
console.log(result);
console.log("The cost of", obj.item, "is", obj.price);

console.log(`The sum of 2 and 3 is: ${2 + 3}`);

// Escape characters in string.
// \n, \t, the length of escape characters is 1.
let str1 = "Aruna\tKumar\nGouda";
console.log(str1);
console.log(str1.length);
