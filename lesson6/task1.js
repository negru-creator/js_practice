function handleNum(num, handleEvenCb, handleOddCb) {
    if (num % 2 === 0) {
        handleEvenCb(num);
    } else {
        handleOddCb(num);
    }
}

function handleEven(num) {
    console.log(`${num} is an even number`);
}

function handleOdd(num) {
    console.log(`${num} is an odd number`);
}

let num = Math.floor(Math.random() * 1000);


handleNum(num, handleEven, handleOdd);

