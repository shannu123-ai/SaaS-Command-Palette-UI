const overlay = document.getElementById("commandOverlay");
const palette = document.getElementById("commandPalette");
const searchInput = document.getElementById("commandSearch");
const results = document.getElementById("commandResults");

const openPaletteButton = document.getElementById("openPaletteButton");
const searchTrigger = document.getElementById("searchTrigger");
const newProjectButton = document.getElementById("newProjectButton");

const toast = document.getElementById("toast");
const toastTitle = document.getElementById("toastTitle");
const toastMessage = document.getElementById("toastMessage");

let selectedIndex = 0;


/* ================= OPEN / CLOSE ================= */

function openPalette() {
    overlay.classList.add("show");

    setTimeout(() => {
        searchInput.focus();
        updateSelection();
    }, 50);
}


function closePalette() {
    overlay.classList.remove("show");

    searchInput.value = "";

    filterCommands("");

    selectedIndex = 0;
}


/* ================= BUTTONS ================= */

openPaletteButton.addEventListener("click", openPalette);

searchTrigger.addEventListener("click", openPalette);


/* ================= KEYBOARD SHORTCUT ================= */

document.addEventListener("keydown", (event) => {

    // Mac: Command + K
    // Windows/Linux: Ctrl + K

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


/* ================= CLOSE OUTSIDE ================= */

overlay.addEventListener("click", (event) => {

    if (event.target === overlay) {
        closePalette();
    }

});


/* ================= SEARCH ================= */

searchInput.addEventListener("input", () => {

    const query = searchInput.value
        .trim()
        .toLowerCase();

    filterCommands(query);

});


function filterCommands(query) {

    const items = [
        ...document.querySelectorAll(".command-item")
    ];

    let visibleItems = [];

    items.forEach((item) => {

        const text = item.innerText.toLowerCase();

        const matches = text.includes(query);

        item.style.display = matches
            ? "flex"
            : "none";

        if (matches) {
            visibleItems.push(item);
        }

    });


    selectedIndex = 0;

    updateSelection();

}


/* ================= KEYBOARD NAVIGATION ================= */

document.addEventListener("keydown", (event) => {

    if (!overlay.classList.contains("show")) {
        return;
    }


    const visibleItems = getVisibleItems();


    if (visibleItems.length === 0) {
        return;
    }


    if (event.key === "ArrowDown") {

        event.preventDefault();

        selectedIndex++;

        if (selectedIndex >= visibleItems.length) {
            selectedIndex = 0;
        }

        updateSelection();

    }


    if (event.key === "ArrowUp") {

        event.preventDefault();

        selectedIndex--;

        if (selectedIndex < 0) {
            selectedIndex = visibleItems.length - 1;
        }

        updateSelection();

    }


    if (event.key === "Enter") {

        event.preventDefault();

        const selected =
            visibleItems[selectedIndex];

        if (selected) {
            activateCommand(selected);
        }

    }

});


function getVisibleItems() {

    return [
        ...document.querySelectorAll(".command-item")
    ].filter(item => {
        return item.style.display !== "none";
    });

}


function updateSelection() {

    const items = getVisibleItems();

    items.forEach(item => {
        item.classList.remove("selected");
    });


    if (items[selectedIndex]) {

        items[selectedIndex]
            .classList.add("selected");

        items[selectedIndex]
            .scrollIntoView({
                block: "nearest"
            });

    }

}


/* ================= CLICK COMMAND ================= */

document
    .querySelectorAll(".command-item")
    .forEach(item => {

        item.addEventListener("click", () => {

            activateCommand(item);

        });

    });


function activateCommand(item) {

    const titleElement =
        item.querySelector("strong");

    if (!titleElement) {
        return;
    }

    const commandName =
        titleElement.textContent.trim();


    closePalette();


    showToast(
        commandName,
        getCommandMessage(commandName)
    );

}


/* ================= COMMAND MESSAGES ================= */

function getCommandMessage(command) {

    if (command.includes("Create new project")) {
        return "Project creation flow is ready.";
    }

    if (command.includes("Create new task")) {
        return "New task workspace opened.";
    }

    if (command.includes("Invite teammate")) {
        return "Invite teammate panel opened.";
    }

    if (command.includes("calendar")) {
        return "Project calendar opened.";
    }

    if (command.includes("analytics")) {
        return "Project analytics opened.";
    }

    if (command.includes("My tasks")) {
        return "Your assigned tasks are ready.";
    }

    if (command.includes("settings")) {
        return "Workspace settings opened.";
    }

    return "Command executed successfully.";

}


/* ================= TOAST ================= */

function showToast(title, message) {

    toastTitle.textContent = title;
    toastMessage.textContent = message;

    toast.classList.add("show");


    setTimeout(() => {

        toast.classList.remove("show");

    }, 2800);

}


/* ================= NEW PROJECT ================= */

newProjectButton.addEventListener("click", () => {

    showToast(
        "Create new project",
        "Project creation flow is ready."
    );

});


/* ================= PROJECT CARD ACTIONS ================= */

document
    .querySelectorAll(".more-button")
    .forEach(button => {

        button.addEventListener("click", () => {

            const card =
                button.closest(".project-card");

            const title =
                card.querySelector("h3").textContent;

            showToast(
                title,
                "Project actions menu opened."
            );

        });

    });


/* ================= FILTER BUTTON ================= */

const filterButton =
    document.querySelector(".filter-button");


filterButton.addEventListener("click", () => {

    const current =
        filterButton.innerText.trim();

    if (current.includes("All")) {

        filterButton.innerHTML =
            'Active projects <span>⌄</span>';

    } else {

        filterButton.innerHTML =
            'All projects <span>⌄</span>';

    }

});


/* ================= VIEW TOGGLE ================= */

const viewButtons =
    document.querySelectorAll(".view-toggle");


viewButtons.forEach(button => {

    button.addEventListener("click", () => {

        viewButtons.forEach(btn => {
            btn.classList.remove("active-view");
        });

        button.classList.add("active-view");

        showToast(
            "View changed",
            "Project layout preference updated."
        );

    });

});


/* ================= SIDEBAR NAVIGATION ================= */

const navLinks =
    document.querySelectorAll(".nav-link");


navLinks.forEach(link => {

    link.addEventListener("click", (event) => {

        event.preventDefault();

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});


/* ================= WORKSPACE SWITCHER ================= */

const workspaceSwitcher =
    document.querySelector(".workspace-switcher");


workspaceSwitcher.addEventListener("click", () => {

    showToast(
        "Workspace",
        "Workspace switcher opened."
    );

});


/* ================= INITIAL STATE ================= */

filterCommands("");

console.log(
    "NovaFlow Project Command Palette loaded successfully."
);