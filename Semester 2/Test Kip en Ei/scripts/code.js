const MetEi = () => {
    let keuze = document.getElementById('keuzelijst').value
    let img = document.getElementById('img')
    if (keuze === 'met ei') {
        img.className = 'with-egg'
    }
    else if (keuze === 'zonder ei') {
        img.className = ''
    }
    else if (keuze === 'kies') {
        img.className = 'hidden'
    }
}


window.addEventListener("load", MetEi);
window.addEventListener("input", MetEi)
