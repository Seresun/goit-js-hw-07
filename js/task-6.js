function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


// Отримуємо посилання на елементи
const input = document.querySelector('#controls input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

// Функція для створення колекції елементів
function createBoxes(amount) {
  // Очищуємо попередній вміст boxesContainer
  boxesContainer.innerHTML = '';

  // Встановлюємо початковий розмір
  let boxSize = 30;

  // Створюємо колекцію нових div елементів
  const boxes = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxSize += 10;
    boxes.push(box);
  }

  // Додаємо нові div елементи в DOM
  boxesContainer.append(...boxes);
}

// Функція для очищення колекції елементів
function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

// Додаємо обробник події click на кнопку Create
createButton.addEventListener('click', () => {
  // Отримуємо значення з інпуту і перетворюємо його на число
  const amount = Number(input.value);

  // Перевіряємо, чи значення в діапазоні від 1 до 100
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  } else {
    alert('Please enter a number between 1 and 100');
  }

  // Очищуємо значення інпуту
  input.value = '';
});

// Додаємо обробник події click на кнопку Destroy
destroyButton.addEventListener('click', destroyBoxes);