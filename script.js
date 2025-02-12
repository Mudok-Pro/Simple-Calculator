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
/////// buttons configuration 
document.getElementById("screen")
document.getElementById("one").addEventListener("click", displayDate);
document.getElementById("two").addEventListener("click", displayDate);
document.getElementById("three").addEventListener("click", displayDate);
document.getElementById("four").addEventListener("click", displayDate);
document.getElementById("five").addEventListener("click", displayDate);
document.getElementById("six").addEventListener("click", displayDate);
document.getElementById("seven").addEventListener("click", displayDate);
document.getElementById("eight").addEventListener("click", displayDate);
document.getElementById("nine").addEventListener("click", displayDate);
document.getElementById("zero").addEventListener("click", displayDate);




console.log(operate(2,5,"+"))
console.log(operate(2,5,"-"))
console.log(operate(2,5,"/"))
