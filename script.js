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
 function operate(num1, num2, operator) {
    let result;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);


 
  


    if (operator === "+") {
        result = add(num1, num2);
    } else if (operator === "-") {
        result = subtract(num1, num2);
    } else if (operator === "*") {
        result = multiply(num1, num2);
    } else if (operator === "/") {
        if (num2 === 0) {
            return "You can't divide by zero, silly!";
        } else {
            result = divide(num1, num2);
        }
    }
      
    return result.toFixed(2);  
}

/////// buttons configuration 

 let display= document.getElementById("screen") ;
document.getElementById("one").addEventListener("click", function (){
   
   display.value+=1;
});
document.getElementById("two").addEventListener("click",function (){
    display.value+=2;
});
document.getElementById("three").addEventListener("click",function (){
    display.value+=3;
});
document.getElementById("four").addEventListener("click",function (){
    display.value+=4;
});
document.getElementById("five").addEventListener("click",function (){
    display.value+=5;
});
document.getElementById("six").addEventListener("click",function (){
    display.value+=6;
});
document.getElementById("seven").addEventListener("click",function (){
    display.value+=7;
});
document.getElementById("eight").addEventListener("click", function (){
    display.value+=8;
});
document.getElementById("nine").addEventListener("click", function (){
    display.value+=9;
});
document.getElementById("zero").addEventListener("click", function (){
    display.value+=0;
});

document.getElementById("clear").addEventListener("click", function (){
    display.value = ''; 
    num1 = null;
    num2 = null;
    operator = null;

})

document.getElementById("backSpace").addEventListener("click", function (){
   let backSpaced =  display.value.replace(/.$/, "");
   display.value = backSpaced ;
   
})
document.getElementById("plusOperator").addEventListener("click", function() {
    handleOperatorClick("+");
});
document.getElementById("minusOperator").addEventListener("click", function() {
    handleOperatorClick("-");
});
document.getElementById("multiplier").addEventListener("click", function() {
    handleOperatorClick("*");
});
document.getElementById("divider").addEventListener("click", function() {
    handleOperatorClick("/");
});


document.getElementById("equality").addEventListener("click", function() {
    if (operator !== null && display.value !== '') {
        num2 = display.value;
        let result = operate(num1, num2, operator);
        display.value = result;
    
        num1 = result;
        num2 = null; 
        operator = null;
    } else {
        console.log("Incomplete input: Cannot calculate");
    }
});

function handleOperatorClick(op) {
    if (num1 !== null && operator !== null && display.value !== '') {
        num2 = display.value;
        let result = operate(num1, num2, operator);
        display.value = parseFloat(result).toFixed(2);
        num1 = result;
       
    } else {
        if (display.value !== '') {
            num1 = display.value;
           
        } else {
            console.log("num1 not set because display is empty");
        }
    }
    operator = op;
    display.value = '';
   
}



document.getElementById("decimal").addEventListener("click", function() {
    if (!display.value.includes(".")) {
        display.value += ".";
    }
});

