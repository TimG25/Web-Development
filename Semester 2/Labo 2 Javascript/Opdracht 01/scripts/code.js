const setup = () => {
    console.log(confirm("Weet u het zeker?"));
    console.log(prompt("Wat is uw naam", "onbekend"));
}
window.addEventListener("load", setup);