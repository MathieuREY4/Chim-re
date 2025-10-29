const desktopIconsContainer = document.querySelector(".desktop-icons");
const windows = document.querySelectorAll(".window");
const closeButtons = document.querySelectorAll(".close-btn");

// ----------------- FONCTIONS UTILITAIRES -----------------

// Met la fenêtre donnée au premier plan (z-index élevé)
function focusWindow(targetWindow) {
  document.querySelectorAll(".window").forEach((win) => {
    win.style.zIndex = "200"; // Z-index par défaut
  });
  targetWindow.style.zIndex = "300"; // Z-index au premier plan
}

// Fonction pour gérer l'ouverture d'une fenêtre depuis une icône (Clic ou Touche)
function handleIconActivation(event) {
  // Empêche le clic fantôme de se déclencher après le touchend
  if (event.type === "touchend") {
    event.preventDefault();
  }

  const icon = event.target.closest(".icon[data-window]");

  if (icon) {
    const windowId = icon.dataset.window;
    const targetWindow = document.getElementById(windowId + "-window");

    if (targetWindow) {
      targetWindow.classList.remove("hidden");
      focusWindow(targetWindow);

      // Enlève l'icône de la barre des tâches si elle existe
      const taskbarItem = document.getElementById(`taskbar-${targetWindow.id}`);
      if (taskbarItem) {
        taskbarItem.remove();
      }
    }
  }
}

// ----------------- DÉLÉGATION D'ÉVÉNEMENTS : OUVERTURE/FERMETURE -----------------

if (desktopIconsContainer) {
  // PC : Événement CLIC
  desktopIconsContainer.addEventListener("click", handleIconActivation);
  // TACTILE : Événement TOUCHEND
  desktopIconsContainer.addEventListener("touchend", handleIconActivation);
}

// Gestion de la fermeture des fenêtres (ajout de touchend)
closeButtons.forEach((btn) => {
  const closeWindow = (e) => {
    if (e.type === "touchend") {
      e.preventDefault(); // Empêche le "click" fantôme
    }
    const window = btn.closest(".window");
    window.classList.add("hidden");

    // Optionnel: Retirer l'icône de la barre des tâches lors de la fermeture
    const taskbarItem = document.getElementById(`taskbar-${window.id}`);
    if (taskbarItem) {
      taskbarItem.remove();
    }
  };

  btn.addEventListener("click", closeWindow);
  btn.addEventListener("touchend", closeWindow);
});

// ----------------- SHUTDOWN -----------------
// Assurez-vous que les variables 'desktop', 'loginScreen', 'passwordInput', 'loginError' sont définies dans votre code HTML ou globalement
document.getElementById("shutdown-btn").addEventListener("click", () => {
  desktop.classList.add("hidden");
  loginScreen.classList.remove("hidden");
  passwordInput.value = "";
  loginError.textContent = "";
});

// ----------------- FONCTIONNALITÉ GLISSER-DÉPOSER DES FENÊTRES -----------------
let activeWindow = null;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

function dragStart(e) {
  // Ignorer si la cible est un bouton (minimisation, fermeture) ou une poignée de redimensionnement
  if (
    e.target.closest(".window-control") ||
    e.target.closest(".resize-handle")
  ) {
    return;
  }

  const header = e.target.closest(".window-header");
  if (!header) return;
  activeWindow = header.closest(".window");

  // Met la fenêtre au premier plan
  focusWindow(activeWindow);

  // Gère les coordonnées en fonction du type d'événement
  const eventCoords = e.touches ? e.touches[0] : e;

  initialX = eventCoords.clientX;
  initialY = eventCoords.clientY;

  const rect = activeWindow.getBoundingClientRect();
  // Calcule les offsets pour maintenir la position relative du curseur
  xOffset = rect.left;
  yOffset = rect.top;

  document.addEventListener("mouseup", dragEnd);
  document.addEventListener("mousemove", drag);
  document.addEventListener("touchend", dragEnd);
  document.addEventListener("touchmove", drag);
}

function drag(e) {
  if (!activeWindow) return;
  e.preventDefault();

  const eventCoords = e.touches ? e.touches[0] : e;

  const currentX = eventCoords.clientX;
  const currentY = eventCoords.clientY;

  const dx = currentX - initialX;
  const dy = currentY - initialY;

  // Applique la nouvelle position en utilisant l'offset initial + le déplacement
  activeWindow.style.left = `${xOffset + dx}px`;
  activeWindow.style.top = `${yOffset + dy}px`;

  activeWindow.style.transform = "none";
}

function dragEnd() {
  document.removeEventListener("mouseup", dragEnd);
  document.removeEventListener("mousemove", drag);
  document.removeEventListener("touchend", dragEnd);
  document.removeEventListener("touchmove", drag);

  activeWindow = null;
}

document.querySelectorAll(".window-header").forEach((header) => {
  header.addEventListener("mousedown", dragStart);
  header.addEventListener("touchstart", dragStart);
});

