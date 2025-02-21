const toggleColor = () => {
    event.target.classList.toggle('blauw');
}
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('click', toggleColor);
});
