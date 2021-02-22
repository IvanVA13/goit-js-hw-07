const arrItems = document.querySelectorAll(".item")
const sumListCategoris = (arrItems) => console.log(`В списке ${arrItems.length} категории.`)
const logCategoryTitleAndQuantityItems = (arrItems) => {
    for (let i = 0; i < arrItems.length; i += 1) {
        console.log(`Категория: ${arrItems[i].querySelector("h2").textContent}`);
        console.log(`Количество элементов: ${arrItems[i].querySelectorAll("li.item > ul > li").length}`)
    } 
}

sumListCategoris(arrItems)
logCategoryTitleAndQuantityItems(arrItems)

