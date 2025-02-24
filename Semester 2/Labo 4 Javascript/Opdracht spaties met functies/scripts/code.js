const setup = () => {
    let btnSplitsen = document.getElementById("btn");

    btnSplitsen.addEventListener("click", Splitsen);
}

const maakMetSpaties = (inputText) => {
    let result = "";

    for (let i = 0; i < inputText.length; i++) {
        if (inputText[i] !== " ") {
            result += inputText[i] + " ";
        } else {
            result += "";
        }
    }

    return result.trim();
}


const Splitsen = () => {
    let inputText = document.getElementById("inputVeld").value;

    let spacedText = maakMetSpaties(inputText);

    console.log(spacedText);
}
window.addEventListener("load", setup);