/* 
Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).
*/

const arrItems = document.querySelectorAll(".item")

const sumListCategoris = (arrItems) => console.log(`В списке ${arrItems.length} категории.`)
sumListCategoris(arrItems)

const logCategoryTitleAndQuantityItems = (category) => {
    return category.querySelector("h2").textContent
}