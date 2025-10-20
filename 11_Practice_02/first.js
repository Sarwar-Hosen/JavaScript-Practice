let gameNum = 24;

let userNum = prompt("Guess the game number: ");

while(userNum != gameNum){
    userNum = prompt("Please try again! Guess the game number: ");
}
console.log("Congratulation! You guess the correct number.");