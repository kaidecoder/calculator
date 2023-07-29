const number = document.querySelectorAll(".num")
const numbers = document.querySelectorAll(".numbers")
const display = document.querySelector(".display")

number.forEach(num => {
    num.addEventListener("click", e => {
        display.innerText += num.innerText
    })
})