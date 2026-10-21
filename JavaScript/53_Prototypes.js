// A JavaScript object is an entity having state and behavior (properties and methods).
// JS objects have a special property called prototype.
// We can set prototype using __proto__

// Note: if object and prototype have same method, object's method will be used. 

const employee = {
    calcTax() {
        console.log("Tax rate is 10%");
    }
};

const newEmployee = {
    salary: 50000,
};

newEmployee.__proto__ = employee;
