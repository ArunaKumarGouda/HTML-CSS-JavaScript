// Q: Write a code which can give grades to students according to their scores.

let grade = prompt("Enter your grade: ");

if((grade <= 100) && (grade >= 80)) {
    console.log("A grade");
} else if(grade >= 70) {
    console.log("B grade");
} else if(grade >= 60) {
    console.log("C grade");
} else if(grade >= 50) {
    console.log("D grade");
} else {
    console.log("F grade");
}
