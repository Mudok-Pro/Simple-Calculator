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
 document.getElementById("screen");
 let display= document.getElementById("screen") ;
document.getElementById("one").addEventListener("click", function (){
   display.innerHTML+=1;
});
document.getElementById("two").addEventListener("click",function (){
    display.innerHTML+=2;
});
document.getElementById("three").addEventListener("click",function (){
    display.innerHTML+=3;
});
document.getElementById("four").addEventListener("click",function (){
    display.innerHTML+=4;
});
document.getElementById("five").addEventListener("click",function (){
    display.innerHTML+=5;
});
document.getElementById("six").addEventListener("click",function (){
    display.innerHTML+=6;
});
document.getElementById("seven").addEventListener("click",function (){
    display.innerHTML+=7;
});
document.getElementById("eight").addEventListener("click", function (){
    display.innerHTML+=8
});
document.getElementById("nine").addEventListener("click", function (){
    display.innerHTML+=9;
});
document.getElementById("zero").addEventListener("click", function (){
    display.innerHTML+=0;
});




document.getElementById("plusOperator").addEventListener("click", function(){
  num1 = display.innerHTML; 
    operator = "+";
    display.innerHTML='';
})
document.getElementById("minusOperator").addEventListener("click", function(){
  num1 = display.innerHTML; 
    operator = "-";
    display.innerHTML='';
})
document.getElementById("multiplier").addEventListener("click", function(){
  num1 = display.innerHTML; 
    operator = "*";
    display.innerHTML='';
})
document.getElementById("divider").addEventListener("click", function(){
  num1 = display.innerHTML; 
    operator = "/";
    display.innerHTML='';
})
document.getElementById("equality").addEventListener("click", function (){
    num2=display.innerHTML;
   let result= operate(num1,num2,operator);
   display.innerHTML = result;
})

console.log(operate(2,5,"+"))
console.log(operate(2,5,"-"))
console.log(operate(2,5,"/"))
