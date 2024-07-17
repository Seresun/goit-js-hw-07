// Отримуємо ul#categories
const categoriesList = document.querySelector('#categories');

// Отримуємо всі елементи li з класом item всередині ul#categories
const items = categoriesList.querySelectorAll('.item');

// Виводимо в консоль кількість категорій
console.log(`Number of categories: ${items.length}`);

// Проходимося по кожному елементу li.item
items.forEach(item => {
  // Знаходимо і виводимо в консоль текст заголовка (тег <h2>)
  const categoryTitle = item.querySelector('h2').textContent;
  console.log(`Category: ${categoryTitle}`);

  // Знаходимо і виводимо в консоль кількість елементів в категорії (усіх <li>, вкладених у нього)
  const categoryItems = item.querySelectorAll('ul li').length;
  console.log(`Elements: ${categoryItems}`);
});
