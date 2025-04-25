

const storeSliderValues = () => {
    let red;
    let green;
    let blue;

    red = document.getElementById("sldRed").value;
    green = document.getElementById("sldGreen").value;
    blue = document.getElementById("sldBlue").value;

    localStorage.setItem("red", red);
    localStorage.setItem("green", green);
    localStorage.setItem("blue", blue);
};

const restoreSliderValues = () => {
    let red = localStorage.getItem("red");
    let green = localStorage.getItem("green");
    let blue = localStorage.getItem("blue");

    document.getElementById("sldRed").value = red;
    document.getElementById("sldGreen").value = green;
    document.getElementById("sldBlue").value = blue;
};

const storeSwatches = () => {
    // bouw een array met kleurinfo objecten
    const swatchDivs = document.querySelectorAll("#swatchComponents .swatch");
    const swatches = [];

    swatchDivs.forEach(swatch => {
        swatches.push({
            red: swatch.getAttribute("data-red"),
            green: swatch.getAttribute("data-green"),
            blue: swatch.getAttribute("data-blue")
        });
    });

    const swatchesJSON = JSON.stringify(swatches);
    localStorage.setItem("swatches", swatchesJSON);
};

const restoreSwatches = () => {
    const swatchesJSON = localStorage.getItem("swatches");
    if (!swatchesJSON) return;

    const swatches = JSON.parse(swatchesJSON);
    swatches.forEach(color => {
        addSwatchComponent(color.red, color.green, color.blue);
    });

};
