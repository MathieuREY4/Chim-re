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
});
