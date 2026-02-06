import { Gadget } from "./Gadget.js";
import { Smartphone } from "./Smartphone.js";


const samsungPhone = new Smartphone('Samsung', 'Galaxy A56', 2022, 'Android');
console.log(samsungPhone.getInfo());
samsungPhone.year = 1999;
samsungPhone.year = 2027;
samsungPhone.operatingSystem = 'Linux';
samsungPhone.year = 2024;
samsungPhone.operatingSystem = 'HarmonyOS';
console.log(samsungPhone.getInfo());


const iphone = new Smartphone('Apple', '17 Pro Max', 2025, 'iOS');
console.log(iphone.getInfo());


const huaweiPhone = new Smartphone('Huawei', 'P30', 2019, 'HarmonyOS');
console.log(huaweiPhone.getInfo());


const phoneWithOldYear = new Smartphone('Nokia', '3310', 1998, 'Android');
console.log(phoneWithOldYear.getInfo());

const phoneWithWrongOS = new Smartphone('Xiaomi', 'Mi 14', 2024, 'Windows Phone');
console.log(phoneWithWrongOS.getInfo());

const tablet = new Gadget('Xiaomi', 'Pad 7', 2023);
console.log(tablet.getInfo());

const laptop = new Gadget('Asus', 'Vivobook', 2021);
console.log(laptop.getInfo());

const gadgetsArray = [];
gadgetsArray.push(samsungPhone, iphone, huaweiPhone, tablet, laptop);
console.log(gadgetsArray);

let oldestGadget = Gadget.getOldestGadget(gadgetsArray);
console.log(`The oldest gadget is ${oldestGadget.getInfo()}`);





