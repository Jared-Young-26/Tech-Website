const learnMoreBtn = document.getElementById("learnMoreBtn");
const infoSection = document.getElementById("infoSection");

if (learnMoreBtn) {
  learnMoreBtn.addEventListener("click", () => {
    infoSection.scrollIntoView({ behavior: "smooth" });
  });
}

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach(card => {
  card.addEventListener("click", () => {
    const details = card.querySelector(".details");
    details.classList.toggle("hidden");
  });
});

const statusElement = document.getElementById("systemStatus");

if (statusElement) {
  setTimeout(() => {
    const statuses = [
      "All systems operational",
      "Minor latency detected",
      "Systems stable and secure"
    ];

    const randomStatus =
      statuses[Math.floor(Math.random() * statuses.length)];

    statusElement.textContent = randomStatus;
  }, 1000);
}
