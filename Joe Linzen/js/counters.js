document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".animate-section");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("is-visible");

      if (entry.target.classList.contains("counters-section")) {
        const counters = entry.target.querySelectorAll(".counter");

        setTimeout(() => {
          counters.forEach(counter => {
            const target = parseFloat(counter.dataset.target);
            const isDecimal = target % 1 !== 0;
            let current = 0;
            const increment = target / 120;

            const updateCounter = () => {
              current += increment;

              if (current < target) {
                counter.textContent = isDecimal
                  ? current.toFixed(1)
                  : Math.floor(current).toLocaleString();
                requestAnimationFrame(updateCounter);
              } else {
                counter.textContent = isDecimal
                  ? target.toFixed(1)
                  : target.toLocaleString();
              }
            };

            updateCounter();
          });
        }, 400); // delay elegante
      }

      observer.unobserve(entry.target);
    });
  }, { threshold: 0.25 });

  sections.forEach(section => observer.observe(section));
});
