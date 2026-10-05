const overlay = document.getElementById("overlay");
const commandInput = document.getElementById("commandInput");
const openCommand = document.getElementById("openCommand");
const heroSearch = document.getElementById("heroSearch");
const toast = document.getElementById("toast");

/* Sidebar AI Command button */
const aiCommand = document.querySelector("nav a.active");

/* All command items */
const commandItems = document.querySelectorAll(".command-item");


/* =========================
   OPEN COMMAND PALETTE
========================= */

function openPalette() {
    overlay.classList.add("show");

    commandInput.value = "";

    commandItems.forEach(item => {
        item.style.display = "flex";
        item.classList.remove("selected");
    });

    setTimeout(() => {
        commandInput.focus();
    }, 100);
}


/* =========================
   CLOSE COMMAND PALETTE
========================= */

function closePalette() {
    overlay.classList.remove("show");
}


/* =========================
   TOAST MESSAGE
========================= */

function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2200);
}


/* =========================
   BUTTONS
========================= */

openCommand.addEventListener("click", openPalette);

heroSearch.addEventListener("click", openPalette);

/* Sidebar AI Command */
aiCommand.addEventListener("click", function(event) {
    event.preventDefault();
    openPalette();
});


/* =========================
   CTRL + K
========================= */

document.addEventListener("keydown", function(event) {

    if (
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === "k"
    ) {
        event.preventDefault();
        openPalette();
    }

    if (event.key === "Escape") {
        closePalette();
    }
});


/* =========================
   CLICK OUTSIDE
========================= */

overlay.addEventListener("click", function(event) {

    if (event.target === overlay) {
        closePalette();
    }

});


/* =========================
   COMMAND CLICK
========================= */

commandItems.forEach(function(item) {

    item.addEventListener("click", function() {

        const title = item.querySelector("strong").textContent;

        showToast(`✦ ${title} executed`);

        closePalette();

    });

});


/* =========================
   SEARCH
========================= */

commandInput.addEventListener("input", function() {

    const search = commandInput.value
        .toLowerCase()
        .trim();

    commandItems.forEach(function(item) {

        const text = item.textContent.toLowerCase();

        if (text.includes(search)) {
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }

    });

    selectedIndex = -1;

});


/* =========================
   KEYBOARD NAVIGATION
========================= */

let selectedIndex = -1;

commandInput.addEventListener("keydown", function(event) {

    const visibleItems = [...commandItems].filter(function(item) {
        return item.style.display !== "none";
    });


    if (visibleItems.length === 0) {
        return;
    }


    /* Arrow Down */

    if (event.key === "ArrowDown") {

        event.preventDefault();

        selectedIndex =
            (selectedIndex + 1) % visibleItems.length;

        updateSelection(visibleItems);
    }


    /* Arrow Up */

    if (event.key === "ArrowUp") {

        event.preventDefault();

        selectedIndex =
            (selectedIndex - 1 + visibleItems.length)
            % visibleItems.length;

        updateSelection(visibleItems);
    }


    /* Enter */

    if (event.key === "Enter") {

        event.preventDefault();

        if (selectedIndex >= 0) {
            visibleItems[selectedIndex].click();
        }

    }

});


/* =========================
   SELECT COMMAND
========================= */

function updateSelection(items) {

    commandItems.forEach(function(item) {
        item.classList.remove("selected");
    });


    if (items[selectedIndex]) {

        items[selectedIndex].classList.add("selected");

        items[selectedIndex].scrollIntoView({
            block: "nearest"
        });

    }

}