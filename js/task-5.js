function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const colorButton = document.querySelector(".change-color");
const spanText = document.querySelector(".color");
const body = document.querySelector("body");
colorButton.addEventListener("click", (event) => {
  const randomColor = getRandomHexColor();
  spanText.textContent = randomColor;
  body.style.backgroundColor = randomColor;
});
