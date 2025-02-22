const setup = () => {
    let btnHerbereken = document.getElementById("btnHerbereken");

    btnHerbereken.addEventListener("click", prijsBerekening);
}

const prijsBerekening = () => {
    let prijzen = document.getElementsByClassName("prijs");
    let aantallen = document.getElementsByClassName("aantal");
    let btw = document.getElementsByClassName("btw");
    let subtotaalElementen = document.getElementsByClassName("subtotaal")
    let totaal = document.getElementById("totaal")

    let totaalWaarde = 0;

    for(let i = 0; i < prijzen.length; i++) {
        let prijs = parseFloat(prijzen[i].innerHTML);
        let btwPercentage = parseFloat(btw[i].innerHTML) / 100;
        let aantal = parseFloat(aantallen[i].value);

        let subtotaal = prijs * aantal * (1 + btwPercentage);

        subtotaalElementen[i].innerHTML=subtotaal.toFixed(2) + ' Eur';

        totaalWaarde += subtotaal;
    }

    totaal.innerHTML=totaalWaarde.toFixed(2) + ' Eur';
}

window.addEventListener("load", setup);
