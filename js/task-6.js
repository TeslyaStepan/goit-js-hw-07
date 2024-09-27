function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputEl = document.querySelector("#controls input");
const buttonCr = document.querySelector("[data-create]");
const buttonDst = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

function createBoxes(amount) {
  const elements = [];
  let boxSize = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = "5px";
    elements.push(box);
    boxSize += 10;
  }
  boxesContainer.append(...elements);
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

buttonCr.addEventListener("click", () => {
  const amount = parseInt(inputEl.value.trim());

  if (1 <= amount && amount <= 100) {
    destroyBoxes();
    createBoxes(amount);
  } else {
    alert(`Enter number from 1 to 100`);
  }
});

buttonDst.addEventListener("click", () => {
  destroyBoxes();
});
