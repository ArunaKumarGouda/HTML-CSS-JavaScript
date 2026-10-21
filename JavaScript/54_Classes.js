// Class is s program-code template for creating object.
// Those object will have some state (variables) and some behaviour (functions) inside it.

class ToyotaCar {
    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }

    setBrand(brand1) {
        this.newBrand = brand1;
    }

    constructor(brand, mileage) {
        console.log("Creating new object");
        this.newBrand = brand;
        this.mileage = mileage;
    }
}
let fortuner = new ToyotaCar("Fortuner", 10);
fortuner.setBrand(fortuner);
console.log(fortuner);
let lexus = new ToyotaCar();
console.log(lexus);
