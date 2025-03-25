let global = {
    IMAGE_COUNT: 5, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0, // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};

const setup = () => {
    document.getElementById("btnStart").addEventListener("click", startGame);
}

const moveImage = (image) => {
    const playField = document.getElementById("playField");
    const maxX = playField.clientWidth - global.IMAGE_SIZE;
    const maxY = playField.clientHeight - global.IMAGE_SIZE;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    image.style.left = `${randomX}px`;
    image.style.top = `${randomY}px`;
};

// Toon een willekeurig object (figuur of bom)
const showRandomObject = () => {
    const targetImage = document.getElementById("target");
    const bombImage = document.getElementById("target");
    const randomChoice = Math.random() < 0.8 ? targetImage : bombImage;

    moveImage(randomChoice);
    targetImage.style.display = "none";
    bombImage.style.display = "none";
    randomChoice.style.display = "block";
};

// Verberg alle objecten
const hideObjects = () => {
    document.getElementById("targetImage").style.display = "none";
    document.getElementById("bom").style.display = "none";
};

// Klik op een object
const handleClick = (event) => {
    if (event.target.id === "target") {
        global.score++;
        document.getElementById("score").innerText = global.score;
    } else if (event.target.id === "target") {
        alert("Game Over");
        clearInterval(global.timeoutId);
        return;
    }
    hideObjects();
};

document.getElementById("target").addEventListener("click", handleClick);
document.getElementById("target").addEventListener("click", handleClick);

// Start het spel
const startGame = () => {
    global.score = 0;
    document.getElementById("score").innerText = global.score;
    global.timeoutId = setInterval(() => {
        showRandomObject();
        setTimeout(hideObjects, 1000);
    }, 1000);
};

window.addEventListener("load", setup);


