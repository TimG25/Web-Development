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

const playField = document.getElementById("playField");
const targetImage = document.getElementById("targetImage");
const startButton = document.getElementById("btnStart");
const scoreDisplay = document.createElement("div");
scoreDisplay.id = "scoreDisplay";
scoreDisplay.innerText = "Score: 0";
playField.appendChild(scoreDisplay);

const moveImage = () => {
    const maxX = playField.clientWidth - global.IMAGE_SIZE;
    const maxY = playField.clientHeight - global.IMAGE_SIZE;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    targetImage.style.left = `${randomX}px`;
    targetImage.style.top = `${randomY}px`;
};

const changeImage = () => {
    const randomIndex = Math.floor(Math.random() * (global.IMAGE_COUNT + 1));
    targetImage.src = `${global.IMAGE_PATH_PREFIX}${randomIndex}${global.IMAGE_PATH_SUFFIX}`;
    targetImage.dataset.type = randomIndex === global.IMAGE_COUNT ? "bomb" : "normal";
};

const handleClick = () => {
    if (targetImage.dataset.type === "bomb") {
        alert("Game Over!");
        clearInterval(global.timeoutId);
        targetImage.style.display = "none";
    } else {
        global.score++;
        scoreDisplay.innerText = `Score: ${global.score}`;
        moveImage();
        changeImage();
    }
};

targetImage.addEventListener("click", handleClick);

const startGame = () => {
    global.score = 0;
    scoreDisplay.innerText = "Score: 0";
    targetImage.style.display = "block";
    moveImage();
    changeImage();
    global.timeoutId = setInterval(() => {
        moveImage();
        changeImage();
    }, global.MOVE_DELAY);
};

startButton.addEventListener("click", startGame);
window.addEventListener("load", setup);