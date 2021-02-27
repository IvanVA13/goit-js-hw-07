const inputSlider = document.querySelector("#font-size-control")
const textEl = document.querySelector("#text")
    inputSlider.min = 10
    inputSlider.max = 50
    inputSlider.value = 30

const changeFontSize = (event) => {
    return textEl.style.fontSize = `${event.currentTarget.value}px`
}
inputSlider.addEventListener("input", changeFontSize)


