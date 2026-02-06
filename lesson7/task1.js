// for loop
let numbers = [0, -11, 22, 3, -45, 15, 6, -7, 8, -19, 0, 0, 0, 46, 78, 0.1, -0.33];
let positiveCounter = 0;
let negativeCounter = 0;
let zeroCounter = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        positiveCounter++;
    } else if (numbers[i] < 0) {
        negativeCounter++;
    } else {
        zeroCounter++;
    }
}

console.log(`Positive Numbers: ${positiveCounter}`);
console.log(`Negative Numbers: ${negativeCounter}`);
console.log(`0 Numbers: ${zeroCounter}`);


// for...of
let array = [0, -111, 0, -3, 45, -15, -6, -79, 8, -19, 0, 0, 0, 46, 78, 0.1, 0];
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

for (const number of array) {
    if (number > 0) {
        positiveCount++;
    } else if (number < 0) {
        negativeCount++;
    } else {
        zeroCount++;
    } 
}

console.log(`Positive Numbers: ${positiveCount}`);
console.log(`Negative Numbers: ${negativeCount}`);
console.log(`0 Numbers: ${zeroCount}`);