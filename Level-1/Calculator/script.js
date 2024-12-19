let displayValue = "";

function updateDisplay() {
const display = document.getElementById("display");
display.innerText = displayValue || "0";
}

function appendNumber(number) {
displayValue += number.toString();
updateDisplay();
}

function appendOperator(operator) {
if (["+", "-", "*", "/", "."].includes(displayValue.slice(-1))) return;
displayValue += operator;
updateDisplay();
}

function clearDisplay() {
displayValue = "";
updateDisplay();
}

function deleteDigit() {
displayValue = displayValue.slice(0, -1);
updateDisplay();
}

function calculate() {
try {
    displayValue = eval(displayValue).toString();
} catch (e) {
    displayValue = "Error";
}
updateDisplay();
}
