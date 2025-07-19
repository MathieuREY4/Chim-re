// === CAROUSEL PRINCIPAL ===
const carouselItems = document.querySelectorAll(".carousel-item");
let currentSlide = 0;

function updateCarousel(index) {
  carouselItems.forEach((item, i) => {
    item.classList.toggle("active", i === index);
  });
}

document
  .querySelector(".carousel-section .arrow.left")
  .addEventListener("click", () => {
    currentSlide =
      (currentSlide - 1 + carouselItems.length) % carouselItems.length;
    updateCarousel(currentSlide);
  });

document
  .querySelector(".carousel-section .arrow.right")
  .addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % carouselItems.length;
    updateCarousel(currentSlide);
  });

// === BOUTON DE TÉLÉCHARGEMENT ===
document.getElementById("downloadBtn").addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "assets/chapitre1.pdf";
  link.download = "Chimere-Chapitre1.pdf";
  link.click();
});

// === REMERCIEMENTS : UNE CARD À LA FOIS ===
const remerciementCards = document.querySelectorAll(".remerciement-card");
let currentRemerciement = 0;

function updateRemerciements(index) {
  remerciementCards.forEach((card, i) => {
    card.style.display = i === index ? "block" : "none";
  });
}

updateRemerciements(currentRemerciement);

document
  .querySelector(".remerciements-section .arrow.left")
  .addEventListener("click", () => {
    currentRemerciement =
      (currentRemerciement - 1 + remerciementCards.length) %
      remerciementCards.length;
    updateRemerciements(currentRemerciement);
  });

document
  .querySelector(".remerciements-section .arrow.right")
  .addEventListener("click", () => {
    currentRemerciement = (currentRemerciement + 1) % remerciementCards.length;
    updateRemerciements(currentRemerciement);
  });

// === FLIP LIVRES avec DÉLÉGATION ===
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("flip-btn")) {
    const card = e.target.closest(".livre-card");
    if (card) {
      card.classList.toggle("flipped");
    }
  }
});

const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
