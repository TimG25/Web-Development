let global = [
    {
        question: "Wie is de hoofdpersoon in Final Fantasy VII Remake?",
        answers: ["Cloud Strife", "Sephiroth", "Tifa Lockhart"],
        correct: "Cloud Strife",
        selected: "",
        answered: false
    },
    {
        question: "Welke wereld wordt verkend in Final Fantasy XV?",
        answers: ["Gaia", "Eos", "Spira", "Cocoon"],
        correct: "Eos",
        selected: "",
        answered: false
    },
    {
        question: "Wie is de antagonist in Final Fantasy VIII?",
        answers: ["Ultimecia", "Kefka", "Seymour", "Kuja", "Edea"],
        correct: "Ultimecia",
        selected: "",
        answered: false
    },
    {
        question: "Heeft hoofdrolspeler in Final Fantasy IX een staart?",
        answers: ["Ja", "Nee"],
        correct: "Ja",
        selected: "",
        answered: false
    },
    {
        question: "Hoe heet de stad waarin het verhaal van Final Fantasy VII Remake begint?",
        answers: ["Midgar", "Junon", "Nibelheim", "Wutai"],
        correct: "Midgar",
        selected: "",
        answered: false
    },
    {
        question: "Welke summon is prominent aanwezig in Final Fantasy XV?",
        answers: ["Ifrit", "Shiva", "Ramuh", "Titan"],
        correct: "Ifrit",
        selected: "",
        answered: false
    },
    {
        question: "Wat is de naam van het luchtschip in Final Fantasy VIII?",
        answers: ["Ragnarok", "Highwind", "Invincible", "Falcon"],
        correct: "Ragnarok",
        selected: "",
        answered: false
    },
    {
        question: "Welke rol vervult Cid Highwind in Final Fantasy VII?",
        answers: ["Luchtschipkapitein", "Wapensmid", "Koning"],
        correct: "Luchtschipkapitein",
        selected: "",
        answered: false
    },
    {
        question: "Wat is het kenmerkende aan Cactuar-wezens in de Final Fantasy-serie?",
        answers: ["Ze zijn altijd groen", "Ze gebruiken de aanval 1000 Needles", "Ze zijn planten"],
        correct: "Ze gebruiken de aanval 1000 Needles",
        selected: "",
        answered: false
    },
    {
        question: "Welk Final Fantasy-wezen zorgt, met zijn aanval genaamd Bad Breath, voor verschillende statuseffecten?",
        answers: ["Malboro", "Chocobo", "Behemoth", "Tonberry"],
        correct: "Malboro",
        selected: "",
        answered: false
    }
];
let currentIndex = 0;

const setup = () => {
    voegCSSToe();
    document.getElementById("start").addEventListener("click", startQuiz);
    let saveButton = document.querySelector(".btn.btn-success");
    saveButton.addEventListener("click", opslaanAntwoord);
    document.getElementById("submit").addEventListener("click", indienenQuiz);
};

const startQuiz = () => {
    document.getElementById("start").classList.add("d-none");
    document.getElementById("quiz").classList.remove("d-none");
    renderVraag();
    renderZijbalk();
};

const renderVraag = () => {
    const vraag = global[currentIndex];
    const antwoordenLijst = document.getElementById("answers");
    const header = document.querySelector(".card-header");
    const title = document.querySelector(".card-title");

    header.textContent = `Vraag ${currentIndex + 1}`;
    title.textContent = vraag.question;
    antwoordenLijst.innerHTML = "";

    vraag.answers.forEach((antwoord) => {
        const li = document.createElement("li");
        li.classList.add("list-group-item", "p-0");

        const btn = document.createElement("button");
        btn.classList.add("answer-button");
        btn.textContent = antwoord;

        if (vraag.selected === antwoord) {
            btn.classList.add("selected");
        }

        btn.addEventListener("click", () => {
            if (vraag.answered) return;
            document.querySelectorAll(".answer-button").forEach(b => b.classList.remove("selected"));
            btn.classList.add("selected");
            vraag.selected = antwoord;
        });

        li.appendChild(btn);
        antwoordenLijst.appendChild(li);
    });
};

