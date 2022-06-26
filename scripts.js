
let resultString = '';
let num2 = 0;
let runningTotal = 0;
let regEx = /\d/;
let zeroCheck = /(0\d+)/;
let timesCalled = 0;
let savedOperator = '';

const results = document.querySelector('#results');
const resultsDisplay = document.createElement('div');

const buttons = document.querySelectorAll('button')
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if(regEx.test(button.id) == true) {
                displayNumbers(button.id);
            }
            else if(regEx.test(button.id) == false && button.id == 'clear') {
                clear();
            }
            else if(regEx.test(button.id) == false) {
                updateRunningTotal();
                if (button.id == '=') {
                    runningTotal = operate(savedOperator, runningTotal, num2);
                    savedOperator = ''; 
                    resultsDisplay.textContent = runningTotal;
                    results.appendChild(resultsDisplay);
                }
                else {
                    if (savedOperator != '' && num2 != '') {
                        runningTotal = operate(savedOperator, runningTotal, num2);
                        savedOperator = ''; 
                        resultsDisplay.textContent = runningTotal;
                        results.appendChild(resultsDisplay);
                    }
                    savedOperator = button.id;
                }
            }
        });
    });

function add(num1, num2) {
    result = num1+num2;
    return result;
}

function subtract(num1, num2) {
    result = num1 - num2;
    return result;
}

function multiply(num1, num2) {
    result = num1*num2;
    return result;
}

function divide(num1, num2) {
    if (num2 == 0) {
        alert('You can not divide by zero!')
        return num1;
    }
    result = num1/num2;
    return result;
}

function operate(op, num1, num2) {
    if (typeof(num2) != 'number') {
        result = num1; 
        return result;
    }
    if (op == '+') {
        result = add(num1, num2);
    }
    else if (op == '-') {
        result = subtract(num1, num2);
    }
    else if (op == '*') {
        result = multiply(num1,num2);
    }
    else if (op == '/') {
        result = divide(num1, num2);
    }
    else if (op == '') {
        result = num1; 
    }
    else if (op == '%') {
        result = num1 % num2; 
    }
    return result;
}

function displayNumbers(data) {
    if (data == '0' && zeroCheck.test(resultString) == true) {
        return;
    }
    resultString += data; 
    resultsDisplay.textContent = resultString;
    results.appendChild(resultsDisplay);
}

function updateRunningTotal() {
    if (timesCalled == 0) {
    runningTotal = +resultString;
    resultString = ''; 
    timesCalled++
    } else if (timesCalled > 0) {
        if (resultString != '') {
        num2 = +resultString;
        resultString = ''; 
        }
        else if (resultString == '') {
        savedOperator = '';
        }
    }
}

function clear() {
    resultString = '';
    num2 = 0;
    runningTotal = 0;
    timesCalled = 0;
    savedOperator = '';
    resultsDisplay.textContent = ''
    results.appendChild(resultsDisplay);
}

/* function buttonPress() {
    const buttons = document.querySelectorAll('button')
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            alert(button.id);
        });
    });
} */