// let doc = document.getElementById("header");
// console.dir(doc);

// let classDoc = document.getElementsByClassName("header");
// console.dir(classDoc);
// console.log(classDoc);

let paragraph = document.getElementsByTagName("p");
console.dir(paragraph);
console.log(paragraph);

let firsElement = document.querySelector("#btn");
console.dir(firsElement);

let div = document.querySelector("div");
console.dir(div);
console.log(div.innerText);

//Dom Manipulation

div.innerText = "Hello World";
console.log(div.textName);
console.log(div.innerText);
console.log(div.innerHTML);
console.log(div.outerHTML);
div.innerHTML = "<h1> Hello World </h1>";
console.log(div.innerHTML);
console.log(div.outerHTML);
console.log(div.textContent);