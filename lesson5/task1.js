// Function Declaration 
function getRectangleArea(width, height) {
    let area = width * height;
    return area;
}
console.log(getRectangleArea(2, 3));


// Function Expression
const rectangleArea = function (width, height) {
    let area = width * height;
    return area;
}
console.log(rectangleArea(5, 10));

// Arrow Function
const rectangleArea2 = (width, height) => width * height;
console.log(rectangleArea2(15, 16));