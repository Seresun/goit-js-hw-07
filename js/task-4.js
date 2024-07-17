// Отримуємо посилання на форму
const loginForm = document.querySelector('.login-form');

// Додаємо обробник події submit на форму
loginForm.addEventListener('submit', (event) => {
  // Забороняємо стандартну поведінку (перезавантаження сторінки)
  event.preventDefault();

  // Отримуємо значення полів форми
  const email = event.target.elements.email.value.trim();
  const password = event.target.elements.password.value.trim();

  // Перевіряємо, чи всі поля заповнені
  if (email === '' || password === '') {
    alert('All form fields must be filled in');
    return;
  }

  // Створюємо об'єкт з даними форми
  const formData = {
    email: email,
    password: password
  };

  // Виводимо об'єкт у консоль
  console.log(formData);

  // Очищаємо значення полів форми
  loginForm.reset();
});

