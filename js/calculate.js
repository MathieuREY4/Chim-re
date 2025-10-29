(function () {
  const calculatorWindow = document.getElementById("calculator-window");
  if (!calculatorWindow) return;

  const display = calculatorWindow.querySelector("#calculator-display");
  const buttons = calculatorWindow.querySelector(".calculator-buttons");

  let currentInput = "";
  let operator = null;
  let firstOperand = null;
  let resetDisplay = false;

  function updateDisplay(value) {
    if (value.length > 10) {
      display.textContent = "Error";
      currentInput = "";
    } else {
      display.textContent = value;
    }
  }

  function handleNumber(number) {
    if (resetDisplay) {
      currentInput = number;
      resetDisplay = false;
    } else {
      currentInput += number;
    }
    updateDisplay(currentInput);
  }

  function handleDecimal() {
    if (resetDisplay) {
      currentInput = "0.";
      resetDisplay = false;
    } else if (!currentInput.includes(".")) {
      currentInput += ".";
    }
    updateDisplay(currentInput);
  }

  function handleOperator(nextOperator) {
    if (operator && resetDisplay) {
      operator = nextOperator;
      return;
    }

    const inputValue = parseFloat(currentInput);

    if (firstOperand === null) {
      firstOperand = inputValue;
    } else if (operator) {
      const result = operate(firstOperand, operator, inputValue);
      updateDisplay(String(result));
      firstOperand = result;
    }

    operator = nextOperator;
    resetDisplay = true;
  }

  function handleEquals() {
    if (operator === null || resetDisplay) {
      return;
    }

    const inputValue = parseFloat(currentInput);
    const result = operate(firstOperand, operator, inputValue);
    updateDisplay(String(result));

    firstOperand = null;
    operator = null;
    resetDisplay = true;
  }

  function operate(a, op, b) {
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "x":
        return a * b;
      case "/":
        return a / b;
      case "%":
        return a % b;
      default:
        return b;
    }
  }

  function handleClear() {
    currentInput = "";
    firstOperand = null;
    operator = null;
    updateDisplay("0");
  }

  function handleToggleSign() {
    if (currentInput) {
      currentInput = String(parseFloat(currentInput) * -1);
      updateDisplay(currentInput);
    }
  }

  buttons.addEventListener("click", (event) => {
    const target = event.target;
    if (!target.classList.contains("calc-btn")) return;

    if (target.classList.contains("num-btn")) {
      handleNumber(target.textContent);
    } else if (target.classList.contains("op-btn")) {
      const op = target.textContent;
      if (op === "C") {
        handleClear();
      } else if (op === "±") {
        handleToggleSign();
      } else {
        handleOperator(op);
      }
    } else if (target.classList.contains("equals-btn")) {
      handleEquals();
    }
  });
})();
