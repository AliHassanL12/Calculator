function addition(a,b){
    return a+b;
}

function subtraction(a,b){
    return a-b;
}

function multiplication(a,b){
    return a*b;
}

function division(a,b){
    return a/b;
}

let firstNumber, operator, secondNumber;

function operate(num1, num2, operator){
    if (operator == "+"){
        return addition(num1,num2);
    }
    else if (operator == "-"){
        return subtraction(num1,num2);
    }
    else if (operator == "*"){
        return multiplication(num1,num2);
    }
    else if (operator == "/"){
        return division(num1,num2);
    }
}

//display populated with random numbers 

const display = document.querySelector(".display")
display.textContent = "139";