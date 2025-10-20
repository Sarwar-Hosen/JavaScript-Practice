let name = ["Sarwar", "Nurul", "Mamun", "Rony"];
// console.log("The name is: ", name);
for(let i = 0; i<name.length; i++){
    console.log("The name is: ", i, name[i]);
}
for (let i of name){
    console.log("The name is: ", i.toUpperCase());
}