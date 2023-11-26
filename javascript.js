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
const header = document.querySelector(".header");

display.textContent = 0;
let num1= "";
let num2= "";
let op = "";
let newResult = 0;
let result = 0;
let isFirstNum = false;
let isSecondNum = false;

function populateDisplay(){
    if (display.textContent == 0){
        display.textContent = " ";
    }
    if (isFirstNum == false){
        num1 += this.textContent;
        display.textContent = num1;
    }
    else if (isFirstNum == true && isSecondNum == false){
        num2 += this.textContent;
        display.textContent =  num2;
    }
    else {
        num2 += this.textContent;
        display.textContent = num2;
    }
}

function checkOperation(){
    if (isFirstNum == false && isSecondNum == false){
        op = this.textContent;
        isFirstNum = true;
    }
    else if (isFirstNum == true && isSecondNum == false){
        result = operate(num1, num2, op);
        display.textContent = result;
        num1 = result;
        isSecondNum = true;
        num2="";
    }
    else if (isFirstNum == true && isSecondNum == true){
        op = this.textContent;
        console.log(op);
        result = operate(result, num2, op);
        display.textContent = result;
        num2 = "";
    }
}


operations.forEach(operation => {
    operation.addEventListener("click", checkOperation);
})

buttons.forEach(button => {
    button.addEventListener("click", populateDisplay);
});
