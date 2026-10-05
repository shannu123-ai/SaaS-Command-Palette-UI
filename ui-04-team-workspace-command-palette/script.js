const overlay = document.getElementById("overlay");
const openPalette = document.getElementById("openPalette");
const commandSearch = document.getElementById("commandSearch");
const commands = document.querySelectorAll(".command-item");
const toast = document.getElementById("toast");
const inviteBtn = document.getElementById("inviteBtn");
const switchWorkspace = document.getElementById("switchWorkspace");

function showPalette() {
    overlay.classList.add("show");
    commandSearch.value = "";
    commandSearch.focus();
}

function closePalette() {
    overlay.classList.remove("show");
}

function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2200);
}

// Open command palette
openPalette.addEventListener("click", showPalette);

// Close when clicking outside the palette
overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
        closePalette();
    }
});

// Escape key closes palette
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closePalette();
    }
});

// Ctrl + K opens palette
document.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        showPalette();
    }
});

// Search commands
commandSearch.addEventListener("input", () => {
    const searchText = commandSearch.value.toLowerCase();

    commands.forEach((command) => {
        const commandName = command.dataset.command.toLowerCase();

        if (commandName.includes(searchText)) {
            command.style.display = "flex";
        } else {
            command.style.display = "none";
        }
    });
});

// Command selection
commands.forEach((command) => {
    command.addEventListener("click", () => {
        const action = command.dataset.command;

        closePalette();
        showToast(`${action} selected`);
    });
});

// Invite member
inviteBtn.addEventListener("click", () => {
    showToast("Invite Member action selected");
});

// Switch workspace
switchWorkspace.addEventListener("click", () => {
    showToast("Workspace switcher opened");
});

// Quick action buttons
document.querySelectorAll(".action-card").forEach((button) => {
    button.addEventListener("click", () => {
        const action = button.dataset.command;
        showToast(`${action} selected`);
    });
});