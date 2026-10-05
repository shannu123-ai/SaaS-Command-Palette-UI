/* =========================================================
   SAAS COMMAND PALETTE
   Interactive JavaScript
   ========================================================= */

const paletteOverlay = document.getElementById("paletteOverlay");
const commandPalette = document.getElementById("commandPalette");
const openPalette = document.getElementById("openPalette");
const commandSearch = document.getElementById("commandSearch");
const commandItems = document.querySelectorAll(".command-item");


/* =========================================================
   OPEN COMMAND PALETTE
   ========================================================= */

function openCommandPalette() {
    paletteOverlay.classList.add("active");

    setTimeout(() => {
        commandSearch.focus();
    }, 50);
}


/* =========================================================
   CLOSE COMMAND PALETTE
   ========================================================= */

function closeCommandPalette() {
    paletteOverlay.classList.remove("active");

    commandSearch.value = "";

    commandItems.forEach(item => {
        item.style.display = "flex";
    });
}


/* =========================================================
   OPEN BUTTON
   ========================================================= */

openPalette.addEventListener("click", () => {
    openCommandPalette();
});


/* =========================================================
   CTRL + K / CMD + K
   ========================================================= */

document.addEventListener("keydown", (event) => {

    if (
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === "k"
    ) {

        event.preventDefault();

        if (paletteOverlay.classList.contains("active")) {
            closeCommandPalette();
        } else {
            openCommandPalette();
        }
    }


    /* Escape */

    if (event.key === "Escape") {
        closeCommandPalette();
    }

});


/* =========================================================
   CLICK OUTSIDE TO CLOSE
   ========================================================= */

paletteOverlay.addEventListener("click", (event) => {

    if (event.target === paletteOverlay) {
        closeCommandPalette();
    }

});


/* =========================================================
   SEARCH / FILTER COMMANDS
   ========================================================= */

commandSearch.addEventListener("input", () => {

    const searchText =
        commandSearch.value
            .toLowerCase()
            .trim();


    commandItems.forEach(item => {

        const commandText =
            item.textContent.toLowerCase();

        if (commandText.includes(searchText)) {

            item.style.display = "flex";

        } else {

            item.style.display = "none";

        }

    });

});


/* =========================================================
   COMMAND SELECTION
   ========================================================= */

commandItems.forEach(item => {

    item.addEventListener("click", () => {

        const commandName =
            item.querySelector("strong").textContent;

        showNotification(
            `${commandName} selected`
        );

        closeCommandPalette();

    });

});


/* =========================================================
   KEYBOARD NAVIGATION
   ========================================================= */

let selectedIndex = -1;


function getVisibleCommands() {

    return Array.from(commandItems)
        .filter(item => item.style.display !== "none");

}


document.addEventListener("keydown", (event) => {

    if (!paletteOverlay.classList.contains("active")) {
        return;
    }


    const visibleCommands =
        getVisibleCommands();


    if (visibleCommands.length === 0) {
        return;
    }


    /* Arrow Down */

    if (event.key === "ArrowDown") {

        event.preventDefault();

        selectedIndex++;

        if (
            selectedIndex >=
            visibleCommands.length
        ) {
            selectedIndex = 0;
        }

        updateSelection(visibleCommands);
    }


    /* Arrow Up */

    if (event.key === "ArrowUp") {

        event.preventDefault();

        selectedIndex--;

        if (selectedIndex < 0) {
            selectedIndex =
                visibleCommands.length - 1;
        }

        updateSelection(visibleCommands);
    }


    /* Enter */

    if (event.key === "Enter") {

        event.preventDefault();

        if (
            selectedIndex >= 0 &&
            visibleCommands[selectedIndex]
        ) {

            visibleCommands[selectedIndex].click();

        }

    }

});


/* =========================================================
   UPDATE KEYBOARD SELECTION
   ========================================================= */

function updateSelection(commands) {

    commandItems.forEach(item => {
        item.classList.remove("selected");
    });


    const selected =
        commands[selectedIndex];


    if (selected) {

        selected.classList.add("selected");

        selected.scrollIntoView({
            block: "nearest"
        });

    }

}


/* =========================================================
   RESET KEYBOARD SELECTION WHEN SEARCH CHANGES
   ========================================================= */

commandSearch.addEventListener("input", () => {

    selectedIndex = -1;

    commandItems.forEach(item => {
        item.classList.remove("selected");
    });

});


/* =========================================================
   NOTIFICATION
   ========================================================= */

function showNotification(message) {

    const notification =
        document.createElement("div");

    notification.textContent = message;


    notification.style.position = "fixed";
    notification.style.bottom = "25px";
    notification.style.right = "25px";

    notification.style.padding =
        "12px 18px";

    notification.style.borderRadius =
        "12px";

    notification.style.background =
        "linear-gradient(135deg, #8b5cf6, #4f8cff)";

    notification.style.color = "white";

    notification.style.fontSize =
        "12px";

    notification.style.fontWeight =
        "600";

    notification.style.boxShadow =
        "0 12px 35px rgba(0,0,0,0.4)";

    notification.style.zIndex = "1000";

    notification.style.opacity = "0";

    notification.style.transform =
        "translateY(10px)";

    notification.style.transition =
        "all 0.25s ease";


    document.body.appendChild(notification);


    requestAnimationFrame(() => {

        notification.style.opacity = "1";

        notification.style.transform =
            "translateY(0)";

    });


    setTimeout(() => {

        notification.style.opacity = "0";

        notification.style.transform =
            "translateY(10px)";


        setTimeout(() => {
            notification.remove();
        }, 250);

    }, 1800);

}