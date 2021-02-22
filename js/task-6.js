const input = document.querySelector("#validation-input")
const minLenthInput = input.getAttribute("data-length")
let checkerLength = false

const checkCorrectLengthInput = (event) => {
    if (event.currentTarget.value.length >= minLenthInput) {
      return checkerLength = true;
    } else {
        return checkerLength = false;
    }
}
const changeBorderColor = () => {
    if (!checkerLength) {
        input.classList.add("invalid") || input.classList.replace("valid", "invalid")
    } else {
        input.classList.replace("invalid", "valid")  || input.classList.add("valid")
    }
}

input.addEventListener("input", checkCorrectLengthInput)
input.addEventListener("blur", changeBorderColor)
