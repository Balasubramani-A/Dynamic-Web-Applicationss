let imageElement = document.getElementById("image");

let defaultImageWidth = 200;

imageElement.style.width = defaultImageWidth + "px";

let warningMessage = document.getElementById("warningMessage");
let imageWidth = document.getElementById("imageWidth");

function increase(){
    
    if(parseInt(imageElement.style.width) >= 300){
        warningMessage.textContent = "Can't Visible, Please reduce image size";
    }
    else{
        warningMessage.textContent = "";
        let currentWidth = parseInt(imageElement.style.width);
        imageElement.style.width = (currentWidth + 5) + "px";
        imageWidth.textContent = currentWidth + "px";
    }
}
function decrease(){
    if(parseInt(imageElement.style.width) <= 100){
        warningMessage.textContent = "Can't Visible, Please increase image size";
    }
    else{
        warningMessage.textContent = "";
        let currentWidth = parseInt(imageElement.style.width);
        imageElement.style.width = (currentWidth - 5) + "px";
        imageWidth.textContent = currentWidth + "px";
    }
}



