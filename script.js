let firstNumber;
let secondNumber;
let operator;
let displayValue;

//Basic Calculations
const add = (firstNumber, secondNumber) => {
    screen.innerText = Number(firstNumber) + Number(secondNumber);
}
const subtract = (firstNumber, secondNumber) => {
    screen.innerText = Number(firstNumber) - Number(secondNumber);
}
const multiply = (firstNumber, secondNumber) => {
    screen.innerText = Number(firstNumber) * Number(secondNumber);
}
const divide = (firstNumber, secondNumber) => {
    screen.innerText = Number(firstNumber) / Number(secondNumber);
}

//Determines when to operate and which calculation to make
const operate = (operator, firstNumber, secondNumber) => {
    if (operator === "+") {
        return add(firstNumber, secondNumber);
    }
    if (operator === "-") {
        return subtract(firstNumber, secondNumber);
    }
    if (operator === "x") {
        return multiply(firstNumber, secondNumber);
    }
    if (operator === "/") {
        return divide(firstNumber, secondNumber);
    }
}

//Sets screen equal to current number and stores that value
const screen = document.getElementById("screen");
const displayButtons = document.querySelectorAll(".displayButton");
displayButtons.forEach((displayButton) => {
    displayButton.addEventListener("click", function() {
        screen.innerText += displayButton.textContent;
        displayValue = screen.innerText;
    });
})

//Stores first number to be used in calculation when operator is selected and clears screen
const addition = document.getElementById("addition");
addition.addEventListener("click", () => {
    firstNumber = screen.innerText;
    operator = "+";
    screen.innerText = "";
})
const subtraction = document.getElementById("subtraction");
subtraction.addEventListener("click", () => {
    firstNumber = screen.innerText;
    operator = "-";
    screen.innerText = "";
})
const multiplication = document.getElementById("multiplication");
multiplication.addEventListener("click", () => {
    firstNumber = screen.innerText;
    operator = "x";
    screen.innerText = "";
})
const division = document.getElementById("division");
division.addEventListener("click", () => {
    firstNumber = screen.innerText;
    operator = "/";
    screen.innerText = "";
})

const equals = document.getElementById("equals");
equals.addEventListener("click", () => {
    secondNumber = screen.innerText;
    if (operator === "+") {
        add(firstNumber, secondNumber);
    }
    else if (operator === "-") {
        subtract(firstNumber, secondNumber);
    }
    else if (operator === "x") {
        multiply(firstNumber, secondNumber);
    }
    else if (operator === "/") {
        divide(firstNumber, secondNumber);
    }
})

const clear = document.getElementById("clear");
clear.addEventListener("click", () => {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    displayValue = "";
    screen.innerText = "";
})