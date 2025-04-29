const setup = () => {
    const input = document.getElementById("searchInput");
    const button = document.getElementById("searchBtn");
    const historyContainer = document.getElementById("historyContainer");

    let history = JSON.parse(localStorage.getItem("history")) || [];

    const commandMap = {
        "/g": { title: "Google", url: "https://www.google.com/search?q=", class: "google" },
        "/y": { title: "Youtube", url: "https://www.youtube.com/results?search_query=", class: "youtube" },
        "/x": { title: "Twitter", url: "https://x.com/hashtag/", class: "twitter" },
        "/i": { title: "Instagram", url: "https://www.instagram.com/explore/tags/", class: "instagram" }
    };

    const createCard = ({ title, text, url }, colorClass) => {
        const col = document.createElement("div");
        col.className = "col-md-4 mb-3";
        col.innerHTML = `
        <div class="card ${colorClass}">
          <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${text}</p>
            <a href="${url}" class="btn btn-sm ${getBtnClass(title)}" target="_blank">Go!</a>
          </div>
        </div>`;
        historyContainer.prepend(col);
    };

    const addToHistory = (entry) => {
        history.push(entry);
        localStorage.setItem("history", JSON.stringify(history));
        createCard(entry, commandMap[getPrefix(entry.title.toLowerCase())]?.class || "");
    };

    const getPrefix = (title) => {
        return Object.keys(commandMap).find(key => commandMap[key].title.toLowerCase() === title);
    };

    const initHistory = () => {
        history.forEach(entry => {
            const prefix = getPrefix(entry.title.toLowerCase());
            createCard(entry, commandMap[prefix]?.class || "");
        });
    };

    button.addEventListener("click", () => {
        const value = input.value.trim();
        if (!value.startsWith("/")) {
            alert("Commando moet starten met / gevolgd door een letter.");
            return;
        }

        const parts = value.split(" ");
        const cmd = parts[0];
        const query = parts.slice(1).join(" ");

        if (!commandMap[cmd]) {
            alert("Onbekend commando.");
            return;
        }

        if (!query) {
            alert("Geef een zoekopdracht op.");
            return;
        }

        let searchUrl = commandMap[cmd].url;
        let fullUrl;

        if (cmd === "/x") {
            fullUrl = `${searchUrl}${encodeURIComponent(query)}`;
        } else if (cmd === "/i") {
            fullUrl = `${searchUrl}${encodeURIComponent(query)}/`;
        } else {
            fullUrl = `${searchUrl}${encodeURIComponent(query.replace(/\s+/g, "+"))}`;
        }

        const newEntry = {
            title: commandMap[cmd].title,
            text: query,
            url: fullUrl
        };

        window.open(fullUrl, "_blank");
        addToHistory(newEntry);
        input.value = "";
    });

    const getBtnClass = (title) => {
        switch (title) {
            case "Google": return "btn-google";
            case "Youtube": return "btn-youtube";
            case "Twitter": return "btn-twitter";
            case "Instagram": return "btn-instagram";
            default: return "btn-secondary";
        }
    };
    input.focus();
    initHistory();
};

window.addEventListener("load", setup)