let display = document.getElementById('display');
let buttons = document.querySelectorAll('input[type=button]');
let operator = "";
let val1 = 0;
let val2 = 0;
let result = 0;
let resetDisplay = false;

for (let button of buttons) {
    button.addEventListener('click', function() {
        changeDisplay(this.value);
    })
}

function changeDisplay(value) {
    if (display.value == "0") {
        display.value = "";
    }

    switch (value) {
        case '+':
            operator = '+';
            val1 = eval(display.value) + val1;
            resetDisplay = true;
            console.log(val1);
            break;
        case '-':
            operator = '-';
            val1 = eval(display.value) - val1;
            resetDisplay = true;
            console.log(val1);
            break;
        case '*':
            operator = '*';
            break;
        case '/':
            operator = '/';
            break;
        case '=':
            val2 = display.value;
            result = eval(val1 + operator + val2);
            display.value = result;
            break;
        default:
            if (resetDisplay) {
                display.value = "";
                resetDisplay = false;
            }

            display.value += value;
            break;
    }
}
