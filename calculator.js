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
        factors.push(Number(num.innerText))
        console.log(factors)
        display.innerText += num.innerText
        
    })

})

symbol.forEach(sym => {
    sym.addEventListener("click", () => {
        display.innerText += sym.innerText
        console.log(sym.innerText)
    })

    equal.addEventListener("click", () => {
        // if (sym.innerText === '+') {
        //     sum = add(...factors)
        //     display.innerText = sum
        //     factors = []
        // }else if (sym.innerText === "x"){
        //     product = multiply(...factors)
        //     display.innerText = product
        //     factors = []
        // }else if (sym.innerText === "-"){
        //     difference = subtract(...factors)
        //     display.innerText = product
        //     factors = []
        // }
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

