let array = [];

for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random() * 201);
    array.push(randomNumber);
}
console.log(array);

const sum = array.reduce((acc, num) => acc + num, 0);
console.log(`The total sum: ${sum}`);