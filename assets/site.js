
document.addEventListener("DOMContentLoaded", () => {
    const d = window.WEDDING || {};

    // Populate all elements connected to data.js
    document.querySelectorAll("[data-bind]").forEach(el => {
        const key = el.getAttribute("data-bind");

        if (d[key] !== undefined) {
            el.textContent = d[key];
        }
    });

    // Populate programme events
    const eventList = document.getElementById("event-list");

    if (eventList && Array.isArray(d.events)) {
        eventList.innerHTML = d.events.map(ev => `
            <div class="event">
                <div class="event-icon" aria-hidden="true">
                    ${esc(ev.icon || "✦")}
                </div>
                <div>
                    <h3>${esc(ev.name)}</h3>
                    <p><strong>${esc(ev.time)}</strong> · ${esc(ev.note)}</p>
                </div>
            </div>
        `).join("");
    }

    // Google Maps link
    const map = document.getElementById("map-link");
    if (map && d.mapUrl) {
        map.href = d.mapUrl;
    }

    // Generate couple initials
    const initials = name => {
        return String(name || "")
            .replace(/^(Dr\.?\s*)/i, "")
            .split(/\s+/)
            .filter(Boolean)
            .slice(0, 2)
            .map(x => x[0])
            .join("")
            .toUpperCase();
    };

    const bm = document.getElementById("bride-monogram");
    const gm = document.getElementById("groom-monogram");

    if (bm) bm.textContent = initials(d.bride);
    if (gm) gm.textContent = initials(d.groom);

    // Mobile navigation
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav-links");

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            const open = nav.classList.toggle("open");
            toggle.setAttribute("aria-expanded", String(open));
        });
    }
});

// Escape HTML characters
function esc(v) {
    return String(v ?? "").replace(/[&<>"']/g, c => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[c]);
}

// Theme switcher
document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const button = document.getElementById("theme-toggle");

    if (!button) return;

    let saved = "white";

    try {
        saved = localStorage.getItem("wedding-theme") || "white";
    } catch (e) {}

    applyTheme(saved);

    button.addEventListener("click", () => {
        const next = body.dataset.theme === "blue" ? "white" : "blue";

        applyTheme(next);

        try {
            localStorage.setItem("wedding-theme", next);
        } catch (e) {}
    });

    function applyTheme(theme) {
        if (theme === "blue") {
            body.dataset.theme = "blue";
            button.textContent = "☼ White & Gold Theme";
            button.setAttribute("aria-label", "Switch to white background theme");
        } else {
            body.dataset.theme = "white";
            button.textContent = "✦ Royal Blue Theme";
            button.setAttribute("aria-label", "Switch to royal blue background theme");
        }
    }
});
