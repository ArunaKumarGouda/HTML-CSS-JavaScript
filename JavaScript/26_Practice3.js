/* Q: Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the fullname length.
Eg: user name = "arunakumargouda", username should be "@arunakumargouda15". */

let username = prompt("Enter your first name: ");
let lowercase = username.toLowerCase().trim();

console.log(`@${lowercase}${lowercase.length}`);

{
    let fullName = prompt("Enter your name: ");
    let userName = "@" + fullName + fullName.length;
    console.log(userName);
}
