let stopButton = document.getElementById("stopButton");
let stopLight = document.getElementById("stopLight");

let readyButton = document.getElementById("readyButton");
let readyLight = document.getElementById("readyLight");

let goButton = document.getElementById("goButton");
let goLight = document.getElementById("goLight");

function stopOn(){
    
    stopButton.style.backgroundColor = "#cf1124";
    stopLight.style.backgroundColor = "#cf1124";
    
    readyButton.style.backgroundColor = "#1f1d41";
    readyLight.style.backgroundColor = "#4b5069";
    goButton.style.backgroundColor = "#1f1d41";
    goLight.style.backgroundColor = "#4b5069";
    
    
}
function readyOn(){
    
    readyButton.style.backgroundColor = "#f7c948";
    readyLight.style.backgroundColor = "#f7c948";
    
    goButton.style.backgroundColor = "#1f1d41";
    goLight.style.backgroundColor = "#4b5069";
    stopButton.style.backgroundColor = "#1f1d41";
    stopLight.style.backgroundColor = "#4b5069";
    
}
function goOn(){
    
    goButton.style.backgroundColor = "#199473";
    goLight.style.backgroundColor = "#199473";
    
    stopButton.style.backgroundColor = "#1f1d41";
    stopLight.style.backgroundColor = "#4b5069";
    readyButton.style.backgroundColor = "#1f1d41";
    readyLight.style.backgroundColor = "#4b5069";
}   