function add() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("display").value = num1 + num2;
}

function subtract() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("display").value = num1 - num2;
}

function multiply() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("display").value = num1 * num2;
}

function divide() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("display").value = num2 !== 0 ? num1 / num2 : "Error";
}

function square()
{
    const num1 = parseFloat(document.getElementById("num1").value); 
    document.getElementById("display").value = num1 * num1; 
}