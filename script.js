let result;
let operation
let firstNumber;
let secondNumber;



function clickNumber(input) {
    if (operation === undefined) {
        if (firstNumber === undefined) {
            firstNumber = String(input);
        } else {
            firstNumber = String(firstNumber) + String(input);
        }
    } else {
        if (secondNumber === undefined) {
            secondNumber = String(input);
        } else {
            secondNumber = String(secondNumber) + String(input);
        }
    }

    console.log(firstNumber, operation, secondNumber);
}

function clickOperation(input) {
    switch (input) {
        case '+': {
            operation = '+';
            break;
        }
        case '-': {
            operation = '-';
            break;
        }
        case 'X': {
            operation = 'X';
            break;
        }
        case '÷': {
            operation = '÷'
            break;
        }
        case '=': {
            if( operation === '+') {
                result = Number(firstNumber) + Number(secondNumber);
            } else if(operation === '-') {
                result = Number(firstNumber) - Number(secondNumber);
            } else if(operation === 'X' ) {
                result = Number(firstNumber) * Number(secondNumber);
            } else if(operation === '÷') {
                result = Number(firstNumber) / Number(secondNumber);
            }
            console.log(result);
            firstNumber = undefined;
            secondNumber = undefined;
            operation = undefined;
            result = undefined;
            break;
        }
    }

}





