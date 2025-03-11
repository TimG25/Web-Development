const setup = () => {
    let btnToonResultaat=document.getElementById("btnToonResultaat");
    btnToonResultaat.addEventListener("click", toonResultaat);
}

const toonResultaat = () => {
    const isRoker = document.getElementById('isRoker').checked;
    const moedertaal = document.querySelector('input[name="moedertaal"]:checked').value;
    const favorieteBuurland = document.getElementById('favorieteBuurland').value;
    const bestelling = Array.from(document.getElementById('bestelling').selectedOptions).map(option => option.value);
    if(isRoker === true){
        console.log('Is roker');
    } else {
        console.log('Is geen roker');
    }
    console.log('Moedertaal is', moedertaal);
    console.log('Favoriete buurland is', favorieteBuurland);
    console.log('Bestelling bestaat uit', bestelling);
}
window.addEventListener("load", setup);
