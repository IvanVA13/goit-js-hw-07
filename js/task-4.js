let counterValue = 0
const valueEl = document.querySelector("#value")
const increment = () =>
{
    counterValue += 1
    valueEl.textContent = counterValue
}
const decrement = () => {
    counterValue -= 1
    valueEl.textContent = counterValue
}
document.querySelector('[data-action="increment"]').addEventListener('click', increment)
document.querySelector('[data-action="decrement"]').addEventListener('click', decrement)