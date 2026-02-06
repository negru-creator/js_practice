import { Gadget } from "./Gadget.js";

export class Smartphone extends Gadget {
    constructor(brand, model, year, operatingSystem) {
        super(brand, model, year);
        this.operatingSystem = operatingSystem;
    }

    getInfo() {
        return `${super.getInfo()}, OS: ${this.operatingSystem}`;
    }

    get operatingSystem(){
        return this._operatingSystem;
    }

    set operatingSystem(updatedOperatingSystem) {
        const allowedOS = ['iOS', 'Android', 'HarmonyOS'];
        if(!allowedOS.includes(updatedOperatingSystem)){
            console.log('Error: unavailable operating system');
        } else {
            this._operatingSystem = updatedOperatingSystem;}
    }
}