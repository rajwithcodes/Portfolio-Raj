let dayNight = document.querySelector(".dayNight");
let banner = document.querySelector(".banner");

// Function to apply dark mode
function applyDarkMode(enabled) {
    if (enabled) {
        banner.classList.add("night");
    } else {
        banner.classList.remove("night");
    }
}

// Load dark mode preference on page load
document.addEventListener("DOMContentLoaded", () => {
    const isDark = localStorage.getItem("darkMode") === "true";
    applyDarkMode(isDark);

    document.body.classList.add("fade-out");

    const links = document.querySelectorAll("a[href]");
    links.forEach(link => {
        const href = link.getAttribute("href");
        if (href && !href.startsWith("#") && !href.startsWith("javascript")) {
            link.addEventListener("click", function (e) {
                e.preventDefault();
                const target = this.getAttribute("href");
                document.body.classList.add("out");
                setTimeout(() => {
                    window.location.href = target;
                }, 400);
            });
        }
    });
});

// Toggle dark mode on click and save preference
dayNight.addEventListener("click", () => {
    banner.classList.toggle("night");
    const isDark = banner.classList.contains("night");
    localStorage.setItem("darkMode", isDark);
});

// Typing effect
let typingeffect = new Typed("#text", {
    strings: ["Raj", "Programmer", "Student", "Designer", "Coder"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000
});
