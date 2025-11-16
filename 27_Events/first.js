let btn1 = document.querySelector(".button1");

btn1.onclick = () => {
    console.log("You Click The Button1");
    let a = 25;
    a++;
    console.log(a);
};

let div = document.querySelector("div");

div.onmouseover = () => {
    console.log("Now you are Inside the Div");
} 
div.onmouseover = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
};

