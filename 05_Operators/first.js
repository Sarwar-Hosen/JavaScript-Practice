let a = 10;
let b = 5;

//Arithmetic Operators
console.log("a =10, b =5"); 
console.log("a + b = ", a +b); //Addition
console.log("a - b = ", a - b); //Subtraction
console.log("a * b = ", a * b); //Multiplication
console.log("a / b = ", a / b); //Division
console.log("a % b = ", a % b); //Modulus
console.log("a ** b = ", a ** b); //Exponentiation


//Assignment Operators
let c = a; //Assign value of a to c
console.log("c = a : c =", c);
c += a;
console.log("c += a : c =", c);
c -= a;
console.log("c -= a : c =", c);
c *= a;
console.log("c *= a : c =", c);
c /= a;
console.log("c /= a : c =", c);

//Comparison Operators
console.log("a == b : ", a == b);   
console.log("a != b : ", a != b);
console.log("a === b : ", a === b);
console.log("a !== b : ", a !== b);
console.log("a > b : ", a > b);
console.log("a < b : ", a < b);
console.log("a >= b : ", a >= b);
console.log("a <= b : ", a <= b);

//Logical Operators
console.log( (a > b) && (a != b) ); //Logical AND
console.log( (a > b) || (a == b) ); //Logical OR
console.log( !(a > b) ); //Logical NOT
console.log( !(a < b) ); //Logical NOT


//Unary Operators

//Post-Increment, Post-Decrement
let x = 5;
x++; //Increment
console.log("a++ :", x);
let y =10;
y--; //Decrement
console.log("a-- :", y);

//Pre-Increment, Pre-Decrement
let p = 15;
++p; //Increment
console.log("++a :", p);
let q = 20;
console.log("--a :", --q);