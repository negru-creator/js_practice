let array = [];

for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random() * 101);
    array.push(randomNumber);
}
console.log(array);

const evenNumbers = array.filter((num) => num % 2 === 0);
console.log(`Even numbers: ${evenNumbers}`);