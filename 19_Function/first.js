//Write a function that prints "This is my first function" to the console.
function myFunction() {
    console.log("This is my first function");
}   
myFunction();

//Write a function that takes two numbers as parameters and returns their sum.
function sum(a, b){
    console.log("Calculating the sum of", a, "and", b);
    calculatedSum = a + b;
    return calculatedSum;
}
let result = sum(5, 10);
console.log("The result is:", result);


//Write an arrow function that takes two numbers as parameters and returns their product.
const arrowSum = (a, b) => {
    console.log("The arrowSum is: ", a + b);
}

const arrowMul = (x, y) =>{
    return x * y;
}
console.log("The arrowMul is: ", arrowMul(4, 5));