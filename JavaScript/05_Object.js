const student = {
    name : "Aruna Kumar Gouda",
    age : 21,
    cgpa : 8.3,
    isPass : true,
};

console.log(student);

console.log(student["age"]);
console.log(student.age);

student.age = student.age - 1;
console.log(student.age);

console.log(student["name"]);
