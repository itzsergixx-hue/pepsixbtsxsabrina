
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

// Menú para celulares
menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
});

// Cerrar menú al seleccionar una sección
document.querySelectorAll("#nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
    });
});

// Animaciones al desplazarse
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll(
    ".section, .product, .history-card, .artist-content, .advertising-image"
).forEach(element => {
    observer.observe(element);
});

// Efecto visual de la portada
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
    const position = window.scrollY;

    if (hero && position < 600) {
        hero.style.backgroundPosition =
            `center ${position * 0.15}px`;
    }
});