const renderZijbalk = () => {
    const vragenLijst = document.getElementById("questions");
    vragenLijst.innerHTML = "";

    global.forEach((vraag, i) => {
        const li = document.createElement("li");
        li.classList.add("list-group-item", "question-nav");
        li.textContent = `Vraag ${i + 1}`;

        if (vraag.answered) {
            li.classList.add(vraag.selected === vraag.correct ? "correct" : "incorrect");
        } else {
            li.addEventListener("click", () => {
                currentIndex = i;
                renderVraag();
                renderZijbalk();
            });
        }

        if (i === currentIndex) {
            li.classList.add("active-question");
        }

        vragenLijst.appendChild(li);
    });
};

const opslaanAntwoord = () => {
    const vraag = global[currentIndex];

    if (!vraag.selected) {
        alert("Selecteer eerst een antwoord.");
        return;
    }

    vraag.answered = true;
    renderZijbalk();
    renderVraag();

    const volgende = global.findIndex((v, i) => !v.answered && i > currentIndex);
    if (volgende !== -1) {
        currentIndex = volgende;
        renderVraag();
        renderZijbalk();
    }
};

const indienenQuiz = () => {
    const totaal = global.length;
    const correct = global.filter(v => v.selected === v.correct).length;
    const score = Math.round((correct / totaal) * 100);

    slaScoreOp(score);

    const indienen = () => {
        let aantalJuist = 0;
        global.forEach(vraag => {
            if (vraag.selected === vraag.correct) {
                aantalJuist++;
            }
        });

        // Score tonen en opslaan
        toonScores(aantalJuist, global.length);

        // Eventueel knop disablen
        const indienenKnop = document.querySelector(".btn.btn-primary");
        indienenKnop.disabled = true;
    };

};

const slaScoreOp = (score) => {
    let scores = JSON.parse(localStorage.getItem("quizScores")) || [];
    scores.push(score);
    scores.sort((a, b) => b - a);
    localStorage.setItem("quizScores", JSON.stringify(scores));
};

const toonScores = (score, totaal) => {
    if (score == null || totaal == null) return; // alleen tonen na indienen

    const footer = document.querySelector("footer");
    const scores = JSON.parse(localStorage.getItem("quizScores")) || [];

    // Huidige score toevoegen
    scores.push({ goed: score, totaal: totaal });

    // Sorteren op hoogste score eerst
    scores.sort((a, b) => b.goed - a.goed);

    // Opnieuw opslaan
    localStorage.setItem("quizScores", JSON.stringify(scores));

    // Scores toevoegen aan de footer zonder bestaande inhoud te verwijderen
    scores.forEach((s, index) => {
        const bestaand = document.querySelector(`#score-${index}`);
        if (!bestaand) {
            const p = document.createElement("p");
            p.id = `score-${index}`;
            p.textContent = `${s.goed}/${s.totaal}`;
            footer.appendChild(p);
        }
    });
};

const resetButton = document.querySelector(".btn.btn-danger");
if (resetButton) {
    resetButton.addEventListener("click", resetScores);
}

const resetScores = () => {
    localStorage.removeItem("quizScores");

    const footer = document.querySelector("footer");
    let index = 0;
    while (true) {
        const scoreItem = document.querySelector(`#score-${index}`);
        if (!scoreItem) break;
        footer.removeChild(scoreItem);
        index++;
    }
};


const voegCSSToe = () => {
    const style = document.createElement("style");
    style.textContent = `
        .answer-button {
            width: 100%;
            text-align: left;
            padding: 1em;
            border: 1px solid #ccc;
            background-color: white;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        .answer-button:hover {
            background-color: #f0f0f0;
        }
        .answer-button.selected {
            background-color: #0d6efd;
            color: white;
            border-color: #0a58ca;
        }
        .question-nav {
            cursor: pointer;
        }
        .question-nav.correct {
            background-color: #198754 !important;
            color: white;
            cursor: default;
        }
        .question-nav.incorrect {
            background-color: #dc3545 !important;
            color: white;
            cursor: default;
        }
        .question-nav.active-question {
            font-weight: bold;
            border-left: 4px solid #0d6efd;
        }
    `;
    document.head.appendChild(style);
};

window.addEventListener("load", setup);