// Отримуємо посилання на елементи input і span
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

// Додаємо обробник події input на input#name-input
nameInput.addEventListener('input', (event) => {
  // Отримуємо значення інпуту, очищаємо від пробілів по краях
  const inputValue = event.target.value.trim();

  // Якщо значення порожнє або містить лише пробіли, підставляємо "Anonymous"
  if (inputValue === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    // Інакше підставляємо значення інпуту в span
    nameOutput.textContent = inputValue;
  }
});
