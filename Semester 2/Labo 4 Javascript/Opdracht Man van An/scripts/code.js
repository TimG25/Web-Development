const setup = () => {
    const tekst1 = "De man van An geeft geen hand aan ambetante verwanten";
    const zoekTerm1 = "an";

    let count1 = 0;
    let index1 = tekst1.indexOf(zoekTerm1);

    while (index1 !== -1) {
        count1++;
        index1 = tekst1.indexOf(zoekTerm1, index1 + 1);
    }

    console.log("Aantal keren 'an' gevonden met indexOf:", count1);

    const tekst2 = "De man van An geeft geen hand aan ambetante verwanten";
    const zoekTerm2 = "an";

    let count2 = 0;
    let index2 = tekst2.lastIndexOf(zoekTerm2);

    while (index2 !== -1) {
        count2++;
        index2 = tekst2.lastIndexOf(zoekTerm2, index2 - 1);  // Zoek vanaf de vorige positie
    }

    console.log("Aantal keren 'an' gevonden met lastIndexOf:", count2);
}
window.addEventListener("load", setup);