// ----------------- FONCTIONNALITÉ DE REDIMENSIONNEMENT DES FENÊTRES -----------------
let resizeActive = false;
let resizeDirection = "";
let resizeWindow = null;
let startX, startY, startWidth, startHeight, startLeft, startTop;

const handles = document.querySelectorAll(".resize-handle");

function resizeStart(e) {
  e.preventDefault();

  resizeActive = true;
  resizeWindow = e.target.closest(".window");
  resizeDirection = e.target.classList[1];

  // Gère les coordonnées en fonction du type d'événement
  const eventCoords = e.touches ? e.touches[0] : e;

  startX = eventCoords.clientX;
  startY = eventCoords.clientY;
  startWidth = resizeWindow.offsetWidth;
  startHeight = resizeWindow.offsetHeight;
  startLeft = resizeWindow.offsetLeft;
  startTop = resizeWindow.offsetTop;

  // Met la fenêtre au premier plan lors du redimensionnement
  focusWindow(resizeWindow);

  document.addEventListener("mousemove", resize);
  document.addEventListener("mouseup", resizeEnd);
  // Ajout du support tactile
  document.addEventListener("touchmove", resize);
  document.addEventListener("touchend", resizeEnd);
}

function resize(e) {
  if (!resizeActive) return;

  // Gère les coordonnées en fonction du type d'événement
  const eventCoords = e.touches ? e.touches[0] : e;

  const dx = eventCoords.clientX - startX;
  const dy = eventCoords.clientY - startY;

  let newWidth = startWidth;
  let newHeight = startHeight;
  let newLeft = startLeft;
  let newTop = startTop;

  // Logique de redimensionnement... (inchangée)
  if (resizeDirection.includes("right")) {
    newWidth = startWidth + dx;
  } else if (resizeDirection.includes("left")) {
    newWidth = startWidth - dx;
    newLeft = startLeft + dx;
  }

  if (resizeDirection.includes("bottom")) {
    newHeight = startHeight + dy;
  } else if (resizeDirection.includes("top")) {
    newHeight = startHeight - dy;
    newTop = startTop + dy;
  }

  // Limites minimales optionnelles
  newWidth = Math.max(150, newWidth);
  newHeight = Math.max(100, newHeight);

  resizeWindow.style.width = `${newWidth}px`;
  resizeWindow.style.height = `${newHeight}px`;
  resizeWindow.style.left = `${newLeft}px`;
  resizeWindow.style.top = `${newTop}px`;
}

function resizeEnd() {
  resizeActive = false;
  document.removeEventListener("mousemove", resize);
  document.removeEventListener("mouseup", resizeEnd);
  // Nettoyage des événements tactiles
  document.removeEventListener("touchmove", resize);
  document.removeEventListener("touchend", resizeEnd);
}

handles.forEach((handle) => {
  handle.addEventListener("mousedown", resizeStart);
  // Ajout du support tactile
  handle.addEventListener("touchstart", resizeStart);
});

// ----------------- FONCTIONNALITÉ DES BOUTONS DE CONTRÔLE (MINIMISATION) -----------------
const minimizeButtons = document.querySelectorAll(".minimize-btn");
const maximizeButtons = document.querySelectorAll(".maximize-btn");
const taskbarIcons = document.getElementById("taskbar-icons");

minimizeButtons.forEach((btn) => {
  const minimizeWindow = (e) => {
    if (e.type === "touchend") {
      e.preventDefault(); // Empêche le "click" fantôme sur mobile
    }

    const window = btn.closest(".window");
    const windowId = window.id;
    const windowTitle = window.querySelector(".window-header span").textContent;

    // Masque la fenêtre
    window.classList.add("hidden");

    // Crée une icône dans la barre des tâches si elle n'existe pas déjà
    if (!document.getElementById(`taskbar-${windowId}`)) {
      const taskbarItem = document.createElement("div");
      taskbarItem.id = `taskbar-${windowId}`;
      taskbarItem.classList.add("taskbar-item");
      taskbarItem.textContent = windowTitle;
      taskbarIcons.appendChild(taskbarItem);

      // Fonction pour restaurer la fenêtre
      const restoreWindow = (restoreEvent) => {
        if (restoreEvent.type === "touchend") {
          restoreEvent.preventDefault(); // Empêche le "click" fantôme
        }
        window.classList.remove("hidden");
        focusWindow(window); // Met au premier plan
        taskbarItem.remove();
      };

      // Ajout du listener pour restaurer la fenêtre (PC et TACTILE)
      taskbarItem.addEventListener("click", restoreWindow);
      taskbarItem.addEventListener("touchend", restoreWindow);
    }
  };

  // Ajout des listeners pour minimiser (PC et TACTILE)
  btn.addEventListener("click", minimizeWindow);
  btn.addEventListener("touchend", minimizeWindow);
});
