let backgroundContainer = document.getElementById("colorPickerContainer");
let selectedColorHexCode = document.getElementById("selectedColorHexCode");
function button1(){
    let selectedColor = document.getElementById("button1").textContent;
    backgroundContainer.style.backgroundColor = selectedColor;
    selectedColorHexCode.textContent = selectedColor;
}
function button2(){
    let selectedColor = document.getElementById("button2").textContent;
    backgroundContainer.style.backgroundColor = selectedColor;
    selectedColorHexCode.textContent = selectedColor;
}
function button3(){
    let selectedColor = document.getElementById("button3").textContent;
    backgroundContainer.style.backgroundColor = selectedColor;
    selectedColorHexCode.textContent = selectedColor;
}
function button4(){
    let selectedColor = document.getElementById("button4").textContent;
    backgroundContainer.style.backgroundColor = selectedColor;
    selectedColorHexCode.textContent = selectedColor;
}