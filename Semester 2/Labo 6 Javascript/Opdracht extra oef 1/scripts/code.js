const setup = () => {
    let paragraphs = document.querySelectorAll("p");

    paragraphs.forEach((paragraph) => {
        paragraph.textContent = "Good Job!";
    })
}
window.addEventListener("load", setup);