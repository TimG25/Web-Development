let global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6
};

const kaarten = [];
let firstCard = null;
let secondCard = null;
let isBusy = false;

for (let i = 1; i <= global.AANTAL_KAARTEN; i++) {
    kaarten.push(`kaart${i}.png`);
    kaarten.push(`kaart${i}.png`);
}
kaarten.sort(() => 0.5 - Math.random());

const setup = () => {
    const gameBoard = document.getElementById("gameBoard");
    gameBoard.innerHTML = "";

    kaarten.forEach((image, index) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.image = image;
        card.dataset.index = index;
        card.style.backgroundImage = "url('Images/achterkant.png')";
        card.addEventListener("click", flipCard);
        gameBoard.appendChild(card);
    });
};

const flipCard = (event) => {
    if (isBusy) return;
    const card = event.currentTarget;

    if (card.classList.contains("flipped") || card.classList.contains("matched")) return;

    card.style.backgroundImage = `url(Images/${card.dataset.image})`;
    card.classList.add("flipped");

    if (!firstCard) {
        firstCard = card;
    } else {
        secondCard = card;
        isBusy = true;
        setTimeout(checkMatch, 1000);
    }
};

const checkMatch = () => {
    if (firstCard.dataset.image === secondCard.dataset.image) {
        firstCard.classList.add("matched");
        secondCard.classList.add("matched");
    } else {
        firstCard.style.backgroundImage = "url('Images/achterkant.png')";
        secondCard.style.backgroundImage = "url('Images/achterkant.png')";
        firstCard.classList.remove("flipped");
        secondCard.classList.remove("flipped");
    }

    resetSelection();
    checkWin();
};

const resetSelection = () => {
    firstCard = null;
    secondCard = null;
    isBusy = false;
}

const checkWin = () => {
    if (document.querySelectorAll(".matched").length === kaarten.length) {
        setTimeout(() => alert("Gefeliciteerd! Je hebt gewonnen!"), 500);
    }
};

window.addEventListener("load", setup);