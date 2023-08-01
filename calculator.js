const number = document.querySelectorAll(".num");
// const displayNumbers = document.querySelectorAll(".display-value")
const display = document.querySelector(".display");
const symbol = document.querySelectorAll(".symbol");
const equal = document.querySelector(".equal");
const allClear = document.querySelector(".allclear");
const backSpace = document.querySelector(".backspace");
const minus = document.querySelector(".minus")
const answer = document.querySelector(".answer")
let factors = [];
let newNum
let newSym


//make this a grab number function inside a for loop/for-each loop
number.forEach((num) => {
  num.addEventListener("click", (e) => {
        //grab each number
        newNum = e.target.innerText;
        //add it to the display
        display.innerText += newNum;
        
        factors.push(parseFloat(newNum))
        console.log(factors)
    
  });
});

//make this a grab symbol function inside a for loop
symbol.forEach((sym) => {
    sym.addEventListener("click", (e) => {
        newSym = e.target.innerText
        display.innerText += newSym;
        switch (sym.innerText) {
            case "+":
                display.innerText = "+"
                break;
            case "-":
                display.innerText = "-"
                break;
            case "*":
                display.innerText = "*"
                break
            case "÷":
                display.innerText = "÷"
                break
            case "=":
                if(display.innerText.includes("+")){
                    display.innerText = add(...factors)
                } else if(display.innerText.includes("-")){
                    display.innerText = subtract(...factors)
                }else if(display.innerText.includes("*")){
                    display.innerText = multiply(...factors)
                }else if(display.innerText.includes("÷")){
                    display.innerText = divide(...factors)
                }
                
            default:
                return
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

//ToDO
//2 digit or more numbers not recognized
//why is plus sign on the display with the second number
//i cant enter decimals
//i can enter an operation more than once consecutively

