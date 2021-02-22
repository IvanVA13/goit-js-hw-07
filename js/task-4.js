/* Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать 
значение счетчика на 1.

Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса */

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