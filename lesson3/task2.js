let max = 30;
let min = 10;


let age = Math.floor(Math.random() * (max - min + 1)) + min;
console.log('The age is ' + age);

let isAdult = age >= 18;
console.log('Is the person adult? ' + isAdult);

