//7 Primitive Data Types
//1. Number
let age = 24;
let price = 99.99;
//2. String  
let firstName = "Sarwar Hosen";
//3. Boolean
isfollowing = true;
//4. Null
let x = null;
//5. Undefined
let name;
//6. BigInt
let y = BigInt(123);
//7. Symbol
let z = Symbol("This is a symbol");

//Non-Primitive Data Types
//1. Object
const Student = {
    Name : "Sarwar Hosen",
    Age : 26,
    isPassing : true,
    CGPA : 2.80,
};
Student["Age"] = Student["Age"] + 1;
console.log(Student.Age);