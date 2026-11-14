import { animate, inView } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm";

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (reduceMotion) {
  document.documentElement.classList.remove("js");
} else {
  startAnimations();
}

function startAnimations() {
  const SPEED = 1;
  const t = (seconds) => seconds * SPEED;
  const START = t(0.6);
  const smooth = [0.22, 1, 0.36, 1];

  animate(".nav", { opacity: [0, 1], y: [-20, 0] },
    { duration: t(0.8), delay: START, ease: smooth });

  animate(".d", { opacity: [0, 1], y: [20, 0] },
    { duration: t(1), delay: START + t(0.3), ease: smooth });

  animate("#heading", { opacity: [0, 1], y: [40, 0] },
    { duration: t(1.2), delay: START + t(0.65), ease: smooth });

  animate(".c", { opacity: [0, 1], y: [30, 0] },
    { duration: t(1), delay: START + t(1), ease: smooth });

  animate(".herobtn", { opacity: [0, 1], y: [30, 0] },
    { duration: t(1), delay: START + t(1.35), ease: smooth });

  animate(".cup", { opacity: [0, 1], scale: [0.85, 1] },
    { duration: t(1.4), delay: START + t(0.8), ease: smooth })
    .finished.then(() => {
      animate(".cup", { y: [0, -12, 0] },
        { duration: t(4), repeat: Infinity, ease: "easeInOut" });
    });

  function revealGroup(containerSelector, itemSelector, gap = 0.35) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    inView(container, () => {
      container.querySelectorAll(itemSelector).forEach((el, i) => {
        animate(el, { opacity: [0, 1], y: [50, 0] },
          { duration: t(1), delay: t(gap) * i, ease: smooth });
      });
    }, { amount: 0.3 });
  }

  revealGroup("#f", ".h", 0.35);
  revealGroup("#z", ".v", 0.35);
  revealGroup("#price", ".price-cards, .price-card", 0.45);

  document.querySelectorAll(".g, .section h2, #cta h2, #cta .j, #cta .e").forEach((el) => {
    inView(el, () => {
      animate(el, { opacity: [0, 1], y: [30, 0] },
        { duration: t(0.9), ease: smooth });
    }, { amount: 0.6 });
  });
}