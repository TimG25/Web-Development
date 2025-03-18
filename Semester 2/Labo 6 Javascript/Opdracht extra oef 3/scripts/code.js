const setup = () => {
    let newParagraph = document.createElement("p");
    newParagraph.textContent = "This is a new paragraph";

    let myDIV = document.getElementById("myDIV");
    myDIV.appendChild(newParagraph);
}
window.addEventListener("load", setup);