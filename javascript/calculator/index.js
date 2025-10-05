let num1=8;
let num2=2;

document.getElementById("num1").textContent=num1;
document.getElementById("num2").textContent=num2;

function add() {
    let sum=num1+num2;
    document.getElementById("result").innerText="Sum: "+sum;
}

function substract() {
    let difference=num1-num2;
    document.getElementById("result").innerText="Sum: "+difference;
}

function multiply() {
    let product=num1*num2;
    document.getElementById("result").innerText="Sum: "+product;
}

function divide() {
    let quotient=num1/num2;
    document.getElementById("result").innerText="Sum: "+quotient;
}