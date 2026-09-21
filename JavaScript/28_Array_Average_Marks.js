/* Q: For a given array with marks of students -> [85, 97, 44, 37, 73, 60]
Find the average marks of the entire class */

let marks = [85, 97, 44, 37, 76, 60];

let n = marks.length;
let sumOfMarks = 0;

for(let i = 0; i < n; i++) {
    sumOfMarks += marks[i];
}

let averageMarks = sumOfMarks / n;
console.log("Average mark =", averageMarks);
