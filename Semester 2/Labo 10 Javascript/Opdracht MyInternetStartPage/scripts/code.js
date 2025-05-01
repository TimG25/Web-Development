const commandMap = {
    "/g": { title: "Google", url: "https://www.google.com/search?q=", class: "google" },
    "/y": { title: "Youtube", url: "https://www.youtube.com/results?search_query=", class: "youtube" },
    "/x": { title: "Twitter", url: "https://x.com/hashtag/", class: "twitter" },
    "/i": { title: "Instagram", url: "https://www.instagram.com/explore/tags/", class: "instagram" },
    "/v": { title: "VRT NWS", url: "https://www.vrt.be/vrtnws/nl/zoek/?query=", class: "vrt-nws"},
    "/h": { title: "HLN", url: "https://www.hln.be/zoeken?query=", class: "hln" }
};

const platformOrder = ["Youtube", "Instagram", "Google", "Twitter", "VRT NWS", "HLN"];
let history = [];


const getBtnClass = (title) => {
    switch (title) {
        case "Google": return "btn btn-sm btn-google";
        case "Youtube": return "btn btn-sm btn-youtube";
        case "Twitter": return "btn btn-sm btn-twitter";
        case "Instagram": return "btn btn-sm btn-instagram";
        case "VRT NWS": return "btn btn-sm btn-vrt-nws";
        case "HLN": return "btn btn-sm btn-hln";
        default: return "btn btn-sm btn-secondary";
    }
};


const getPrefix = (title) => {
    return Object.keys(commandMap).find(key => commandMap[key].title.toLowerCase() === title.toLowerCase());
};


const deleteUitHistory = (entryToDelete) => {
    history = history.filter(entry =>
        !(entry.title === entryToDelete.title &&
            entry.text === entryToDelete.text &&
            entry.url === entryToDelete.url)
    );

    localStorage.setItem("history", JSON.stringify(history));
    sortHistory();
};


const createCard = ({ title, text, url }, colorClass) => {
    const historyContainer = document.getElementById("historyContainer");

    const col = document.createElement("div");
    col.className = "col-md-4 mb-3";

    col.innerHTML = `
      <div class="card ${colorClass}">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${text}</p>
          <a href="${url}" class="${getBtnClass(title)} me-2" target="_blank">Go!</a>
          <button class="btn btn-sm btn-outline-danger rounded-pill btn-delete">Verwijder</button>
        </div>
      </div>`;


    col.querySelector(".btn-delete").addEventListener("click", () => {
        deleteUitHistory({ title, text, url });
    });

    historyContainer.appendChild(col);
};


const addToHistory = (entry) => {
    history.push(entry);
    localStorage.setItem("history", JSON.stringify(history));
    sortHistory();
};


const sortHistory = () => {
    const historyContainer = document.getElementById("historyContainer");
    historyContainer.innerHTML = "";

    const sorted = [...history].sort((a, b) => {
        const aIndex = platformOrder.indexOf(a.title);
        const bIndex = platformOrder.indexOf(b.title);

        if (aIndex !== bIndex) return aIndex - bIndex;

        return a.text.toLowerCase().localeCompare(b.text.toLowerCase());
    });

    sorted.forEach(entry => {
        const prefix = getPrefix(entry.title);
        createCard(entry, commandMap[prefix]?.class || "");
    });
};


const handleSearch = () => {
    const input = document.getElementById("searchInput");
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
};


const setup = () => {
    const input = document.getElementById("searchInput");
    const button = document.getElementById("searchBtn");

    history = JSON.parse(localStorage.getItem("history")) || [];
    sortHistory();

    button.addEventListener("click", handleSearch);

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    });

    input.focus();
};

window.addEventListener("load", setup);