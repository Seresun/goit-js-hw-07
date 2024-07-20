function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Отримуємо посилання на елементи
const input = document.querySelector("#controls input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesContainer = document.getElementById("boxes");

// Функція для створення колекції елементів
function createBoxes(amount) {
  // Очищуємо попередній вміст boxesContainer
  boxesContainer.innerHTML = "";

  // Встановлюємо початковий розмір
  let boxSize = 30;

  // Створюємо колекцію нових div елементів
  const boxes = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxSize += 10;
    boxes.push(box);
  }

  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

createButton.addEventListener("click", () => {
  const amount = Number(input.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  } else {
    alert("Please enter a number between 1 and 100");
  }

  input.value = "";
});

destroyButton.addEventListener("click", destroyBoxes);
