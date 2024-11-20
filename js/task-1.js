const categoriesList = document.getElementById('categories');

const categories = categoriesList.getElementsByClassName('item');

console.log(`Number of categories: ${categories.length}`);

for (let i = 0; i < categories.length; i++) {
  const category = categories[i];

  const categoryTitle = category.querySelector('h2').textContent;

  const itemsCount = category.querySelectorAll('ul li').length;

  console.log(`Category: ${categoryTitle}`);

  console.log(`Elements: ${itemsCount}`);
}
