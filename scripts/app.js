//console.log("hello from script");

const myButton = document.querySelector("button");
const myImage = document.querySelector("img");
myButton.addEventListener("click", () => {
console.log("Click");
myImage.src = "images/pic5.jpg";
});