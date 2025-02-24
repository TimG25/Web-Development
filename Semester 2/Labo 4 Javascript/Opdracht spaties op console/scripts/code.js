const setup = () => {
    let btnSplitsen = document.getElementById("btn");

    btnSplitsen.addEventListener("click", Splitsen);
}

const Splitsen = () => {
    let inputText = document.getElementById("inputVeld").value;

    let spacedText = "";

    for (let i = 0; i < inputText.length; i++) {

        if (inputText[i] !== " ") {
            spacedText += inputText[i] + " ";
        } else {

            spacedText += "";
        }
    }

    console.log(spacedText.trim());
}
window.addEventListener("load", setup);