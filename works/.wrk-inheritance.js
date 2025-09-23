class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }
    start(){
        console.log(this.brand + " car moved");
    }
    }

    class Car extends Vehicle{
        drive(){
            console.log(this.brand + " developed by Maruthi suzki");
        }
    }

    let swiftCar = new Car("Swift");
    swiftCar.start();
    swiftCar.drive();