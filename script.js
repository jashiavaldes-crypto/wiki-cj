// ----------------------
// 1. MODO OSCURO
// ----------------------
const toggleDark = document.querySelector("#toggle-dark");
const body = document.body;

// Cargar preferencia guardada
if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark");
}

toggleDark.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
});

// ----------------------
// 2. MENÚ RESPONSIVO
// ----------------------
const menuBtn = document.querySelector("#menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
});

// ----------------------
// 3. BOTÓN "VOLVER ARRIBA"
// ----------------------
const backToTop = document.querySelector("#back-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.classList.add("visible");
    } else {
        backToTop.classList.remove("visible");
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ----------------------
// 4. ANIMACIÓN AL HACER SCROLL
// ----------------------
const elements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});

elements.forEach(el => observer.observe(el));
