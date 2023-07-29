const number = document.querySelectorAll(".num")
// const displayNumbers = document.querySelectorAll(".display-numbers")
const display = document.querySelector(".display")
const symbol = document.querySelectorAll(".symbol")
const equal = document.querySelector(".equal")
const allClear = document.querySelector(".allclear")
let factors = []
let sum
let product
let difference

number.forEach(num => {
    num.addEventListener("click", () => {
        display.innerText += num.innerText
        factors.push(Number(num.innerText))
        console.log(factors)
    })

})

symbol.forEach(sym => {
    sym.addEventListener("click", () => {
        display.innerText += sym.innerText
        console.log(sym.innerText)
    })

    equal.addEventListener("click", () => {
        switch (sym.innerText){
            case "+":
                display.innerText = add(...factors)
                break
            case "-":
                display.innerText = subtract(...factors)
                break
            case "x":
                display.innerText = multiply(...factors)
                break
        }
        
    })
})

allClear.addEventListener("click", () => {
    display.innerText = " "
    factors = []
})


function add(...args) {
    return args.reduce(function(acc, curr) {
        return acc + curr
    })
}
function subtract(...args) {
    return args.reduce(function(acc, curr) {
        return acc - curr
    })
}

function multiply(...args) {
    return args.reduce(function(acc, curr) {
        return acc * curr
    })
}

console.log(subtract(2,4))

