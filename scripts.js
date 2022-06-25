
const buttons = document.querySelectorAll('button')
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            display(button.id);
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
        add(num1, num2);
    }
    else if (op == '-') {
        subtract(num1, num2);
    }
    else if (op == '*') {
        multiply(num1,num2);
    }
    else if (op == '/') {
        divide(num1, num2);
    }
    return result;
}

function display(data) {
    const results = document.querySelector("#results")
    results.textContent = `${data}`;
}

/* function buttonPress() {
    const buttons = document.querySelectorAll('button')
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            alert(button.id);
        });
    });
} */