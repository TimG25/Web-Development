let personen = [];

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();

    // indien ok, bewaar de ingegeven data.
    let voornaam = document.getElementById("txtVoornaam").value.trim();
    let familienaam = document.getElementById("txtFamilienaam").value.trim();
    let geboortedatum = document.getElementById("txtGeboorteDatum").value.trim();
    let email = document.getElementById("txtEmail").value.trim();
    let aantalKinderen = document.getElementById("txtAantalKinderen").value.trim();

    let lstPersonen = document.getElementById("lstPersonen");
    let geselecteerdeIndex = lstPersonen.selectedIndex;

    let persoon = { voornaam, familienaam, geboortedatum, email, aantalKinderen };

    if (geselecteerdeIndex >= 0) {
        // Bestaande persoon bijwerken
        personen[geselecteerdeIndex] = persoon;
        lstPersonen.options[geselecteerdeIndex] = `${voornaam} ${familienaam}`;
    } else {
        // Nieuwe persoon toevoegen
        personen.push(persoon);
        let nieuweOptie = new Option(`${voornaam} ${familienaam}`, personen.length - 1);
        lstPersonen.add(nieuweOptie);
    }
};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
    document.getElementById("txtVoornaam").value = "";
    document.getElementById("txtFamilienaam").value = "";
    document.getElementById("txtGeboorteDatum").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtAantalKinderen").value = "";
};

const toonGeselecteerdePersoon = () => {
    let lstPersonen = document.getElementById("lstPersonen");
    let geselecteerdeIndex = lstPersonen.selectedIndex;
    if (geselecteerdeIndex >= 0) {
        let persoon = personen[geselecteerdeIndex];
        // Vul de formuliervelden met de gegevens van de geselecteerde persoon
        document.getElementById("txtVoornaam").value = persoon.voornaam;
        document.getElementById("txtFamilienaam").value = persoon.familienaam;
        document.getElementById("txtGeboorteDatum").value = persoon.geboortedatum;
        document.getElementById("txtEmail").value = persoon.email;
        document.getElementById("txtAantalKinderen").value = persoon.aantalKinderen;
    }
};

// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change", toonGeselecteerdePersoon)
};

window.addEventListener("load", setup);