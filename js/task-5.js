const input = document.querySelector("#name-input")
const output = document.querySelector("#name-output")

const changeName = (event) => {
output.textContent = event.currentTarget.value
    if (output.textContent === "") {
    output.textContent = "незнакомец"
    }
}
input.addEventListener("input", changeName)