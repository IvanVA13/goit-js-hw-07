
/* 
возможно для создания элементов нужна будет рекурсивная функция -- которая будет задавать атрибуты ширины, высоты и цвета фона.
Либо как вариант можно сделать счетчик вызова функции создания элементов. Он будет записывать кол-во вызовов функции создания. 
Сама фун-ция создания будет проверять значение счетчика и в зависимости от его значения будет увеличивать ширину и высоту 
соответственно.

Кнопку очистки можно сделать по ид корневого дива или по атрибуту -- с помощью innerHTML очистить разметку.
2й вариант-- найти есть ли метод ремув всех детей
 */

//  функция создания случайного ргб цвета
const btnCreate = document.querySelector('[data-action="render"]')
const btnDelete = document.querySelector('[data-action="destroy"]')
const boxesParent = document.querySelector("#boxes")
const inputBoxesQuantity = document.querySelector("input")
const boxesEl = []
let boxesQuantity = 0

const randomRgbColor = function () {
    const max = 255
    let red = Math.round(Math.random()*max)
    let green = Math.round(Math.random()*max)
    let blue = Math.round(Math.random()*max)
    
    return `rgb(${red}, ${green}, ${blue})`
}

const writeBoxesQuantity = () => {
    boxesQuantity = event.currentTarget.value
}

const createBoxes = () => {
    let item
    if (boxesQuantity < 1) {
        boxesEl.reverse()
    } else {
        item = document.createElement("div")
        item.style.width = `${30 + 10 * boxesQuantity}px`
        item.style.height = `${30 + 10 * boxesQuantity}px`
        item.style.backgroundColor = randomRgbColor()
        boxesEl.push(item)
        boxesQuantity -= 1
        createBoxes()
    }
}

const addBoxes = () => {
    if (boxesEl.length === 0) {
        createBoxes()
    } else {
        boxesEl.splice(0, boxesEl.length)
        boxesParent.innerHTML = ""
        createBoxes()
    }
    
    document.querySelector("#boxes").append(...boxesEl)
}

const destroyBoxes = () => {
    // boxesParent.innerHTML = ""
    while (boxesParent.firstChild) {
    boxesParent.firstChild.remove();
    }
}
inputBoxesQuantity.addEventListener("input", writeBoxesQuantity)
btnCreate.addEventListener("click", addBoxes)
btnDelete.addEventListener("click", destroyBoxes)