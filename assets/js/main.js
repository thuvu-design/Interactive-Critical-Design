// main.js

let targetElement = document.querySelector("h2")

targetElement.addEventListener("mouseover", function() {
    targetElement.innerText="TIME";
    targetElement.style.cursor="wait";
});

targetElement.addEventListener("mouseout", function() {
    targetElement.innerText="IKEA";
    targetElement.style.cursor="pointer";
});

