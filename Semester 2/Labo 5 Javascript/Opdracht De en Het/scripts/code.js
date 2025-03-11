const setup = () => {
    let text = "Gisteren zat de jongen op de stoep en at de helft van de appel"
    let words = text.split(' ');
    let result = [];

    words.forEach(word => {
        if (word === 'de') {
            result.push('het');
        } else {
            result.push(word);
        }
        console.log(result.join(' '));
    });
}

window.addEventListener("load", setup);

