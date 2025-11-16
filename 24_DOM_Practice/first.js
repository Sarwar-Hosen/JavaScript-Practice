let h1 = document.querySelector("h1");
console.dir(h1.innerText);
h1.innerText = h1.innerText + " From Apna College";


let divs = document.querySelectorAll(".box");

let index = 1;
for (let div of divs){
    div.innerText = `This is box  ${index}`;
    index++;
}
// divs[0].innerText = "This is box 1";
// divs[1].innerText = "This is box 2";
// divs[2].innerText = "This is box 3";