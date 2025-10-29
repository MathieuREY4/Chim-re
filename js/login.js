const loginScreen = document.getElementById("login-screen");
const desktop = document.getElementById("desktop");
const loginBtn = document.getElementById("login-btn");
const passwordInput = document.getElementById("password-input");
const loginError = document.getElementById("login-error");

const MAIN_PASSWORD = "azerty";

loginBtn.addEventListener("click", () => {
  if (passwordInput.value === MAIN_PASSWORD) {
    loginScreen.classList.add("hidden");
    desktop.classList.remove("hidden");
  } else {
    loginError.textContent = "Mot de passe incorrect.";
  }
});
