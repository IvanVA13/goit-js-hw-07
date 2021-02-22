const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const createItemsInIngredients = (el) => {
    let item = document.createElement("li")
    item.textContent = el
   return item
}

const ingredientsEl = ingredients.map(createItemsInIngredients)
document.querySelector("#ingredients").append(...ingredientsEl)