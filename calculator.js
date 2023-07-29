const number = document.querySelectorAll(".num")
// const displayNumbers = document.querySelectorAll(".display-numbers")
const display = document.querySelector(".display")
const symbol = document.querySelectorAll(".symbol")
const equal = document.querySelector(".equal")
let result

number.forEach(num => {
    
    num.addEventListener("click", () => {
        display.innerText = result
    })
    
})



symbol.forEach(sym => {
    sym.addEventListener("click", () => {
       
        display.innerText += sym.innerText
    })
})



function add(...args) {
    return args.reduce(function(acc, curr) {
        return acc + curr
    })
}


