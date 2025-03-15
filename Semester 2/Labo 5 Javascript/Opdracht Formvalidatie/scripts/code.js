const setup = () => {
    let btnValideer=document.getElementById("btnValideer");
    btnValideer.addEventListener("click", valideer);
}

const valideer = () => {
    let isValid = true;

    let voornaam = document.getElementById('voornaam').value.trim();
    let voornaamError = document.getElementById('voornaamError');
    if (voornaam.length > 30) {
        isValid = false;
        document.getElementById('voornaam').classList.add('error');
        voornaamError.textContent = 'max. 30 karakters';
    } else {
        document.getElementById('voornaam').classList.remove('error');
        voornaamError.textContent = '';
    }

    let familienaam = document.getElementById('familienaam').value.trim();
    let familienaamError = document.getElementById('familienaamError');
    if (familienaam === '') {
        isValid = false;
        document.getElementById('familienaam').classList.add('error');
        familienaamError.textContent = 'verplicht veld';
    } else if (familienaam.length > 50) {
        isValid = false;
        document.getElementById('familienaam').classList.add('error');
        familienaamError.textContent = 'max 50 karakters';
    } else {
        document.getElementById('familienaam').classList.remove('error');
        familienaamError.textContent = '';
    }

    let geboortedatum = document.getElementById('geboortedatum').value.trim();
    let geboortedatumError = document.getElementById('geboortedatumError');
    let geboortedatumRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (geboortedatum === '') {
        isValid = false;
        document.getElementById('geboortedatum').classList.add('error');
        geboortedatumError.textContent = 'verplicht veld';
    } else if (!geboortedatumRegex.test(geboortedatum)) {
        isValid = false;
        document.getElementById('geboortedatum').classList.add('error');
        geboortedatumError.textContent = 'formaat is niet jjjj-mm-dd';
    } else {
        document.getElementById('geboortedatum').classList.remove('error');
        geboortedatumError.textContent = '';
    }

    let email = document.getElementById('email').value.trim();
    let emailError = document.getElementById('emailError');
    let emailRegex = /^[^@]+@[^@]+$/;
    if (email === '') {
        isValid = false;
        document.getElementById('email').classList.add('error');
        emailError.textContent = 'verplicht veld';
    } else if (!emailRegex.test(email)) {
        isValid = false;
        document.getElementById('email').classList.add('error');
        emailError.textContent = 'geen geldig email adres';
    } else {
        document.getElementById('email').classList.remove('error');
        emailError.textContent = '';
    }
    
    let aantalKinderen = document.getElementById('aantalKinderen').value.trim();
    let aantalKinderenError = document.getElementById('aantalKinderenError');
    if (aantalKinderen === '' || isNaN(aantalKinderen) || aantalKinderen < 0) {
        isValid = false;
        document.getElementById('aantalKinderen').classList.add('error');
        aantalKinderenError.textContent = 'is geen positief getal';
    } else if (aantalKinderen >= 99) {
        isValid = false;
        document.getElementById('aantalKinderen').classList.add('error');
        aantalKinderenError.textContent = 'is te vruchtbaar';
    } else {
        document.getElementById('aantalKinderen').classList.remove('error');
        aantalKinderenError.textContent = '';
    }

    if (isValid) {
        alert('Proficiat!');
    }
}

window.addEventListener("load", setup);