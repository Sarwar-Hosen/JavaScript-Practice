// Question-----> 1
let btn = document.createElement("button");
btn.innerText = "Click Me";

btn.style.backgroundColor = "red";
btn.style.color = "white";

document.querySelector("body").prepend(btn);


//Question-------> 2
let para = document.querySelector("p");

para.classList.add("newClass");