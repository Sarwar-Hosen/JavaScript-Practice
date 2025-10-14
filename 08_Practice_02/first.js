let num = prompt("Enter a Number: ");

if (num >= 80 && num <= 100){
    console.log("A+");
}
else if(num >= 70 && num < 80){
    console.log("A");
}
else if ( num >= 60 && num < 70){
    console.log("A-");
}
else if ( num >= 50 && num < 60 ){
    console.log("B");
}
else if ( num >= 40 && num < 50 ){
    console.log("C");
}   
else if ( num >= 33 && num < 40 ){  
    console.log("D");
}
else if ( num >= 0 && num < 33 ){
    console.log("F");
}
else{
    console.log("Invalid Input");   
}
