const screen = document.getElementById("screen");
let firstNumber;
let secondNumber;
let operator;
let displayValue = screen.innerText;

//Basic Calculations
const add = (firstNumber, secondNumber) => {
    return screen.innerText = Number(firstNumber) + Number(secondNumber);
}
const subtract = (firstNumber, secondNumber) => {
    return screen.innerText = Number(firstNumber) - Number(secondNumber);
}
const multiply = (firstNumber, secondNumber) => {
    return screen.innerText = Number(firstNumber) * Number(secondNumber);
}
const divide = (firstNumber, secondNumber) => {
    if (Number(secondNumber) == 0) {
        firstNumber = "";
        secondNumber = "";
        operator = "";
        displayValue = "";
        screen.innerText = "ERROR: Divide by 0";
        return "";
    }
    else {
        return screen.innerText = Number(firstNumber) / Number(secondNumber);
    }
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

const displayButtons = document.querySelectorAll(".displayButton");
displayButtons.forEach((displayButton) => {
    displayButton.addEventListener("click", function() {
        if (screen.innerText == firstNumber) {
            screen.innerText = "";
        }
        screen.innerText += displayButton.textContent;
    });
})

//Stores first number to be used in calculation when operator is selected and clears screen
const addition = document.getElementById("addition");
addition.addEventListener("click", () => {
    if (firstNumber !== "" && firstNumber !== undefined) {
        if (operator == "+") {
            firstNumber = add(firstNumber, screen.innerText);
        }
        else if (operator == "-") {
            firstNumber = subtract(firstNumber, screen.innerText);
        }
        else if (operator == "x") {
            firstNumber = multiply(firstNumber, screen.innerText);
        }
        else if (operator == "/") {
            firstNumber = divide(firstNumber, screen.innerText);
        }
        secondNumber = "";
        operator = "+";
        screen.innerText = firstNumber;
    }
    else {
        firstNumber = screen.innerText;
        operator = "+";
        screen.innerText = "";
    }
})
const subtraction = document.getElementById("subtraction");
subtraction.addEventListener("click", () => {
    if (firstNumber !== "" && firstNumber !== undefined) {
        if (operator == "+") {
            firstNumber = add(firstNumber, screen.innerText);
        }
        else if (operator == "-") {
            firstNumber = subtract(firstNumber, screen.innerText);
        }
        else if (operator == "x") {
            firstNumber = multiply(firstNumber, screen.innerText);
        }
        else if (operator == "/") {
            firstNumber = divide(firstNumber, screen.innerText);
        }
        //firstNumber = Number(firstNumber) - Number(screen.innerText);
        secondNumber = "";
        operator = "-";
        screen.innerText = firstNumber;
    }
    else {
        firstNumber = screen.innerText;
        operator = "-";
        screen.innerText = "";
    }
})
const multiplication = document.getElementById("multiplication");
multiplication.addEventListener("click", () => {
    if (firstNumber !== "" && firstNumber !== undefined) {
        if (operator == "+") {
            firstNumber = add(firstNumber, screen.innerText);
        }
        else if (operator == "-") {
            firstNumber = subtract(firstNumber, screen.innerText);
        }
        else if (operator == "x") {
            firstNumber = multiply(firstNumber, screen.innerText);
        }
        else if (operator == "/") {
            firstNumber = divide(firstNumber, screen.innerText);
        }
        //firstNumber = Number(firstNumber) * Number(screen.innerText);
        secondNumber = "";
        operator = "x";
        screen.innerText = firstNumber;
    }
    else {
        firstNumber = screen.innerText;
        operator = "x";
        screen.innerText = "";
    }
})
const division = document.getElementById("division");
division.addEventListener("click", () => {
    if (firstNumber !== "" && firstNumber !== undefined) {
        if (operator == "+") {
            firstNumber = add(firstNumber, screen.innerText);
        }
        else if (operator == "-") {
            firstNumber = subtract(firstNumber, screen.innerText);
        }
        else if (operator == "x") {
            firstNumber = multiply(firstNumber, screen.innerText);
        }
        else if (operator == "/") {
            firstNumber = divide(firstNumber, screen.innerText);
        }
        //firstNumber = Number(firstNumber) / Number(screen.innerText);
        secondNumber = "";
        operator = "/";
        screen.innerText = firstNumber;
    }
    else {
        firstNumber = screen.innerText;
        operator = "/";
        screen.innerText = "";
    }
})

const equals = document.getElementById("equals");
equals.addEventListener("click", () => {
    secondNumber = screen.innerText;
    if (secondNumber !== "" && secondNumber !== undefined) {
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
    }
    else;
})

const clear = document.getElementById("clear");
clear.addEventListener("click", () => {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    displayValue = "";
    screen.innerText = "";
})