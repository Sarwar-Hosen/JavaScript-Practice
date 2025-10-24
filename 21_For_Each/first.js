// //For each loop array method
// let arr = ["Dhaka", "Chittagong", "Khulna", "Rajshahi", "Sylhet"];

// arr.forEach(function(city,index,array){ ////callback function ////higher order function
//     console.log(city.toUpperCase(), "is at index", index, "in the array", array);
// });


////Example: Print the square of each number in an array
// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach((num) => {
//     console.log(num * num);
// });


// ////map() method
// let arr = [10, 20, 30, 40, 50];

// let newArr = arr.map((num) => {
//     return num + 5;
// });
// console.log("Original Array:", arr);
// console.log("New Array after adding 5 to each element:", newArr);


// ////filter() method
// let mixedNumbers = [5, 12, 8, 20, 3, 15, 7];

// let filteredNumbers = mixedNumbers.filter((num) => {
//     return num > 10;
// });

// console.log("Original Array:", mixedNumbers);
// console.log("Filtered Array (numbers greater than 10):", filteredNumbers);



// ////reduce() method
// let values = [1, 2, 3, 4, 5];

// let sum = values.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// });
// console.log("Sum of all elements in the array:", sum);


//
let numb = [2, 4, 6, 62, 8, 10];
let largestNum = numb.reduce((max, current) => {
    return max > current ? max : current;
})
console.log("Largest number in the array is:", largestNum);