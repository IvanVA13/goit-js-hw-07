const btnCreate = document.querySelector('[data-action="render"]')
const btnDelete = document.querySelector('[data-action="destroy"]')
const boxesParent = document.querySelector("#boxes")
const inputAmount = document.querySelector("input")
let boxesEl
let amount = 0

const writeAmount = () => {
    amount = event.currentTarget.value
    return amount
}

const randomRgbColor = () => {
    const max = 255
    let red = Math.round(Math.random()*max)
    let green = Math.round(Math.random()*max)
    let blue = Math.round(Math.random()*max) 
    return `rgb(${red}, ${green}, ${blue})`
}

const createBoxes = () => { 
    let arr = []
    let item
    let widthHeight = 30
    for (let i = 0; i < amount; i += 1){
        item = document.createElement("div")
        item.style.width = `${widthHeight}px`
        item.style.height = `${widthHeight}px`
        item.style.backgroundColor = randomRgbColor()
        arr.push(item)
        widthHeight += 10
    }
    return arr
}

const addBoxes = () => {
    boxesEl = createBoxes()
    document.querySelector("#boxes").append(...boxesEl)
}

const destroyBoxes = () => {
    boxesParent.innerHTML = ""
}

inputAmount.addEventListener("input", writeAmount)
btnCreate.addEventListener("click", addBoxes)
btnDelete.addEventListener("click", destroyBoxes)