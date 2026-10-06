// ==========================================
// MODERN SAAS UI COLLECTION
// MAIN DASHBOARD SCRIPT
// ==========================================


// ---------- SEARCH ----------

const searchInput = document.getElementById("templateSearch");
const templateCards = document.querySelectorAll(".template-card");

if (searchInput) {

    searchInput.addEventListener("input", function () {

        const searchText = this.value.toLowerCase().trim();

        templateCards.forEach(card => {

            const title =
                card.querySelector("h3")?.textContent.toLowerCase() || "";

            const description =
                card.querySelector("p")?.textContent.toLowerCase() || "";

            const tag =
                card.querySelector(".template-tag")?.textContent.toLowerCase() || "";

            if (
                title.includes(searchText) ||
                description.includes(searchText) ||
                tag.includes(searchText)
            ) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });

    });

}


// ---------- TEMPLATE IDs ----------
//
// Order matches the 16 cards in index.html
//

const templateIds = [

    "landing",
    "dashboard",
    "onboarding",
    "login",
    "pricing",
    "billing",
    "settings",
    "team",
    "users",
    "integrations",
    "help",
    "docs",
    "calendar",
    "files",
    "workspace",
    "command"

];


// ---------- VIEW TEMPLATE BUTTONS ----------

const openButtons =
    document.querySelectorAll(".open-btn");


openButtons.forEach((button, index) => {

    button.addEventListener("click", function () {

        const templateId =
            templateIds[index];

        if (!templateId) {
            return;
        }


        // Open template viewer

        window.location.href =
            `template-viewer.html?id=${templateId}`;

    });

});


// ---------- SIDEBAR NAVIGATION ----------

const sidebarLinks =
    document.querySelectorAll(".sidebar a");


sidebarLinks.forEach(link => {

    link.addEventListener("click", function () {

        sidebarLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});


// ---------- CTRL + K SEARCH ----------

document.addEventListener("keydown", function (event) {

    if (
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === "k"
    ) {

        event.preventDefault();

        if (searchInput) {
            searchInput.focus();
        }

    }

});


// ---------- ESCAPE SEARCH ----------

if (searchInput) {

    searchInput.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            this.value = "";

            this.dispatchEvent(
                new Event("input")
            );

            this.blur();

        }

    });

}


// ---------- CARD HOVER ----------

templateCards.forEach(card => {

    card.addEventListener("mouseenter", function () {

        this.classList.add("card-active");

    });


    card.addEventListener("mouseleave", function () {

        this.classList.remove("card-active");

    });

});


// ---------- PAGE LOAD ----------

console.log(
    "Modern SaaS UI Collection loaded successfully."
);

console.log(
    "Total templates:",
    templateCards.length
);