const input = document.querySelector("#validation-input")
const minLenthInput = Number(input.getAttribute("data-length"))
let checkerLength = false

const changeBorderColor = (event) => {
if (event.currentTarget.value.length === minLenthInput) {
      checkerLength = true;
    } else {
        checkerLength = false;
    }
    if (!checkerLength) {
        input.classList.add("invalid") || input.classList.replace("valid", "invalid")
    } else {
        input.classList.replace("invalid", "valid") || input.classList.add("valid")
    }
}
input.addEventListener("blur", changeBorderColor)
