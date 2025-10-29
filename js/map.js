// Définir les données des points d'intérêt
const pointsOfInterest = {
  "poi-orphelinat": {
    title: "Orphelinat de Golza",
    image: "./assets/tome5.png", // Remplacez par le chemin de votre image
    description:
      "Cet orphelinat abandonné a été le dernier lieu de résidence de Fallen avant sa disparition. Les rumeurs disent que d'étranges événements s'y sont produits, mais aucune preuve n'a été trouvée.",
  },
  "poi-industriel": {
    title: "Secteur industriel",
    image: "./assets/industriel-pic.jpg", // Remplacez par le chemin de votre image
    description:
      "La zone industrielle, autrefois un centre d'activité, est maintenant en grande partie à l'abandon. C'est un point de rencontre connu des gangs locaux et des trafiquants. La police y a mené plusieurs opérations.",
  },
  "poi-entrepot": {
    title: "Ancien entrepôt",
    image: "./assets/entrepot-pic.jpg", // Remplacez par le chemin de votre image
    description:
      "Le rapport d'enquête indique que Fallen a été aperçu pour la dernière fois près de cet ancien entrepôt. Le bâtiment est délabré et sert probablement de repaire. Une surveillance accrue est nécessaire.",
  },
  "poi-north": {
    title: "Quartier Nord",
    image: "./assets/quartier-nord-pic.jpg", // Remplacez par le chemin de votre image
    description:
      "Le quartier Nord est connu pour son taux de criminalité élevé. C'est un terrain fertile pour les activités illégales. Il est fort probable que certains indices se trouvent dans ce secteur.",
  },
  "poi-south": {
    title: "Quartier Sud",
    image: "./assets/quartier-sud-pic.jpg", // Remplacez par le chemin de votre image
    description:
      "Le quartier Sud est une zone résidentielle. Les habitants ont signalé des bruits étranges et des allers-retours suspects la nuit. Il est possible que le suspect se soit réfugié dans l'une des maisons abandonnées.",
  },
};

// Sélecteurs d'éléments de la carte
const cityMapImg = document.querySelector(".city-map-img");
const mapOverlay = document.querySelector(".map-overlay");
const poiDetailsContainer = document.getElementById("poi-details-container");
const poiTitle = document.getElementById("poi-title");
const poiImage = document.getElementById("poi-image");
const poiDescription = document.getElementById("poi-description");
const backToMapBtn = document.getElementById("back-to-map-btn");
const pois = document.querySelectorAll(".poi");

// Gérer les clics sur les points d'intérêt (POI)
pois.forEach((poi) => {
  poi.addEventListener("click", (event) => {
    const poiId = event.currentTarget.id;
    const poiData = pointsOfInterest[poiId];
    if (poiData) {
      // Masquer la carte et l'overlay, et afficher les détails
      cityMapImg.classList.add("hidden");
      mapOverlay.classList.add("hidden");
      poiDetailsContainer.classList.remove("hidden");

      // Mettre à jour le contenu de la vue détaillée
      poiTitle.textContent = poiData.title;
      poiImage.src = poiData.image;
      poiDescription.textContent = poiData.description;
    }
  });
});

// Gérer le clic sur le bouton de retour
backToMapBtn.addEventListener("click", () => {
  poiDetailsContainer.classList.add("hidden");
  cityMapImg.classList.remove("hidden");
  mapOverlay.classList.remove("hidden");
});
