// Inheritance is passing down properties and methods from parent class to child class.

class Person {
    constructor() {
        this.species = "homo sapiens";
    }
    
    ear() {
        console.log("eat");
    }

    sleep() {
        console.log("sleep");
    }

    work() {
        console.log("do nothing");
    }
}

class Engineer extends Person {
    work() {
        console.log("solve problems, build something");
    }
}

let obj = new Engineer();
