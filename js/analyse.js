// ----------------- ANALYSE ET GLISSER-DÉPOSER -----------------
(function () {
  const forensicWindow = document.getElementById("forensic-analyser-window");
  const forensicImg = document.getElementById("forensic-img");
  const sliders = forensicWindow
    ? forensicWindow.querySelectorAll("input[type='range']")
    : [];
  const valueSpans = forensicWindow
    ? forensicWindow.querySelectorAll(".controls span")
    : [];
  const resetFiltersBtn = forensicWindow
    ? forensicWindow.querySelector("#reset-filters-btn")
    : null;
  const forensicIcon = document.querySelector(
    '.icon[data-window="forensic-analyser"]'
  );

  // Assurez-vous que tous les éléments nécessaires existent
  if (
    !forensicWindow ||
    !forensicImg ||
    sliders.length === 0 ||
    valueSpans.length === 0 ||
    !resetFiltersBtn ||
    !forensicIcon
  ) {
    return;
  }

  function updateImageFilter() {
    const blur = sliders[0].value;
    const contrast = sliders[1].value;
    const brightness = sliders[2].value;
    const saturate = sliders[3].value;
    const grayscale = sliders[4].value;

    forensicImg.style.filter =
      `brightness(${brightness}%) ` +
      `contrast(${contrast}%) ` +
      `blur(${blur}px) ` +
      `saturate(${saturate}%) ` +
      `grayscale(${grayscale}%)`;

    valueSpans[0].textContent = blur;
    valueSpans[1].textContent = contrast;
    valueSpans[2].textContent = brightness;
    valueSpans[3].textContent = saturate;
    valueSpans[4].textContent = grayscale;
  }

  function resetFilters() {
    sliders[0].value = 0; // Flou
    sliders[1].value = 0; // Contraste
    sliders[2].value = 0; // Luminosité
    sliders[3].value = 0; // Saturation
    sliders[4].value = 0; // Niveau de gris

    updateImageFilter();
  }

  // Gère la réinitialisation des filtres à l'ouverture de la fenêtre
  forensicIcon.addEventListener("click", resetFilters);
  resetFiltersBtn.addEventListener("click", resetFilters);

  // Initialise les filtres au chargement
  resetFilters();

  // Gestion des événements de l'outil d'analyse
  sliders.forEach((slider) => {
    slider.addEventListener("input", updateImageFilter);
  });

  // ----------------- Gestion du Glisser-Déposer (CORRIGÉE) -----------------
  const photosContainer = document.getElementById("photos-container");
  const forensicAnalyserContent = forensicWindow.querySelector(
    ".forensic-analyser-content"
  );

  // Changement : Utilisation de la délégation d'événement sur le conteneur des photos
  photosContainer.addEventListener("dragstart", (e) => {
    // Cible le nouveau conteneur glissable (.file-display)
    const fileDisplay = e.target.closest(".file-display");

    if (fileDisplay) {
      // Récupère l'image réelle cachée à l'intérieur
      const actualPhoto = fileDisplay.querySelector(".gallery-photo");

      if (actualPhoto) {
        e.dataTransfer.setData("text/plain", actualPhoto.src);
        e.dataTransfer.effectAllowed = "copy";
      }
    }
  });

  forensicAnalyserContent.addEventListener("dragover", (e) => {
    e.preventDefault();
    forensicAnalyserContent.classList.add("drag-over");
    e.dataTransfer.dropEffect = "copy";
  });

  forensicAnalyserContent.addEventListener("dragleave", () => {
    forensicAnalyserContent.classList.remove("drag-over");
  });

  forensicAnalyserContent.addEventListener("drop", (e) => {
    e.preventDefault();
    forensicAnalyserContent.classList.remove("drag-over");
    const imageSrc = e.dataTransfer.getData("text/plain");

    if (imageSrc) {
      forensicImg.src = imageSrc;
      resetFilters();
    }
  });
})();
