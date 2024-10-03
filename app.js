let displayValue = '';

function clearDisplay() {
    displayValue = '';
    document.querySelector('.box').value = displayValue;
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    document.querySelector('.box').value = displayValue;
}

function appendNumber(number) {
    displayValue += number;
    document.querySelector('.box').value = displayValue;
    
}

function appendOperator(operator) {
    if (displayValue === '' && operator !== '-') return;  // Prevent adding operator at the beginning
    displayValue += operator;
    document.querySelector('.box').value = displayValue;
}

function calculate() {
    try {
        displayValue = eval(displayValue);  // Using eval for simplicity
        document.querySelector('.box').value = displayValue;
    } catch (error) {
        document.querySelector('.box').value = 'Error';
        displayValue = '';
    }
}