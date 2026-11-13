import { animate, inView } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm";

// Poori speed yahan se badlo: 1 = normal, 1.5 = aur dheemi, 0.7 = tez
const SPEED = 1;
const t = (seconds) => seconds * SPEED;

// Page khulne ke baad animation kitni der baad shuru ho
const START = t(0.6);

const smooth = [0.22, 1, 0.36, 1];

// Navbar: upar se neeche
animate("nav", { opacity: [0, 1], y: [-20, 0] },
  { duration: t(0.8), delay: START, ease: smooth });

// Hero: ek ke baad ek aata hai
animate(".d", { opacity: [0, 1], y: [20, 0] },
  { duration: t(1), delay: START + t(0.3), ease: smooth });

animate("#heading", { opacity: [0, 1], y: [40, 0] },
  { duration: t(1.2), delay: START + t(0.65), ease: smooth });

animate(".c", { opacity: [0, 1], y: [30, 0] },
  { duration: t(1), delay: START + t(1), ease: smooth });

animate(".herobtn", { opacity: [0, 1], y: [30, 0] },
  { duration: t(1), delay: START + t(1.35), ease: smooth });

// Hero ka cup: pehle slide-in, phir halka upar-neeche float
animate(".cup", { opacity: [0, 1], scale: [0.85, 1] },
  { duration: t(1.4), delay: START + t(0.8), ease: smooth })
  .finished.then(() => {
    animate(".cup", { y: [0, -12, 0] },
      { duration: t(4), repeat: Infinity, ease: "easeInOut" });
  });

// Cards ka group: jab section ka 30% dikhe, cards ek ke baad ek aayein
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

// Section ke labels, headings aur CTA ka text: scroll par fade-up
document.querySelectorAll(".g, section h2, #cta h1, #cta p").forEach((el) => {
  inView(el, () => {
    animate(el, { opacity: [0, 1], y: [30, 0] },
      { duration: t(0.9), ease: smooth });
  }, { amount: 0.6 });
});