let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let nam = div.getAttribute("name");
console.log(nam);

let para = document.querySelector("p");
console.log(para.getAttribute("class"));

let box = document.querySelector("div");
box.style.backgroundColor = "darkblue";
box.style.color = "white";
box.style.padding = "20px";
box.style.fontFamily = "Arial, sans-serif";
box.style.borderRadius = "8px";
box.style.textAlign = "center";
box.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
box.style.margin = "20px auto";
box.style.width = "50%";
box.style.transition = "background-color 0.3s ease";
box.innerHTML = "<h2>Styled Div Element</h2><p>This div has been styled using JavaScript!</p>";


let button = document.createElement("button");
button.innerText = "Click Me";
button.style.padding = "10px 20px";
button.style.fontSize = "16px";
button.style.cursor = "pointer";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.backgroundColor = "#28a745";
button.style.color = "white";
button.style.marginTop = "15px";
button.addEventListener("mouseover", function() {
    button.style.backgroundColor = "#1dd445ff";
});
button.addEventListener("mouseout", function() {
    button.style.backgroundColor = "#28a745";
});


let boxDiv = document.querySelector("div");
boxDiv.appendChild(button);

let heading = document.createElement("h1");
heading.innerHTML = "<p>Welcome to DOM Manipulation!</p>";
heading.style.textAlign = "center";
heading.style.fontFamily = "Verdana, sans-serif";
heading.style.color = "#333";
heading.style.marginBottom = "20px";

document.querySelector("body").prepend(heading);