
let resultString = '';
let num1 = 0;
let num2 = 0;
let runningTotal = 0;
let regEx = /\d/;
let timesCalled = 0;

const results = document.querySelector('#results');
const resultsDisplay = document.createElement('div');

const buttons = document.querySelectorAll('button')
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if(regEx.test(button.id) == true) {
                display(button.id);
        }
            else if(regEx.test(button.id) == false) {
                if(timesCalled > 0) {
                    runningTotal = operate(button.id, runningTotal, num2);
                    resultsDisplay.textContent = runningTotal;
                    results.appendChild(resultsDisplay);
                }
                updateRunningTotal();
                timesCalled++;
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
        console.log('what are you doing lad')
    }
    result = num1/num2;
    return result;
}

function operate(op, num1, num2) {
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
    return result;
}

function display(data) {
    resultString += data; 
    resultsDisplay.textContent = resultString;
    results.appendChild(resultsDisplay);
}

function updateRunningTotal() {
    if (runningTotal == 0) {
    runningTotal = parseInt(resultString);
    resultString = ''; 
    } else if (runningTotal > 0) {
        num2 = parseInt(resultString);
        resultString = ''; 
    }
}

/* function buttonPress() {
    const buttons = document.querySelectorAll('button')
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            alert(button.id);
        });
    });
} */