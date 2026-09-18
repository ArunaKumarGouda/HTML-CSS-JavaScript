let student = {
    name: "Aruna Kumar Gouda",
    age: 21,
    cgpa: 8.3,
    isPass: true
};

for(let key in student) {
    console.log("key =", key);
}

for(let val in student) {
    console.log(student.name);
}
