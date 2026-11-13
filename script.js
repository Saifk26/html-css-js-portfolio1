function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Scroll animations: elements fade and slide in as they enter the viewport.
(function () {
  const targets = document.querySelectorAll(
    [
      "#profile .section__pic-container",
      "#profile .section__text",
      "section > .section__text__p1",
      "section > .title",
      ".section-container > .section__pic-container",
      ".details-container",
      ".text-container",
      ".contact-info-upper-container",
      "footer",
    ].join(", ")
  );

  if (!("IntersectionObserver" in window)) return;

  targets.forEach((el) => {
    const siblings = Array.from(el.parentElement.children);
    el.style.transitionDelay = Math.min(siblings.indexOf(el), 4) * 120 + "ms";
    el.classList.add("reveal");
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
  );

  targets.forEach((el) => observer.observe(el));
})();
