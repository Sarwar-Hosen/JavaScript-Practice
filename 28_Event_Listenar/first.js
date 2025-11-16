let btn1 = document.querySelector("#myId");

btn1.addEventListener("click", (evt) => {
    console.log("Button1 was Clicked");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
});

btn1.addEventListener("click", (evt) => {
    console.log("Button1 was Clicked -FirstTime");

});
const SecondTime = () => {
    console.log("Button1 was Clicked -SecondTime");
};
btn1.addEventListener("click", SecondTime);

btn1.addEventListener("click", (evt) => {
    console.log("Button1 was Clicked -ThirdTime");

});

btn1.removeEventListener("click", SecondTime); // This will not work because the function reference is missing