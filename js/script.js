const leftDoor = document.querySelector(".left");
const rightDoor = document.querySelector(".right");
const enterButton = document.getElementById("enter-button");
const introScreen = document.getElementById("intro-screen");
const mainContent = document.getElementById("main-content");
const replayButton = document.getElementById("replay-door");

enterButton.addEventListener("click", () => {
  leftDoor.style.transform = "rotateY(-100deg)";
  rightDoor.style.transform = "rotateY(100deg)";
  setTimeout(() => {
    introScreen.style.display = "none";
    mainContent.classList.remove("hidden");
  }, 2000);
});

replayButton.addEventListener("click", (e) => {
  e.preventDefault();
  leftDoor.style.transform = "rotateY(0deg)";
  rightDoor.style.transform = "rotateY(0deg)";
  introScreen.style.display = "flex";
  mainContent.classList.add("hidden");
});
