let number1 = (prompt("Enter the first number"));
let number2 = (prompt("Enter the second number"));
let operator = prompt("Enter the operator");

let result = 0;

function suma(number1, number2) {
    return number1 + number2;
}

function resta(number1, number2) {
    return number1 - number2;
}

function multiplicacion(number1, number2) {
    return number1 * number2;
}

function division(number1, number2) {
    return number1 / number2;
}

function residuo(number1, number2) {
    return number1 % number2;
}


if (operator == "+") {
    result = suma(parseFloat(number1), parseFloat(number2));
} else if (operator == "-") {
    result = resta(parseFloat(number1), parseFloat(number2));
} else if (operator == "*") {
    result = multiplicacion(parseFloat(number1), parseFloat(number2));
} else if (operator == "/") {
    result = division(parseFloat(number1), parseFloat(number2));
} else if (operator == "%") {
    result = residuo(parseFloat(number1), parseFloat(number2));
}

document.write(`El resultado es: ${result}`);
