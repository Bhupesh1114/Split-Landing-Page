const containers = document.querySelector(".container");
const left = document.querySelector(".left");
const right = document.querySelector(".right");


left.addEventListener("mouseover", () => {
    containers.classList.add("hover-left");
})

left.addEventListener("mouseout", () => {
    containers.classList.remove("hover-left");
})

right.addEventListener("mouseover", () => {
    containers.classList.add("hover-right");
})

right.addEventListener("mouseout", () => {
    containers.classList.remove("hover-right");
})