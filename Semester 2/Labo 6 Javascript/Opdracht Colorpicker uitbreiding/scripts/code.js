const initialize = () => {
    let sliders = document.getElementsByClassName("slider");
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }
    document.getElementById("btnSave").addEventListener("click", saveSwatch);
    update();
};

const update = () => {
    let red=document.getElementById("sldRed").value; //input always value
    let green=document.getElementById("sldGreen").value;
    let blue=document.getElementById("sldBlue").value;
    document.getElementById("lblRed").innerHTML=red;
    document.getElementById("lblGreen").innerHTML=green;// html-element innerHTML
    document.getElementById("lblBlue").innerHTML=blue;
    let swatch=document.getElementById("swatch");
    swatch.style.backgroundColor="rgb("+red+","+green+","+blue+")";
};

const saveSwatch = () => {
    let swatchColor = document.getElementById("swatch").style.backgroundColor;
    let swatchContainer = document.getElementById("savedSwatches");

    let swatchDiv = document.createElement("div");
    swatchDiv.classList.add("savedSwatch");
    swatchDiv.style.backgroundColor = swatchColor;
    swatchDiv.addEventListener("click", () => setColor(swatchColor));

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "X";
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        swatchContainer.removeChild(swatchDiv);
    });

    swatchDiv.appendChild(deleteBtn);
    swatchContainer.appendChild(swatchDiv);
};

const setColor = (color) => {
    let rgb = color.match(/\d+/g);
    if (rgb) {
        document.getElementById("sldRed").value = rgb[0];
        document.getElementById("sldGreen").value = rgb[1];
        document.getElementById("sldBlue").value = rgb[2];
        update();
    }
};

window.addEventListener("load", initialize);