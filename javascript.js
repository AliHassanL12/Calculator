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


const display = document.querySelector(".display");
const header = document.querySelector(".header");
display.textContent = 0;

let btnClicked = document.querySelectorAll(".button");

btnClicked.forEach(button => {
    button.addEventListener("click", function() {
        display.textContent = "";
        let storeNumber = button.textContent
        header.textContent += storeNumber;
        display.textContent += storeNumber;
    }) 
});

let operators = document.querySelectorAll(".operator");

operators.forEach(operator => {
    operator.addEventListener("click", function() {
        header.textContent += operator.textContent;
    })
})