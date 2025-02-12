function add(a, b) {
    return a + b;
}

// Function to divide two numbers
function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        throw new Error("Division by zero is not allowed");
    }
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to subtract one number from another
function subtract(a, b) {
    return a - b;
}
let num1 ; 
let num2 ; 
let operator ; 
 ////// a function to take two numbers and an operator 
function operate(num1,num2,operator){
    if (operator === "+"){
        return add(num1,num2)
    } else if (operator === "-"){
        return subtract(num1,num2)
    }else if (operator === "*"){
        return multiply(num1,num2)
    } else if (operator ==="/"){
        return divide(num1,num2)
    }
}

console.log(operate(2,5,"+"))
console.log(operate(2,5,"-"))
console.log(operate(2,5,"/"))
