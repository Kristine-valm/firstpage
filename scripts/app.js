//console.log("hello from script");

const myButton = document.querySelector("button");
const myImage = document.querySelector("img");
const images = ["pic1", "pic2", "pic3", "pic4", "pic5"];

myButton.addEventListener("click", () => {
console.log("click");
let randomIndex = Math.floor(Math.random() * images.length);
console.log(randomIndex);
let randomImagePath = "images/" + images[randomIndex] + ".jpg";
console.log(randomImagePath);
myImage.src = randomImagePath;
});