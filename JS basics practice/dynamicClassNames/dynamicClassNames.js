let h1Element = document.createElement('h1');
h1Element.textContent = "Web Technologies";

let containerElement = document.getElementById('myContainer');
containerElement.appendChild(h1Element);

let buttonElement = document.createElement('button');
buttonElement.textContent = "Change Color";

containerElement.appendChild(buttonElement);

buttonElement.onclick = function() {
    h1Element.textContent = "4.0 Technologies";
    h1Element.classList.add("heading");
}

let removeButtonElement = document.createElement('button');
removeButtonElement.textContent = "Remove Color";

containerElement.appendChild(removeButtonElement);

removeButtonElement.onclick = function() {
    h1Element.textContent = "Web Technologies";
    h1Element.classList.remove("heading");
}