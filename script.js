const button1 = document.getElementById("number1");
const button2 = document.getElementById("number2");
const button3 = document.getElementById("number3");
const button4 = document.getElementById("number4");
const button5 = document.getElementById("number5");
const button6 = document.getElementById("number6");
const button7 = document.getElementById("number7");
const button8 = document.getElementById("number8");
const button9 = document.getElementById("number9");
const addition = document.getElementById("addition");
const subtraction = document.getElementById("subtraction");
const equalization = document.getElementById("equalization");
const division = document.getElementById("division");
const multiplication = document.getElementById("multiplication");
const clear = document.getElementById("clear")

button1.addEventListener("click", function() {
    let content = document.getElementById("numberholder").textContent;
    document.getElementById("numberholder").textContent = content + 1;
})
button2.addEventListener("click", function() {
    let content = document.getElementById("numberholder").textContent;
    document.getElementById("numberholder").textContent = content + 2;
})
button3.addEventListener("click", function() {
    let content = document.getElementById("numberholder").textContent;
    document.getElementById("numberholder").textContent = content + 3;
})
button4.addEventListener("click", function() {
    let content = document.getElementById("numberholder").textContent;
    document.getElementById("numberholder").textContent = content + 4;
})
button5.addEventListener("click", function() {
    let content = document.getElementById("numberholder").textContent;
    document.getElementById("numberholder").textContent = content + 5;
})
button6.addEventListener("click", function() {
    let content = document.getElementById("numberholder").textContent;
    document.getElementById("numberholder").textContent = content + 6;
})
button7.addEventListener("click", function() {
    let content = document.getElementById("numberholder").textContent;
    document.getElementById("numberholder").textContent = content + 7;
})
button8.addEventListener("click", function() {
    let content = document.getElementById("numberholder").textContent;
    document.getElementById("numberholder").textContent = content + 8;
})
button9.addEventListener("click", function() {
    let content = document.getElementById("numberholder").textContent;
    document.getElementById("numberholder").textContent = content + 9;
})
addition.addEventListener("click", function() {
    let content = document.getElementById("numberholder").textContent;
    document.getElementById("numberholder").textContent = content + "+";
})
subtraction.addEventListener("click", function() {
    let content = document.getElementById("numberholder").textContent;
    document.getElementById("numberholder").textContent = content + "-";
})
division.addEventListener("click", function() {
    let content = document.getElementById("numberholder").textContent;
    document.getElementById("numberholder").textContent = content + "/";
})
multiplication.addEventListener("click", function() {
    let content = document.getElementById("numberholder").textContent;
    document.getElementById("numberholder").textContent = content + "*";
})
clear.addEventListener("click", function() {
    document.getElementById("numberholder").textContent = " ";
})

equalization.addEventListener("click", function() {
    let content = document.getElementById("numberholder").textContent;
    try {
        let result = eval(content);
        document.getElementById("numberholder").textContent = result;
    } catch {
        document.getElementById("numberholder").textContent = "Invalid (error)";
    }
})
