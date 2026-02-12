export class Gadget {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    getInfo() {
        return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`;
    }

    get year() {
        return this._year;
    }

    set year(updatedYear) {
        const currentYear = new Date().getFullYear();
        if (updatedYear < 2000 || updatedYear > currentYear) {
            console.log('Error: incorrect year');
        } else {
            this._year = updatedYear;
        }
    }

    static getOldestGadget(gadgetsArray) {
        let oldestGadget = gadgetsArray[0];
        for (let i = 0; i < gadgetsArray.length; i ++) {
            if(gadgetsArray[i].year < oldestGadget.year){
                oldestGadget = gadgetsArray[i];
            }
        }
         return oldestGadget;  
    }
}