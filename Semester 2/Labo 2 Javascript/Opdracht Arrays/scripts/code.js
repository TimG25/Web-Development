const setup = () => {
    const familienamen = ['Bart', 'Ilse', 'Peter', 'Wim', 'Luca'];
    console.log(familienamen.length);
    console.log(familienamen[0]);
    console.log(familienamen[2]);
    console.log(familienamen[4]);
    function VoegNaamToe(arr) {
        let nieuweNaam = prompt("Voer een extra naam in:");
        arr.push(nieuweNaam);
    }

    VoegNaamToe(familienamen);
    console.log(familienamen);

    let familieledenString = familienamen.join(", ");
    console.log(familieledenString);
}
window.addEventListener("load", setup);