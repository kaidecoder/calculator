const number = document.querySelectorAll(".num");
// const displayNumbers = document.querySelectorAll(".display-numbers")
const display = document.querySelector(".display");
const symbol = document.querySelectorAll(".symbol");
const equal = document.querySelector(".equal");
const allClear = document.querySelector(".allclear");
const backSpace = document.querySelector(".backspace");
let factors = [];
let sum;
let product;
let difference;
let newNum;

//Display the numbers on the calculator as floats
number.forEach((num) => {
  num.addEventListener("click", () => {
    newNum = parseFloat(num.innerText);
    display.innerText += newNum;
    console.log(newNum);
  });
});

//ToDo
// How to deal with the period?  dont use the period as a symbol because it doesn't get put inside the array

symbol.forEach((sym) => {
  sym.addEventListener("click", () => {
    display.innerText += sym.innerText;
    console.log(sym.innerText);
    factors.push(newNum);
    console.log(factors);
  });

  equal.addEventListener("click", () => {
    switch (sym.innerText) {
      case "+":
        const addition = add(...factors);
        display.innerText = addition;
        break;
      case "-":
        const subtraction = subtract(...factors);
        display.innerText = subtraction;
        break;
      case "x":
        display.innerText = multiply(...factors);
        break;
      case "/":
        display.innerText = divide(...factors);
        break;
      default:
        console.log("try again");
    }
  });
});

allClear.addEventListener("click", () => {
  display.innerText = "";
  factors = [];
  console.log(factors);
});

backSpace.addEventListener("click", () => {
  let slicedDisplay = display.innerText.slice(0, -1);
  display.innerText = slicedDisplay
});

function add(...args) {
  return args.reduce(function (acc, curr) {
    return acc + curr;
  });
}

function subtract(...args) {
  return args.reduce(function (acc, curr) {
    return acc - curr;
  });
}

function multiply(...args) {
  return args.reduce(function (acc, curr) {
    return acc * curr;
  });
}
function divide(...args) {
  return args.reduce(function (acc, curr) {
    return acc / curr;
  });
}


