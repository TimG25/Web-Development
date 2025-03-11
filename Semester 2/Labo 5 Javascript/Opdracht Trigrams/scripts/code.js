const setup = () => {
    let word = "onoorbaar";
    let trigrams = [];
    for (let i = 0; i < word.length - 2; i++) {
        trigrams.push(word.substring(i, i + 3));
    }
    console.log(trigrams);
}

window.addEventListener("load", setup);