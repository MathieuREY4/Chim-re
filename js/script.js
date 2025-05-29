const leftDoor = document.querySelector(".left");
const rightDoor = document.querySelector(".right");
const enterButton = document.getElementById("enter-button");
const introScreen = document.getElementById("intro-screen");
const mainContent = document.getElementById("main-content");
const replayButton = document.getElementById("replay-door");

const doorPassed = sessionStorage.getItem("doorPassed");

if (doorPassed) {
  introScreen.style.display = "none";
  mainContent.classList.remove("hidden");
} else {
  introScreen.style.display = "flex";
  mainContent.classList.add("hidden");
}

enterButton.addEventListener("click", () => {
  leftDoor.style.transform = "rotateY(-100deg)";
  rightDoor.style.transform = "rotateY(100deg)";
  setTimeout(() => {
    introScreen.style.display = "none";
    mainContent.classList.remove("hidden");

    sessionStorage.setItem("doorPassed", "true");
  }, 2000);
});

replayButton.addEventListener("click", (e) => {
  e.preventDefault();

  introScreen.style.display = "none";
  mainContent.classList.remove("hidden");
});

// --- MENU BURGER ---
const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
