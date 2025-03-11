const setup = () => {
    let gemeenten = [];
    let gemeente;

    while (true) {
        gemeente = prompt('Voer een gemeente in (of type "stop" om te stoppen):');
        if (gemeente.toLowerCase() === 'stop') {
            break;
        }
        gemeenten.push(gemeente);
    }

    gemeenten.sort();

    document.write('<select>');
    gemeenten.forEach(gemeente => {
        document.write(`<option>${gemeente}</option>`);
    });
    document.write('</select>');
}
window.addEventListener("load", setup);