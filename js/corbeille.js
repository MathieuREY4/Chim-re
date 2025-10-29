const trashWindow = document.getElementById("trash-window");
const trashContent = document.querySelector("#trash-window .trash-content");
const fileListView = document.getElementById("file-list-view");
const fileDetailView = document.getElementById("file-detail-view");
const detailTitle = document.getElementById("detail-title");
const detailDate = document.getElementById("detail-date");
const detailContent = document.getElementById("detail-content");
const backToListBtn = document.querySelector(".back-to-list-btn");
const restoreFileBtn = document.getElementById("restore-file-btn");
const fileReaderWindow = document.getElementById("file-reader-window");
const fileReaderTitle = document.getElementById("file-reader-title");
const fileReaderBody = document.getElementById("file-reader-body");

let currentFile = null;

const notes = [
  {
    id: "rapport-313",
    title: "Rapport d'Agent 313",
    date: "14/08/2034",
    content:
      "Une voiture suspecte a été aperçue près du secteur industriel. L'information n'est pas dans le rapport officiel. Agent : 313. Confiance limitée.",
    icon: "https://img.icons8.com/color/48/file.png",
    restored: false,
    dataType: "reports",
    fileContent: `<div class="restored-report">
        <h3>[CONFIDENTIEL] Rapport Additionnel - 14/08/2034</h3>
        <p><strong>Sujet :</strong> Anomalie dans le Secteur Industriel</p>
        <p>Une voiture suspecte (Plaque 4X87Z-G) a été aperçue près de l'ancien entrepôt à 02h15. Le véhicule appartient à une entreprise de sécurité privée non listée dans nos registres. Agent 313 a jugé l'information digne d'intérêt.</p>
        <p>Action requise : Vérification des registres financiers de la société.</p>
      </div>`,
  },
  {
    id: "image-crypt",
    title: "Photo de la scène",
    date: "16/08/2034",
    content:
      "Image cryptée. Nécessite l'outil d'analyse forensique pour être visualisée. Détails : Type de fichier inconnu. Poids : 4.2 MB",
    icon: "https://img.icons8.com/color/48/picture.png",
    restored: false,
    dataType: "photos",
    imageURL: "./assets/tyler.png",
  },
];

function openFileReader(file) {
  const fileReaderWindow = document.getElementById("file-reader-window");
  const fileReaderTitle = document.getElementById("file-reader-title");
  const fileReaderBody = document.getElementById("file-reader-body");

  if (fileReaderWindow && fileReaderTitle && fileReaderBody) {
    fileReaderTitle.textContent = file.title;
    fileReaderBody.textContent =
      file.fileContent || file.content || "Contenu du fichier non disponible.";
    fileReaderWindow.classList.remove("hidden");
  }
}

function addIconToDesktop(file) {
  const container = document.querySelector(".desktop-icons");

  if (!container) {
    console.error("Conteneur des icônes du bureau non trouvé.");
    return;
  }

  const newIcon = document.createElement("div");
  newIcon.classList.add("icon");

  newIcon.setAttribute("data-window", file.dataType);
  newIcon.setAttribute("id", `restored-${file.id}`);

  newIcon.innerHTML = `
    <img src="${file.icon}" alt="${file.title}" />
    <span>${file.title}</span>
  `;

  container.appendChild(newIcon);
}

function showFileDetail(note) {
  currentFile = note;

  detailTitle.textContent = note.title;
  detailDate.textContent = note.date;
  detailContent.textContent = note.content;

  if (restoreFileBtn) {
    if (note.restored) {
      restoreFileBtn.textContent = "Fichier déjà restauré";
      restoreFileBtn.disabled = true;
    } else {
      restoreFileBtn.textContent = "Restaurer le fichier sur le bureau";
      restoreFileBtn.disabled = false;
    }
  }

  fileListView.classList.add("hidden");
  fileDetailView.classList.remove("hidden");
}

function showFileList() {
  fileListView.classList.remove("hidden");
  fileDetailView.classList.add("hidden");
  currentFile = null;
}

function initTrash() {
  if (trashContent) {
    trashContent.innerHTML = "";

    notes.forEach((note) => {
      if (!note.restored) {
        const div = document.createElement("div");
        div.classList.add("trash-file");
        div.setAttribute("data-id", note.id);

        div.innerHTML = `
                <span class="trash-file-icon"><img src="${note.icon}" alt="Icone ${note.title}"></span>
                <span>${note.title}</span>
              `;

        div.addEventListener("click", () => {
          showFileDetail(note);
        });

        trashContent.appendChild(div);
      }
    });
  }

  if (restoreFileBtn) {
    restoreFileBtn.addEventListener("click", () => {
      if (currentFile && !currentFile.restored) {
        addIconToDesktop(currentFile);

        if (currentFile.dataType === "reports") {
          const reportsContent = document.querySelector(
            "#reports-window .reports-content"
          );
          if (reportsContent) {
            reportsContent.insertAdjacentHTML(
              "afterbegin",
              currentFile.fileContent
            );
          }
        } else if (currentFile.dataType === "photos") {
          const photosContainer = document.getElementById("photos-container");
          if (photosContainer && currentFile.imageURL) {
            const newPhoto = document.createElement("img");
            newPhoto.src = currentFile.imageURL;
            newPhoto.classList.add("gallery-photo");
            newPhoto.alt = currentFile.title;
            newPhoto.draggable = true;
            photosContainer.appendChild(newPhoto);
          }
        }

        currentFile.restored = true;
        restoreFileBtn.textContent = "Fichier restauré !";
        restoreFileBtn.disabled = true;

        const fileElement = document.querySelector(
          `.trash-file[data-id="${currentFile.id}"]`
        );
        if (fileElement) {
          fileElement.remove();
        }

        if (trashWindow) {
          trashWindow.classList.add("hidden");
        }

        console.log(`Fichier "${currentFile.title}" restauré sur le bureau.`);
        currentFile = null;
      }
    });
  }

  if (backToListBtn) {
    backToListBtn.addEventListener("click", showFileList);
  }
}

initTrash();
