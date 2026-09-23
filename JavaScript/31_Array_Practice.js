// Q: Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix".
// a. Remove the first company from the array;
// b. Remove Uber and add Ola in its place.
// c. Add Amazon at the end.

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companies.shift();
companies.splice(1, 0, "Ola");
companies.push("Amazon");
console.log(companies);
