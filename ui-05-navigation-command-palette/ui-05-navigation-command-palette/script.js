const openPalette = document.getElementById("openPalette");
const overlay = document.getElementById("paletteOverlay");
const searchInput = document.getElementById("commandSearch");
const commands = document.querySelectorAll(".command-item");
const quickCards = document.querySelectorAll(".quick-card");

function showPalette() {
    overlay.classList.add("show");
    searchInput.value = "";
    searchInput.focus();
}

function hidePalette() {
    overlay.classList.remove("show");
}

openPalette.addEventListener("click", showPalette);

document.addEventListener("keydown", function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        showPalette();
    }

    if (event.key === "Escape") {
        hidePalette();
    }
});

overlay.addEventListener("click", function (event) {
    if (event.target === overlay) {
        hidePalette();
    }
});

searchInput.addEventListener("input", function () {
    const searchText = searchInput.value.toLowerCase().trim();

    commands.forEach(function (command) {
        const text = command.innerText.toLowerCase();

        if (text.includes(searchText)) {
            command.style.display = "flex";
        } else {
            command.style.display = "none";
        }
    });
});

function selectCommand(commandName) {
    hidePalette();

    alert(commandName + " selected!");
}

commands.forEach(function (command) {
    command.addEventListener("click", function () {
        selectCommand(command.dataset.command);
    });
});

quickCards.forEach(function (card) {
    card.addEventListener("click", function () {
        showPalette();

        searchInput.value = card.dataset.command;

        searchInput.dispatchEvent(new Event("input"));
    });
});