const JSON1 = () => {
    const student1 = {
        naam: "Jan",
        leeftijd: 21,
        vakken: ["Wiskunde", "Informatica", "Fysica"],
        adres: {
            straat: "Hoofdstraat",
            nummer: 123,
            stad: "Kortrijk"
        }
    };

    const student1Json = JSON.stringify(student1, null, 4);
    console.log(student1Json);
}

const JSON2 = () => {
    const student1Json = `
{
    "naam": "Jan",
    "leeftijd": 21,
    "vakken": ["Wiskunde", "Informatica", "Fysica"],
    "adres": {
        "straat": "Hoofdstraat",
        "nummer": 123,
        "stad": "Kortrijk"
    }
}
`;
    const student1Copy = JSON.parse(student1Json);
    console.log(student1Copy.naam);
}


window.addEventListener("load", JSON1);
window.addEventListener("load", JSON2);