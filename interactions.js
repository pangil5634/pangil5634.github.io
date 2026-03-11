const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const updateScrollProgress = () => {
  const bar = document.querySelector(".scroll-progress-bar");
  if (!bar) return;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
  bar.style.height = `${Math.min(Math.max(scrolled, 0), 100)}%`;
};

updateScrollProgress();
window.addEventListener("scroll", updateScrollProgress, { passive: true });
window.addEventListener("resize", updateScrollProgress);

const glowTargets = document.querySelectorAll("[data-glow]");
if (!reducedMotion) {
  glowTargets.forEach((node) => {
    node.addEventListener("pointermove", (event) => {
      const rect = node.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      node.style.setProperty("--mx", `${x}px`);
      node.style.setProperty("--my", `${y}px`);
    });
  });
}

const tiltCards = document.querySelectorAll("[data-tilt]");
if (!reducedMotion) {
  tiltCards.forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;
      const rotateY = (px - 0.5) * 10;
      const rotateX = (0.5 - py) * 10;
      card.style.transform = `rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
  });
}

if (!reducedMotion) {
  const orbA = document.querySelector(".orb-a");
  const orbB = document.querySelector(".orb-b");
  const gridLayer = document.querySelector(".layer-grid");

  window.addEventListener("pointermove", (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 14;
    const y = (event.clientY / window.innerHeight - 0.5) * 14;

    if (orbA) orbA.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    if (orbB) orbB.style.transform = `translate3d(${-x}px, ${-y}px, 0)`;
    if (gridLayer) gridLayer.style.transform = `translate3d(${(x * 0.35).toFixed(2)}px, ${(y * 0.35).toFixed(2)}px, 0)`;
  });
}
