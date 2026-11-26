
document.addEventListener("DOMContentLoaded", () => {

  // Desplazamiento suave para los enlaces
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
      const target = document.querySelector(link.getAttribute("href"));

      if (target) {
        event.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // Efecto de aparición al desplazarse
  const elements = document.querySelectorAll(
    ".product-card, .artist-card, .campaign-card, .section-text"
  );

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  elements.forEach(element => {
    element.classList.add("reveal");
    observer.observe(element);
  });

});
