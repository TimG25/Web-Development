const setup = () => {
    let listItems = document.querySelectorAll('li');
    listItems.forEach(item => {
        item.className = 'list-item';
    })

    let style = document.createElement('style');
    style.textContent = `.list-item {
        color: red;}`;
    document.head.appendChild(style);

    let img = document.createElement('img');
    img.src = 'Portret klein.jpg';
    document.body.appendChild(img);

}
window.addEventListener("load", setup);