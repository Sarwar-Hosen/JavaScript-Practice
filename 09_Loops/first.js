// // // // // for loop

// // // // // let num = 5;

// // // // // for(let n = 0; n <= num; n++){
// // // // //     console.log("I learn JavaScript");
// // // // // }



// // // // // sum of 1 to 5

// // // // let num = 0;

// // // // for ( let n =1; n <= 5; n++){
// // // //     num = num + n;
// // // //     console.log(" The total sum is: ", num);
// // // // }


// // // //while loop

// // // let sum = 1;
// // // while(sum <=10){
// // //     console.log("I love JavaScript");
// // //     sum ++;
// // // }



// // //do while loop

// // let sum = 1;
// // do{
// //     console.log("Today is Wednesday");
// //     sum ++;
// // }while(sum <= 10);



// // for of loop

// let str = "SarwarHosen";

// let size = 0;
// for(let value of str){
//     console.log("The character is: ", value);
//     size++;
// }
// console.log("The total length of the string is:", size);



// for in loop
let student = {
    name : "Sarwar Hosen",
    age : 26,
    cgpa : 2.80,
    isPassing : true,   
}
for(let key in student){
    console.log("key is: ", key, "Value is: ",student[key]);
}