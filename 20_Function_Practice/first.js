function vowelCount(str){
    let count = 0;
    for(const char of str.toUpperCase().toLowerCase()){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count++;

        }
        
    }
    console.log("Number of vowels in the string is: ", count);
}