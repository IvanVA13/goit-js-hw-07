const arrItems = document.querySelectorAll(".item")
const arrListCategoris = [...arrItems]
console.log(`В списке ${arrListCategoris.length} категории.`)

const logCategoryTitleAndQuantityItems = arrListCategoris.map( (el) => {
        console.log(`Категория: ${el.querySelector("h2").textContent}`);
        console.log(`Количество элементов: ${el.querySelectorAll("li.item > ul > li").length}`)
    }
)
