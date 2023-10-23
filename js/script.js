// Mobile Nav

const headerEl = document.querySelector(".header-section");
const mobileNavEl = document.querySelector(".mobile-nav-btn");

mobileNavEl.addEventListener("click", () => {
  headerEl.classList.toggle("open-nav");
});

//  Sticky Nav
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

obs.observe(sectionHeroEl);
