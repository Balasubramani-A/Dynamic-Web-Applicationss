let billAmount = document.getElementById("billAmount");
let percentageTip = document.getElementById("percentageTip");
let tipAmount = document.getElementById("tipAmount");
let total = document.getElementById("totalAmount");
let invalid = document.getElementById("errorMessage");

function calculate() {
    let n1 = parseInt(billAmount.value);
    let n2 = parseInt(percentageTip.value);
    if ((n1) && (n2)) {
        tipAmount.value = (n2 / 100) * n1;
        total.value = n1 + parseInt(tipAmount.value);
        invalid.textContent = "";
    } else {
        invalid.textContent = "Please Enter a Valid Input";
        invalid.style.color = "red";
    }

}