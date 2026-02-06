const calculator = {

    lastResult: null,
    operationsCount: 0,

    add: function (a, b) {
        let sumResult = a + b;
        this.lastResult = sumResult;
        this.operationsCount++;
        return sumResult;
    },

    subtract: function (a, b) {
        let subtractResult = a - b;
        this.lastResult = subtractResult;
        this.operationsCount++;
        return subtractResult;
    },

    multiply: function (a, b) {
        let multiplyResult = a * b;
        this.lastResult = multiplyResult;
        this.operationsCount++;
        return multiplyResult;
    },

    divide: function (a, b) {
        this.operationsCount++;

        if (b === 0) {
            this.lastResult = null;
            return 'Помилка: ділення на нуль!'
        } 
        let divideResult = a / b;
        this.lastResult = divideResult;
        return divideResult; 
    },

    reset: function () {
        this.lastResult = null;
        this.operationsCount = 0;
    }
}


console.log(calculator.add(10, 20));
console.log(`The last result: ${calculator.lastResult}`);
console.log(`The current operations count: ${calculator.operationsCount}`);

console.log(calculator.subtract(109, 675));
console.log(`The last result: ${calculator.lastResult}`);
console.log(`The current operations count: ${calculator.operationsCount}`);

console.log(calculator.multiply(-7, 0.5));
console.log(`The last result: ${calculator.lastResult}`);
console.log(`The current operations count: ${calculator.operationsCount}`);

console.log(calculator.divide(16, -4));
console.log(`The last result: ${calculator.lastResult}`);
console.log(`The current operations count: ${calculator.operationsCount}`);

console.log(calculator.divide(15, 0));
console.log(`The last result: ${calculator.lastResult}`);
console.log(`The current operations count: ${calculator.operationsCount}`);

console.log(calculator.add(100, -20));
console.log(`The last result: ${calculator.lastResult}`);
console.log(`The current operations count: ${calculator.operationsCount}`);


calculator.reset();
console.log(`The last result: ${calculator.lastResult}`);
console.log(`The current operations count: ${calculator.operationsCount}`);

console.log(calculator.subtract(10, -67));
console.log(`The last result: ${calculator.lastResult}`);
console.log(`The current operations count: ${calculator.operationsCount}`);