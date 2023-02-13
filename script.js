// const email = document.querySelector(".email-input")
// const password = document.querySelector(".password-input")
// const btn = document.querySelector(".submit-btn")
// const form = document.querySelector(".form")
// const tit = document.querySelector(".text")
//
// let num = 4
//
// form.addEventListener("submit", (e) => {
//     e.preventDefault()
//     console.log(email.value)
//     console.log(password.value)
//
//     if (email.value === "bishkek@gmail.com" && password.value === "hhh445mmm") {
//         email.value = ""
//         password.value = ""
//         tit.innerHTML = "Салам!"
//     } else {
//         num--
//         if (num === 4) {
//
//             tit.innerHTML = "3 попытка калды!"
//         }
//         else if (num === 3) {
//             tit.innerHTML = "3 попытка калды!"
//             email.value = ""
//             password.value = ""
//             tit.style.color = "blue"
//         }
//         else if (num === 2) {
//             tit.innerHTML = "2 попытка калды!"
//             email.value = ""
//             password.value = ""
//             tit.style.color = "yellow"
//         }
//         else if (num === 1) {
//             tit.innerHTML = "1 попытка калды!"
//             email.value = ""
//             password.value = ""
//             tit.style.color = "pink"
//         }
//         else if (num === 0) {
//             tit.innerHTML = "Доступ жок!"
//             email.value = ""
//             password.value = ""
//             tit.style.color = "red"
//             btn.setAttribute("disabled", "disabled")
//         }
//     }
//
//
// })




const calculator = {
    outputValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

function updateOutputValue(btn) {
    const displayValue = document.getElementById('output-value');

    if (calculator.waitingForSecondOperand === true) {
        calculator.waitingForSecondOperand = false;
        calculator.outputValue = btn;
        displayValue.textContent = calculator.outputValue;
    } else {
        calculator.outputValue =
            calculator.outputValue === '0' ? btn : calculator.outputValue + btn;
        displayValue.textContent = calculator.outputValue;
    }
}

function performCalculation() {
    if (calculator.firstOperand === null || calculator.operator === null) {
        return;
    }

    let result = 0;
    const value = parseFloat(calculator.outputValue);
    const first = calculator.firstOperand;
    switch (calculator.operator) {
        case '+':
            result = first + value;
            break;
        case '-':
            result = first - value;
            break;
        case '&times;':
            result = first * value;
            break;
        case '&divide;':
            result = first / value;
            break;
        default:
            return;
    }

    calculator.outputValue = result;
    calculator.firstOperand = result;
    document.getElementById('output-value').textContent = calculator.outputValue;
}

function handleOperator(operator) {
    if (calculator.firstOperand === null) {
        calculator.firstOperand = parseFloat(calculator.outputValue);
    } else if (calculator.operator) {
        performCalculation();
    }

    calculator.operator = operator;
    calculator.waitingForSecondOperand = true;
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const btn = event.target.textContent;
        switch (btn) {
            case 'C':
                calculator.outputValue = '0';
                calculator.firstOperand = null;
                calculator.waitingForSecondOperand = false;
                calculator.operator = null;
                document.getElementById('output-value').textContent = calculator.outputValue;
                break;
            case '=':
                performCalculation();
                break;
            case '+':
            case '-':
            case '&times;':
            case '&divide;':
                handleOperator(btn);
                break;
            default:
                updateOutputValue(btn);
                break;
        }
    });
});




























