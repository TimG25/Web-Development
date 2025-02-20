const redSlider = document.getElementById('red');
const greenSlider = document.getElementById('green');
const blueSlider = document.getElementById('blue');
const colorPreview = document.getElementById('colorPreview');
const redValue = document.getElementById('redValue');
const greenValue = document.getElementById('greenValue');
const blueValue = document.getElementById('blueValue');

const updateColor = () => {
    const red = redSlider.value;
    const green = greenSlider.value;
    const blue = blueSlider.value;
    const color = `rgb(${red}, ${green}, ${blue})`;
    colorPreview.style.backgroundColor = color;
    redValue.textContent = red;
    greenValue.textContent = green;
    blueValue.textContent = blue;
}

redSlider.addEventListener('input', updateColor);
greenSlider.addEventListener('input', updateColor);
blueSlider.addEventListener('input', updateColor);

window.addEventListener("load", updateColor);