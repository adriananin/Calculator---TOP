const add = function (x, y) {
  return Math.round((x + y) * 10) / 10;
};

const subtract = function (x, y) {
  return Math.round((x - y) * 10) / 10;
};

const multiply = function (x, y) {
  return Math.round(x * y * 10) / 10;
};

const divide = function (x, y) {
  return Math.round((x / y) * 10) / 10;
};

const operate = function (operator, x, y) {
  if (operator === "+") {
    return add(x, y);
  } else if (operator === "-") {
    return subtract(x, y);
  } else if (operator === "*") {
    return multiply(x, y);
  } else if (operator === "/") {
    if (y === 0) {
      return "Really? LOL";
    } else {
      return Math.round((firstOperand / secondOperand) * 10) / 10;
    }
  } else {
    return "Sorry:(";
  }
};

let firstOperand = "";
let secondOperand = "";
let operator = "";

const buttons = document.querySelectorAll("button");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const value = this.getAttribute("value");
    if (isNaN(value)) {
      if (value === "=") {
        const result = operate(operator, +firstOperand, +secondOperand);
        firstOperand = result;
        secondOperand = "";
        operator = "";
      } else if (value === ".") {
        if (!operator) {
          if (firstOperand.indexOf(".") === -1) {
            firstOperand += value;
          }
        } else {
          if (secondOperand.indexOf(".") === -1) {
            secondOperand += value;
          }
        }
      } else if (value === "backspace") {
        if (!operator) {
          firstOperand = firstOperand.slice(0, -1);
        } else {
          secondOperand = secondOperand.slice(0, -1);
        }
      } else if (value === "delete") {
        firstOperand = "";
        secondOperand = "";
        operator = "";
      } else {
        operator = value;
      }
    } else {
      if (!operator) {
        firstOperand += value;
      } else {
        secondOperand += value;
      }
    }
    updateScreen();
  });
});

function updateScreen() {
  const screen = document.getElementById("screen");
  if (firstOperand || secondOperand) {
    screen.innerHTML = firstOperand + " " + operator + " " + secondOperand;
  } else {
    screen.innerHTML = "";
  }
}
