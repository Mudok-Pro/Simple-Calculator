function addThem(){
    const digitA = document.getElementsByClassName("number"); 
    const digitB = document.getElementsByClassName("number");
    const result = digitA + digitB ; 
    return result;
}

function subtractThem(){
    const digitA = document.getElementsByClassName("number"); 
    const digitB = document.getElementsByClassName("number");
    const result = digitA - digitB ; 
    return result;
}
function multiplyThem(){
    const digitA = document.getElementsByClassName("number"); 
    const digitB = document.getElementsByClassName("number");
    const result = digitA * digitB ; 
    return result;
}
function divideThem(){
    const digitA = document.getElementsByClassName("number"); 
    const digitB = document.getElementsByClassName("number");
    const result = digitA / digitB ; 
    if (digitB === 0){
        alert("LMAO")
    }else {
    return result;
}
}
