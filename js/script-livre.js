document.addEventListener("DOMContentLoaded", () => {
  const books = document.querySelectorAll(".book");

  books.forEach((book) => {
    const flipBtns = book.querySelectorAll(".flip-btn");
    flipBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        book.classList.toggle("flipped");
      });
    });
  });

  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("nav-links");

  if (burger && navLinks) {
    burger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      const isExpanded = navLinks.classList.contains("active");
      burger.setAttribute("aria-expanded", isExpanded);
    });
  }

  const booksGrid = document.getElementById("books-grid");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const currentPageInfo = document.getElementById("current-page-info");
  const allBooks = document.querySelectorAll(".book");
  let currentIndex = 0;
  const totalBooks = allBooks.length;
  const MOBILE_BREAKPOINT = 768;

  const isMobileView = () => window.innerWidth < MOBILE_BREAKPOINT;

  const updateCarousel = () => {
    if (!booksGrid || totalBooks === 0 || !isMobileView()) return;

    const offset = -currentIndex * 100;
    window.requestAnimationFrame(() => {
      booksGrid.style.transform = `translateX(${offset}%)`;
      currentPageInfo.textContent = `${currentIndex + 1} / ${totalBooks}`;
      prevBtn.disabled = currentIndex === 0;
      nextBtn.disabled = currentIndex === totalBooks - 1;
    });
  };

  if (prevBtn && nextBtn && booksGrid) {
    booksGrid.style.transition = "transform 0.5s ease-in-out";

    prevBtn.addEventListener("click", () => {
      if (isMobileView() && currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    });

    nextBtn.addEventListener("click", () => {
      if (isMobileView() && currentIndex < totalBooks - 1) {
        currentIndex++;
        updateCarousel();
      }
    });

    if (isMobileView()) updateCarousel();

    window.addEventListener("resize", () => {
      if (!isMobileView()) {
        booksGrid.style.transform = "translateX(0)";
      } else {
        updateCarousel();
      }
    });
  }
});
