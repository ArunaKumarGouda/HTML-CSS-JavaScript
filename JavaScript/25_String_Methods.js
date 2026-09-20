// There are built-in functions to manipulate a string.
let str = "     Aruna Kumar Gouda    ";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim());


let str1 = "abcdefgh";
console.log(str1.slice(1, 6));

let str2 = str.concat(str1);
console.log(str2);

{
    let str = "hello";
    console.log(str.replace("lo", "p"));

    let str1 = "hellololo";
    console.log(str1.replace("lo", "p"));
    console.log(str.replaceAll("lo", "p"));
};

let str3 = "IloveJS";
console.log(str3.charAt(3));
console.log(str3.charAt(2));
