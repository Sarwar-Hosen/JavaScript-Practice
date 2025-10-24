////write a program to filter out the marks greater than 90 from an array of student marks

// let studentMarks = [85, 92, 78, 90, 99, 98, 88];
// let maxMark = studentMarks.filter((mark) => {
//     return mark > 90;
// });
// console.log("Marks greater than 90 are:", maxMark);



////write a program to calculate the sum and factorial of numbers from 1 to n using array methods

let n = prompt("Enter a number: ");

let arr = [];
for (let i = 1; i <= n; i++){
    arr[i - 1] = i;
}
console.log("Array of numbers from 1 to", n, ":", arr);

let sum = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});
console.log("Sum of numbers from 1 to", n, "is:", sum);

let factorial = arr.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
});
console.log("Factorial of", n, "is:", factorial);