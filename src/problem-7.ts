class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getCarAge() {
        const currentYear = new Date().getFullYear();
        const yearDiffence = currentYear - this.year;
        return yearDiffence;
    }
}

const mynCar = new Car("R15", "V4", 2020);

console.log(mynCar.getCarAge());
