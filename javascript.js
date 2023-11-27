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
    if (a == 0 || b == 0){
        return "ERROR";
    }
    return Math.round(a* 100.0 /b) / 100;
}

let firstNumber, operator, secondNumber;

function operate(num1, num2, operator){
    num1 = Number(num1);
    num2 = Number(num2);
    if (operator == "+"){
        return addition(num1,num2);
    }
    else if (operator == "-"){
        return subtraction(num1,num2);
    }
    else if (operator == "x"){
        return multiplication(num1,num2);
    }
    else if (operator == "÷"){
        return division(num1,num2);
    }
}

const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".button");
const operations = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");

display.textContent = 0;
let num1 = "";
let num2 = "";
let op = "";
let result = 0;
isFirstNumDone = false;

function populateDisplay(){
    if (display.textContent == 0){
        display.textContent = " ";
    }
    if (isFirstNumDone == true){
        num2 += this.textContent;
        display.textContent = num2;
    }
    else {
        num1 += this.textContent;
        display.textContent = num1;
    }
}

function checkOperation(){
    if (isFirstNumDone == false){
        op = this.textContent;
        isFirstNumDone = true;
    }
    else {
        result = operate(num1, num2, op);
        op = this.textContent;
        num1 = result;
        num2 = "";
        display.textContent = result;
    }
}


operations.forEach(operation => {
    operation.addEventListener("click", checkOperation);
})

buttons.forEach(button => {
    button.addEventListener("click", populateDisplay);
});

equal.addEventListener("click", function() {
    result = operate(num1, num2, op);
    num1 = result;
    num2 = "";
    isFirstNumDone = false;
    display.textContent = result;
});

clear.addEventListener("click", function(){
    display.textContent = 0;
    num1 = "";
    num2 = "";
    op = "";
    result = 0;
    isFirstNumDone = false;
});