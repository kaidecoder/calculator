const number = document.querySelectorAll(".num")
// const displayNumbers = document.querySelectorAll(".display-numbers")
const display = document.querySelector(".display")
const symbol = document.querySelectorAll(".symbol")
const equal = document.querySelector(".equal")
let addends = []

number.forEach(num => {
    num.addEventListener("click", () => {
        addends.push(Number(num.innerText))
        display.innerText += num.innerText
        
    })

})

symbol.forEach(sym => {
    sym.addEventListener("click", () => {
        display.innerText += sym.innerText
    })
    equal.addEventListener("click", () => {
        if (symbol.innerText == '&plus;') {
            let sum = add(...addends)
            display.innerText = sum
        }else if ( symbol === "*"){
            let product = multiply(...addends)
            display.innerText = product
        }
        
    })

})








function add(...args) {
    return args.reduce(function(acc, curr) {
        return acc + curr
    })
}
function multiply(...args) {
    return args.reduce(function(acc, curr) {
        return acc * curr
    })
}


