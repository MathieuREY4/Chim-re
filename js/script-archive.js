// ----------------- LOGIN -----------------
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

// ----------------- FENÊTRES -----------------
// const icons = document.querySelectorAll(".icon[data-window]"); // Ancienne ligne supprimée
const desktopIconsContainer = document.querySelector(".desktop-icons"); // Nouvel élément pour la délégation
const windows = document.querySelectorAll(".window");
const closeButtons = document.querySelectorAll(".close-btn");

// **Délégation d'Événements**
// Cet écouteur gère les clics sur TOUTES les icônes, y compris les fichiers restaurés.
if (desktopIconsContainer) {
  desktopIconsContainer.addEventListener("click", (event) => {
    // Trouve l'icône la plus proche de l'élément cliqué.
    const icon = event.target.closest(".icon[data-window]");

    if (icon) {
      const windowId = icon.dataset.window;

      // 1. Logique simplifiée : ouvrir la fenêtre correspondante
      const targetWindow = document.getElementById(windowId + "-window");
      if (targetWindow) {
        targetWindow.classList.remove("hidden");
        // Logique pour mettre la fenêtre au premier plan
      }
    }
  });
}

closeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.closest(".window").classList.add("hidden");
  });
});
// ----------------- SHUTDOWN -----------------
document.getElementById("shutdown-btn").addEventListener("click", () => {
  desktop.classList.add("hidden");
  loginScreen.classList.remove("hidden");
  passwordInput.value = "";
  loginError.textContent = "";
});

//Mails//

const mails = {
  inbox: {
    1: {
      sender: "Admin",
      date: "03/09/2025, 14:00",
      subject: "Mise à jour sur Fallen",
      body: "Agent Selina, Vous trouverez sur votre bureau plusieurs onglets utilisables.<br><br> - L'onglet 'Rapports' Vous donneras accès à l'avancée de l'enquête.<br><br> - L'onglet 'Boite mail' vous donnera certaines informations importantes pour votre enquête.<br><br> - L'onglet 'Photos' contient des images liées à l'enquête que vous devrait glisser/déposer dans l'onglet 'Analyse' afin de procéder aux retouches.<br><br> - L'onglet 'Orphelinat' est un fichier sécurisé que vous devez réussir à ouvrir en trouvant le bon mot de passe.<br><br> - L'onglet 'corbeille' contient peut-être des choses intéressantes. Ou pas.<br><br> - L'onglet 'Chat sécurisé' sera votre point de départ idéal pour débuter votre immersion. Il simulera un échange dans lequel vous aurez seulement besoin de cliquer sur 'Répondre' lorsque votre interlocuteur aura répondu.<br><br> - L'onglet 'Carte de la ville' vous aidera à mieux situer l'enquête et vous donnera probablement quelques pistes.<br><br> - l'onglet 'Terminal' sera votre meilleur ami pour résoudre l'enquête. Il vous permettra de naviguer dans les fichiers afin de récolter de précieux indices.<br><br> - L'onglet 'Notes' contient un bloc note ordinaire afin de faciliter votre immersion et de pouvoir écrire vos notes tout au long de votre enquête.<br><br> - Les onglets 'Morpion' et 'Snake' Sont simplement là pour vous divertir un peu lors de vos pauses.<br><br> - L'onglet calculatrice vous aidera à... réviser vos multiplications?<br><br> - L'onglet 'Analyse' vous permettra de retoucher les images importées directement depuis l'onglet 'Photos'.<br><br> - L'onglet 'Eteindre' vous déconnectera directement de la session. Attention, si vous cliquez dessus, vous perdrez votre progression! ",
      reply:
        "Merci pour les informations. Je me familiarise avec l'interface et je débute l'enquête.",
      replied: false,
      read: false,
    },
    2: {
      sender: "Earl",
      date: "03/09/2025, 14:15",
      subject: "Rappel de procédure",
      body: "Aaron,<br> Merci de me fournir un rapport détaillé sur l'enquête Fallen dans les plus brefs délais. Des renforts vous ont été affectés et arriveront au central de Golza dès demain. Il est temps de conclure cette affaire qui a assez durée.",
      reply:
        "Je vous ferez parvenir mon rapport au plus vite. Nous suivons une piste intéressante.",
      replied: false,
      read: false,
    },
    3: {
      sender: "Carl",
      date: "03/09/2025, 15:00",
      subject: "Rapport intermédiaire",
      body: "Vous avez besoin de vous détendre chef. On se fait un petit morpion à la pause? Si je me souviens bien, le score est de 28 à 14 pour moi! ",
      reply:
        "Tu es au courant que ton bureau est en face du miens, et que je vois ton sourire en coin? On jouera quand cette affaire sera bouclée. Maintenant je vais me lever, et te mettre une tape sur la tête, andouille.",
      replied: false,
      read: false,
    },
    4: {
      sender: "Police scientifique – Commissariat de Golza",
      date: "03/09/2025, 15:30",
      subject: "Pièces à convictions",
      body: "Bonjour M. SELINA,<br> Vous trouverez dans votre outil 'Photos' les pièces à convictions que vous avez demandé.<br> En vous en souhaitant bonne réception.<br><br> Dr. Léa Martin",
      reply:
        "Bonjour,<br> Je vous remercie pour votre réactivité.<br><br> cdt<br> Aaron.",
      replied: false,
      read: false,
    },
    5: {
      sender: "Agent 313",
      date: "03/09/2025, 16:00",
      subject: "Nouvelle directive",
      body: "Tous les agents sont priés de transmettre leurs observations avant 18h. Classement top secret.",
      reply: "Mes rapports seront envoyés avant l'heure limite.",
      replied: false,
      read: false,
    },
    6: {
      sender: "Service de surveillance",
      date: "03/09/2025, 16:45",
      subject: "Signalement suspect",
      body: "Un individu non identifié a été observé dans le quartier Nord. Vigilance maximale.",
      reply: "J'ai alerté les équipes sur place. Vigilance accrue.",
      replied: false,
      read: false,
    },
    7: {
      sender: "Le Commandement",
      date: "03/09/2025, 17:00",
      subject: "Analyse vidéo",
      body: "Caméras du secteur 12 : mouvements suspects enregistrés à 02h43.",
      reply: "J'analyse les enregistrements vidéo du secteur 12.",
      replied: false,
      read: false,
    },
    8: {
      sender: "Agent 313",
      date: "03/09/2025, 17:15",
      subject: "Confirmation",
      body: "Fallen a été localisé près de l'ancienne usine. Aucune activité inhabituelle détectée par drones.",
      reply: "Bien reçu. On continue la surveillance de la zone.",
      replied: false,
      read: false,
    },
    9: {
      sender: "Service de surveillance",
      date: "03/09/2025, 18:00",
      subject: "Compte rendu",
      body: "Patrouilles renforcées sur tous les points d'entrée du quartier Est.",
      reply: "Compris, j'assure le renforcement des patrouilles.",
      replied: false,
      read: false,
    },
    10: {
      sender: "Le Commandement",
      date: "03/09/2025, 18:30",
      subject: "Message interne",
      body: "Coordination avec les agents de terrain : surveillance discrète recommandée.",
      reply: "La coordination avec les agents est en place.",
      replied: false,
      read: false,
    },
  },
  sent: {
    1: {
      sender: "Selina",
      date: "03/09/2025, 14:05",
      subject: "RE: Mise à jour sur Fallen",
      body: "Merci pour les informations. Je me familiarise avec l'interface et je débute l'enquête.",
      read: true,
    },
  },
  spam: {
    1: {
      sender: "Pub@spamsite.com",
      date: "03/09/2025, 13:00",
      subject: "Gagnez 1.000.000$",
      body: "Pour recevoir un million de dollars, veuillez cliquer sur ce lien : <a href='#'>Lien malveillant</a>",
      read: false,
    },
  },
};

const mailListDiv = document.getElementById("mail-list");
const mailContentDiv = document.getElementById("mail-view");
const mailIcon = document.querySelector('.icon[data-window="mails"]');
const mailSidebar = document.querySelector(".mail-sidebar");
const securityPopup = document.getElementById("security-popup");
const antivirusPopup = document.getElementById("antivirus-popup");
const launchAntivirusBtn = document.getElementById("launch-antivirus-btn");
const antivirusStatus = document.getElementById("antivirus-status");
const antivirusProgress = document.getElementById("antivirus-progress");

// Initialisation de unreadMails en comptant les mails non lus
let unreadMails = Object.values(mails.inbox).filter(
  (mail) => !mail.read
).length;
let currentFolder = "inbox";

const updateMailNotification = () => {
  let notification = mailIcon.querySelector(".notification");
  if (unreadMails > 0) {
    if (!notification) {
      notification = document.createElement("span");
      notification.classList.add("notification");
      mailIcon.appendChild(notification);
    }
    notification.textContent = unreadMails;
    notification.style.display = "block";
  } else {
    if (notification) {
      notification.style.display = "none";
    }
  }
};

const displayMails = (folder) => {
  mailListDiv.innerHTML = "";
  mailContentDiv.innerHTML = "";
  const currentMails = mails[folder];

  // Recalculer unreadMails pour le dossier actuel
  unreadMails = Object.values(currentMails).filter((mail) => !mail.read).length;

  for (let id in currentMails) {
    const mail = currentMails[id];
    const mailDiv = document.createElement("div");
    mailDiv.classList.add("mail-item");
    mailDiv.dataset.mail = id;
    mailDiv.dataset.folder = folder;

    // Ajoutez la classe 'unread' uniquement si le mail n'est pas lu
    if (!mail.read) {
      mailDiv.classList.add("unread");
    }

    mailDiv.innerHTML = `<span class="mail-sender">${mail.sender}</span> - <span class="mail-date">${mail.date}</span><br><strong>Sujet:</strong> ${mail.subject}`;
    mailListDiv.appendChild(mailDiv);
  }
  updateMailNotification();
};

const displayMailContent = (mail, id, folder) => {
  let content = `
    <div class="mail-header">
      <h3>De: ${mail.sender}<br>Sujet: ${mail.subject}<br>Date: ${mail.date}</h3>
    </div>
    <div class="mail-body">
      <p>${mail.body}</p>
  `;

  // Affiche la réponse si l'e-mail a déjà été répondu
  if (mail.replied) {
    content += `
      <div class="mail-body-reply">
        <br><br>---<br>Réponse :<br>${mail.reply}
      </div>
    `;
  }

  content += `</div>`;

  // Affiche le bouton "Répondre"
  if (folder === "inbox" && mail.reply && !mail.replied) {
    content += `<button class="reply-button">Répondre</button>`;
  }

  mailContentDiv.innerHTML = content;

  if (folder === "inbox" && mail.reply && !mail.replied) {
    const replyButton = mailContentDiv.querySelector(".reply-button");
    if (replyButton) {
      replyButton.addEventListener("click", () => {
        mails.inbox[id].replied = true;

        const mailBody = mailContentDiv.querySelector(".mail-body");
        const replyDiv = document.createElement("div");
        replyDiv.innerHTML = `<br><br>---<br>Réponse :<br>${mail.reply}`;
        mailBody.appendChild(replyDiv);

        const newSentMailId = Object.keys(mails.sent).length + 1;
        mails.sent[newSentMailId] = {
          sender: "Selina",
          date: new Date().toLocaleString("fr-FR"),
          subject: `RE: ${mail.subject}`,
          body: mail.reply,
          read: true,
        };

        replyButton.remove();
      });
    }
  }

  // Écoute du clic sur lien malveillant
  if (folder === "spam") {
    const maliciousLink = mailContentDiv.querySelector("a");
    if (maliciousLink) {
      maliciousLink.addEventListener("click", (event) => {
        event.preventDefault();
        securityPopup.classList.remove("hidden");
      });
    }
  }
};

mailSidebar.addEventListener("click", (e) => {
  const folder = e.target.closest(".mail-folder");
  if (folder) {
    document.querySelector(".mail-folder.active").classList.remove("active");
    folder.classList.add("active");
    currentFolder = folder.dataset.folder;
    displayMails(currentFolder);
  }
});

mailListDiv.addEventListener("click", (e) => {
  const item = e.target.closest(".mail-item");
  if (!item) return;
  const folder = item.dataset.folder;
  const mailId = item.dataset.mail;
  const mail = mails[folder][mailId];

  if (mail) {
    displayMailContent(mail, mailId, folder);

    if (!mail.read) {
      mails[folder][mailId].read = true;
      item.classList.remove("unread");
      unreadMails--;
      updateMailNotification();
    }
  }
});

// Gère le clic sur le bouton "Lancer l'anti-virus"
launchAntivirusBtn.addEventListener("click", () => {
  securityPopup.classList.add("hidden");
  antivirusPopup.classList.remove("hidden");

  antivirusStatus.textContent = "Analyse en cours...";
  antivirusProgress.style.width = "0"; // reset à 0

  // Force un recalcul puis démarre l'animation
  setTimeout(() => {
    antivirusProgress.style.width = "100%";
  }, 50);

  // Quand la transition est finie
  antivirusProgress.addEventListener(
    "transitionend",
    () => {
      antivirusStatus.textContent = "Sécurité rétablie !";
      setTimeout(() => {
        antivirusPopup.classList.add("hidden");
        antivirusProgress.style.width = "0"; // reset pour la prochaine fois
      }, 1500);
    },
    { once: true }
  );
});

// Afficher les mails reçus par défaut au démarrage
displayMails("inbox");

// ----------------- RAPPORTS -----------------
const reportsContent = document.querySelector(".reports-content");
const reports = [
  {
    ref: "#34-738",
    date: "12/08/2034",
    title: "Observation Fallen - Secteur Est",
    summary:
      "Observation du sujet Fallen dans le secteur industriel désaffecté.",
    obs: [
      "Témoin affirme que le sujet parlait de “justice par le feu”.",
      "Empreintes relevées sur scène concordent partiellement avec le dossier #12-411.",
    ],
    conclusion: "Surveillance renforcée nécessaire.",
  },
  {
    ref: "#34-739",
    date: "13/08/2034",
    title: "Quartier Nord - Surveillance suspect",
    summary: "Surveillance du suspect Fallen dans le quartier Nord.",
    obs: [
      "Le sujet a été aperçu entrant dans un bâtiment abandonné.",
      "Caméra de surveillance montre des mouvements suspects la nuit.",
    ],
    conclusion: "Renforcer la patrouille et surveiller les issues.",
  },
  {
    ref: "#34-740",
    date: "14/08/2034",
    title: "Analyse secteur industriel",
    summary: "Évaluation des risques liés aux mouvements du suspect Fallen.",
    obs: [
      "Repérage de véhicules non identifiés près des entrepôts.",
      "Comportement erratique observé sur les caméras infrarouges.",
    ],
    conclusion: "Planifier une intervention discrète.",
  },
  {
    ref: "#34-741",
    date: "15/08/2034",
    title: "Rapport quartier Sud",
    summary: "Surveillance du suspect dans le quartier Sud.",
    obs: [
      "Sujet observé en train de fouiller les containers.",
      "Patrouilles de nuit renforcées.",
    ],
    conclusion: "Continuer la surveillance et informer les agents de garde.",
  },
  {
    ref: "#34-742",
    date: "16/08/2034",
    title: "Observation - Secteur central",
    summary: "Le suspect a été localisé près du parc central.",
    obs: [
      "Présence d’un véhicule inconnu.",
      "Aucune interaction avec les passants observée.",
    ],
    conclusion: "Maintenir la vigilance.",
  },
  {
    ref: "#34-743",
    date: "17/08/2034",
    title: "Rapport scène du crime",
    summary: "Analyse de la scène après un acte suspect.",
    obs: [
      "Tâches suspectes sur le sol.",
      "Objets déplacés selon le schéma X-12.",
    ],
    conclusion: "Classement confidentiel et enquête approfondie.",
  },
  {
    ref: "#34-744",
    date: "18/08/2034",
    title: "Rapport témoin clé",
    summary: "Interview d’un témoin proche du suspect.",
    obs: [
      "Témoin décrit le suspect comme méthodique et silencieux.",
      "Aucune information sur ses complices.",
    ],
    conclusion: "Vérifier les antécédents du témoin.",
  },
  {
    ref: "#34-745",
    date: "19/08/2034",
    title: "Analyse communication suspect",
    summary: "Analyse des communications interceptées.",
    obs: ["SMS cryptés.", "Appels à des heures irrégulières."],
    conclusion: "Décrypter les messages et suivre les contacts.",
  },
  {
    ref: "#34-746",
    date: "20/08/2034",
    title: "Patrouille de nuit",
    summary: "Surveillance des allées du secteur Nord.",
    obs: [
      "Sujet non localisé.",
      "Caméras opérationnelles mais absence de mouvement suspect.",
    ],
    conclusion: "Maintenir les patrouilles de nuit.",
  },
  {
    ref: "#34-747",
    date: "21/08/2034",
    title: "Rapport final",
    summary: "Synthèse des observations.",
    obs: ["Tous les secteurs surveillés.", "Aucune alerte majeure depuis 48h."],
    conclusion: "Rapport à classer et archivage.",
  },
];
reports.forEach((r) => {
  const div = document.createElement("div");
  div.classList.add("report");
  div.innerHTML = `
    <h3>${r.title}</h3>
    <p><strong>Réf :</strong> ${r.ref} | <strong>Date :</strong> ${r.date}</p>
    <p><strong>Agent :</strong> Capitaine Aaron Selina</p>
    <p><strong>Classification :</strong> Confidentiel</p>
    <hr>
    <h4>Résumé</h4>
    <p>${r.summary}</p>
    <h4>Observations</h4>
    <ul>${r.obs.map((o) => `<li>${o}</li>`).join("")}</ul>
    <h4>Conclusion</h4>
    <p>${r.conclusion}</p>
    <p class="signature">Signé : Aaron Selina</p>
  `;
  reportsContent.appendChild(div);
});
// ----------------- ORPHELINAT -----------------
const orphelinatIcon = document.getElementById("orphelinat-icon");
const orphelinatWindow = document.getElementById("orphelinat-window");
const orphelinatBtn = document.getElementById("orphelinat-btn");
const orphelinatInput = document.getElementById("orphelinat-pass");
const orphelinatError = document.getElementById("orphelinat-error");
const orphelinatData = document.getElementById("orphelinat-data");
const ORPHELINAT_PASSWORD = "golza";
orphelinatIcon.addEventListener("click", () => {
  orphelinatWindow.classList.remove("hidden");
  orphelinatInput.value = "";
  orphelinatError.textContent = "";
  orphelinatData.classList.add("hidden");
});
orphelinatBtn.addEventListener("click", () => {
  if (orphelinatInput.value === ORPHELINAT_PASSWORD) {
    orphelinatData.classList.remove("hidden");
    orphelinatError.textContent = "";
  } else {
    orphelinatError.textContent = "Mot de passe incorrect.";
    orphelinatData.classList.add("hidden");
  }
});
// --- MENU BURGER ---
const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// ----------------- CORBEILLE (Fonctionnalité Liste/Détail + RESTAURATION) -----------------

// Variables spécifiques à la Corbeille :
const trashWindow = document.getElementById("trash-window");
const trashContent = document.querySelector("#trash-window .trash-content");
const fileListView = document.getElementById("file-list-view");
const fileDetailView = document.getElementById("file-detail-view");
const detailTitle = document.getElementById("detail-title");
const detailDate = document.getElementById("detail-date");
const detailContent = document.getElementById("detail-content");
const backToListBtn = document.querySelector(".back-to-list-btn");
const restoreFileBtn = document.getElementById("restore-file-btn");

// VARIABLES DU LECTEUR DE FICHIER (MAINTENUES MAIS INUTILISÉES POUR L'INSTANT)
const fileReaderWindow = document.getElementById("file-reader-window");
const fileReaderTitle = document.getElementById("file-reader-title");
const fileReaderBody = document.getElementById("file-reader-body");

let currentFile = null;

// Liste des notes/fichiers avec des données pour la restauration
// NOTE : La "Note personnelle" a été supprimée pour simplifier.
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

// FONCTION DE LECTURE DE FICHIER (MAINTENUE MAIS NON UTILISÉE PAR LA CORBEILLE)
function openFileReader(file) {
  // S'assurer que les variables locales sont disponibles
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

// Fonction pour ajouter une icône au bureau
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

// Fonction pour afficher le détail du fichier
function showFileDetail(note) {
  currentFile = note;

  detailTitle.textContent = note.title;
  detailDate.textContent = note.date;
  detailContent.textContent = note.content;

  // Met à jour le bouton de restauration
  if (restoreFileBtn) {
    if (note.restored) {
      restoreFileBtn.textContent = "Fichier déjà restauré";
      restoreFileBtn.disabled = true;
    } else {
      restoreFileBtn.textContent = "Restaurer le fichier sur le bureau";
      restoreFileBtn.disabled = false;
    }
  }

  // Cache la liste et affiche le détail
  fileListView.classList.add("hidden");
  fileDetailView.classList.remove("hidden");
}

// Fonction pour retourner à la liste
function showFileList() {
  fileListView.classList.remove("hidden");
  fileDetailView.classList.add("hidden");
  currentFile = null;
}

// Fonction d'initialisation de la corbeille
function initTrash() {
  // 1. GÉNÉRATION DES FICHIERS DANS LA CORBEILLE
  if (trashContent) {
    trashContent.innerHTML = "";

    notes.forEach((note) => {
      // Créer l'élément de fichier UNIQUEMENT s'il n'a pas été restauré
      if (!note.restored) {
        const div = document.createElement("div");
        div.classList.add("trash-file");
        div.setAttribute("data-id", note.id);

        div.innerHTML = `
                <span class="trash-file-icon"><img src="${note.icon}" alt="Icone ${note.title}"></span>
                <span>${note.title}</span>
              `;

        // Ajout de l'événement de clic pour ouvrir le fichier
        div.addEventListener("click", () => {
          showFileDetail(note);
        });

        trashContent.appendChild(div);
      }
    });
  }

  // 2. GESTION DE LA RESTAURATION
  if (restoreFileBtn) {
    restoreFileBtn.addEventListener("click", () => {
      if (currentFile && !currentFile.restored) {
        // A. Ajouter l'icône sur le bureau
        addIconToDesktop(currentFile);

        // B. LOGIQUE SPÉCIFIQUE D'AJOUT DE CONTENU DANS LES FENÊTRES EXISTANTES
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

        // C. Finalisation de la restauration
        currentFile.restored = true;
        restoreFileBtn.textContent = "Fichier restauré !";
        restoreFileBtn.disabled = true;

        // Retirer l'élément de la liste visible
        const fileElement = document.querySelector(
          `.trash-file[data-id="${currentFile.id}"]`
        );
        if (fileElement) {
          fileElement.remove();
        }

        // Fermer la fenêtre de la corbeille
        if (trashWindow) {
          trashWindow.classList.add("hidden");
        }

        console.log(`Fichier "${currentFile.title}" restauré sur le bureau.`);
        currentFile = null;
      }
    });
  }

  // 3. BOUTON DE RETOUR
  if (backToListBtn) {
    backToListBtn.addEventListener("click", showFileList);
  }
}

// Appeler l'initialisation de la corbeille
initTrash();

// ----------------- CHAT SÉCURISÉ -----------------
const chatIcon = document.querySelector('.icon[data-window="chat"]');
const chatWindow = document.getElementById("chat-window");
const chatOutput = document.getElementById("chat-output");
const chatReplyBtn = document.getElementById("chat-reply-btn");

chatIcon.addEventListener("click", () => {
  const notification = chatIcon.querySelector(".notification");
  if (notification) {
    notification.style.display = "none";
  }
});

chatReplyBtn.addEventListener("click", () => {
  const replies = [
    {
      user: "> Aaron SELINA :<br>> &nbsp;&nbsp;Qui êtes-vous?",
      anonymous:
        "> ANONYME:<br>> &nbsp;&nbsp;Ce n'est pas ce qui est important. Posez-vous les bonnes questions, ne cherchez pas les mauvaises réponses.",
    },
    {
      user: "> Aaron SELINA :<br>> &nbsp;&nbsp;Si c'est toi, Fallen, sache qu'à la fin, tu seras à l'ombre.",
      anonymous:
        "> ANONYME:<br>> &nbsp;&nbsp;Je n'ai jamais cherché la lumière, Aaron. Et Fallen non plus.",
    },
    {
      user: "> Aaron SELINA :<br>> &nbsp;&nbsp;Comment as-tu accédé à cette messagerie cryptée?",
      anonymous:
        "> ANONYME:<br>> &nbsp;&nbsp;Des questions, encore des questions et toujours si loin des réponses...",
    },
    {
      user: "> Aaron SELINA :<br>> &nbsp;&nbsp; Quel est ton but? M'aider à résoudre cette enquête? Détourner mon attention?",
      anonymous:
        "> ANONYME:<br>> &nbsp;&nbsp;La justice Aaron, rien que la justice. La vraie, l'inévitable et douloureuse justice.",
    },
    {
      user: "> Aaron SELINA :<br>> &nbsp;&nbsp;Tuer, ce n'est pas la justice. C'est juste... tuer. Mais à quel prix? Et pour quelle raison?",
      anonymous: `> ANONYME:<br>> &nbsp;&nbsp; Les Rivières, les Montagnes et les Ancres. Vous ne pouvez pas comprendre, mais ça viendra. Inutile d'essayer retracer mon IP, vous ne trouverez rien et perdrez un temps précieux. Regardez plutôt les dossiers. Adieu, Aaron.`,
    },
  ];

  let currentStep = chatReplyBtn.dataset.step || 0;

  if (currentStep < replies.length) {
    const userReply = document.createElement("p");
    userReply.innerHTML = replies[currentStep].user;
    chatOutput.appendChild(userReply);
    chatOutput.appendChild(document.createElement("br"));

    setTimeout(() => {
      const anonymousReply = document.createElement("p");
      anonymousReply.innerHTML = replies[currentStep].anonymous;
      chatOutput.appendChild(anonymousReply);

      chatOutput.scrollTop = chatOutput.scrollHeight;

      currentStep++;
      chatReplyBtn.dataset.step = currentStep;

      if (currentStep >= replies.length) {
        chatReplyBtn.classList.add("hidden");
        const lostConnection = document.createElement("p");
        lostConnection.textContent = "> Connexion perdue.";
        lostConnection.style.color = "#ff4d4d";
        chatOutput.appendChild(lostConnection);
        chatOutput.scrollTop = chatOutput.scrollHeight;
      }
    }, 2000);
  }
});

// ----------------- TERMINAL DE DÉCRYPTAGE -----------------
const terminalInput = document.getElementById("terminal-input");
const terminalOutput = document.getElementById("terminal-output");
let history = [];

// Nouvelle structure de système de fichiers
const filesystem = {
  "README.txt": {
    type: "file",
    content: `
> FICHIER READ-ME<br>
> ---------------------<br>
Bienvenue dans votre terminal d’entraînement.<br><br>

Ce logiciel simule un terminal sécurisé, conçu pour vous familiariser avec la navigation et l’utilisation de commandes classiques dans un environnement informatique réaliste.<br><br>

Seule la commande "decrypt" a été inventée spécifiquement pour cette simulation. Elle permet d’accéder aux fichiers cryptés et apporte une dimension de sécurité et de réalisme à votre expérience.<br><br>

Votre mission, Agent SELINA, est de parcourir les répertoires et d’explorer les fichiers cryptés afin de rassembler les indices nécessaires pour accéder au dossier sécurisé situé sur votre bureau. Ce dossier contient une information cruciale et marque l’aboutissement de votre initiation.<br><br>

Cette immersion est conçue pour être instructive et captivante : elle ne divulgue pas l’histoire principale, mais vous offre un aperçu concret de votre environnement de travail simulé.<br><br>

Instructions de base :<br>
- Tapez "ls" pour lister les fichiers et dossiers du répertoire courant.<br>
- Tapez "cd <nom_du_dossier>" pour changer de répertoire.<br>
- Tapez "cd .." pour revenir au dossier précédent.<br>
- Utilisez "decrypt + "nom_du_fichier" pour ouvrir un fichier crypté et en découvrir le contenu.<br>
- Tapez "history" pour avoir un visuel clair de vos commandes déjà tapées.<br>
- Tapez "clear" pour nettoyer votre terminal sans annuler votre avancée.<br>
- Tapez "help" à tout moment pour afficher les commandes disponibles.<br>
- Utilisez "TAB" pour compléter automatiquement les noms de fichiers et gagner du temps.<br>
- Vous pouvez à tout moment réduire la fenêtre dans la barre des tâches ou bien la fermer sans perdre votre progression.<br>
- Vous pouvez également réduire ou augmenter la taille de la fenêtre afin d'en ouvrir plusieures en simultanées.<br>
- Attention cependant, si vous actualisez la page vous devrez recommencer car ce site ne contient pas de base de données réelles.<br>
- Explorez attentivement les fichiers et dossiers : chaque indice compte pour votre réussite.<br><br>

Astuces de navigation :<br> 
- N'hésitez pas à utiliser régulièrement la commande "clear" afin d'y voir plus clair.<br>
- Si vous ne savez plus où vous en êtes, la commande "ls" est votre amie. Elle vous permettra à chaque instant de savoir quels sont les fichiers auxquels vous avez accès.<br> 
- Pour plus de facilité, utilisez le bloc note disponible sur le bureau afin d'écrire les chemins pour certains dossiers et garder en mémoire les indices collectés.<br><br>

Bonne exploration, Agent SELINA.

`,
  },
  CONFIDENTIAL: {
    type: "dir",
    children: {
      PROJECT_CHIMERE: {
        type: "dir",
        children: {
          "file_001.dat": {
            type: "file",
            content: `
> FICHIER file_001.dat<br>
> ---------------------<br>
--------------------------------------------------------------------------------<br>
Rapport Confidentiel – Projet CHM-β<br>
Date : 03/09/2025<br>
Classification : STRICTEMENT INTERNE – Chimère<br>
Responsable : Dr. L. Fontaine<br>
Objet : Analyse intégrée des effets pléiotropiques du sérum expérimental CHM-β<br>
--------------------------------------------------------------------------------<br><br>

Résumé :<br>
Le sérum CHM-β, composé d’analogues peptidiques modifiés et de vecteurs lipidiques ciblant <br>
les membranes plasmatiques neuronales et musculaires, a été testé selon un protocole <br>
intraveineux séquentiel (0,05–0,12 mg/kg/j) sur un panel restreint d’individus soumis <br>
à un suivi multi-paramétrique.<br><br>

Les observations initiales montrent une potentialisation transitoire des capacités <br>
cognitives et motrices, corrélée à une activation simultanée des axes mitochondriaux, <br>
synaptiques et hématopoïétiques.<br><br>

La modélisation quantitative indique une relation non linéaire entre dosage cumulatif <br>
et intensité des effets :<br><br>

    E(t) = (E_max * [CHM-β]^n) / (K_d^n + [CHM-β]^n) * e^(-λ t)<br><br>

où E(t) représente la réponse physiologique composite, E_max le maximum théorique <br>
de stimulation, K_d la constante de liaison effective, n le coefficient de Hill, <br>
et λ le facteur d’inactivation cumulatif.<br><br>

--------------------------------------------------------------------------------<br><br>

Méthodologie :<br><br>

1. Administration et monitoring<br>
   - Injection intraveineuse quotidienne sur cycles de 5 à 7 jours.<br>
   - Surveillance continue des biomarqueurs hématologiques (HGB, HCT, WBC), <br>
     biochimiques (ATP, NAD⁺/NADH, ROS), et électrolytiques.<br><br>

2. Évaluation fonctionnelle<br>
   - Tests cognitifs standardisés (Stroop, N-Back, Trail Making Test) et mesures motrices <br>
     (temps de réaction, PPS_mean).<br>
   - Suivi via modèles adaptatifs :<br><br>
       R_c(t) = Σ Δt_i * k_αβ * (1 - σ_i / σ_max)<br><br>
     où R_c est le score composite de réactivité et k_αβ le coefficient d’adaptabilité <br>
     interindividuelle.<br><br>

3. Analyse moléculaire<br>
   - RT-qPCR ciblant gènes de régénération cellulaire et de plasticité neuronale :<br>
     HSP90, PGC-1α, mTOR, BDNF, SYN1, CREB.<br>
   - Imagerie fMRI/fNIRS et spectroscopie de résonance magnétique pour cartographie <br>
     de l’activation corticale et sous-corticale.<br><br>

--------------------------------------------------------------------------------<br><br>

Résultats préliminaires :<br><br>

- Stimulation cognitive et motrice : ΔR_c ≈ +17% ± 3,5%, corrélée à ΔATP et Δ(NAD⁺/NADH).<br>
- Activation synaptique et régénération cellulaire :<br><br>
       Δ_bio = ([HSP90] + [PGC-1α]) / ([CREB] + [SYN1]) ≈ 1,12 ± 0,04<br><br>

- Effets secondaires cumulatifs : dysrégulations électrolytiques, céphalées, <br>
  hyperexcitabilité, fatigue neuronale, avec escalade proportionnelle au nombre de cycles :<br><br>

       S(t) = S_0 + α Σ [CHM-β]_i^2<br><br>

  où S(t) représente le niveau de séquelles potentielles et α le coefficient d’accumulation.<br><br>

--------------------------------------------------------------------------------<br><br>

Discussion :<br>
CHM-β induit une potentialisation multi-axiale des fonctions humaines via la modulation<br>
synchronisée des axes mitochondriaux, neuronaux et musculaires.<br><br>

La fenêtre thérapeutique est étroite, et les modèles in silico (ΔΨm-γ₄₅, <br>
BioRéseau Adaptatif 3.2) prédisent une augmentation exponentielle des risques de séquelles <br>
au-delà du seuil critique [CHM-β]_crit.<br><br>

L’analyse longitudinale suggère que la plasticité induite est réversible à court terme <br>
mais peut devenir irréversible après répétitions prolongées.<br><br>

--------------------------------------------------------------------------------<br><br>

Conclusion :<br>
CHM-β demeure au stade expérimental dans le cadre strict du programme Chimère.<br><br>

Les effets observés confirment une potentialisation transitoire et multi-dimensionnelle <br>
des capacités humaines, accompagnée d’une escalade progressive des risques <br>
physiopathologiques.<br><br>

Les investigations complémentaires protéomiques, transcriptomiques et épigénétiques <br>
sont en cours afin de caractériser la dynamique cumulée et d’optimiser les protocoles <br>
sécuritaires pour les phases suivantes.<br><br>

--------------------------------------------------------------------------------<br>

`,
          },
          "UECS-2062-07-GOLZA-CLASSIFIED.txt": {
            type: "file",
            content: `
--------------------------------------------------------------------------------<br>
RAPPORT CONFIDENTIEL – UNITÉ D’ENQUÊTE CRIMINELLE SPÉCIALE (UECS)<br>
Numéro de dossier : UECS-2025-07-GOLZA<br>
Classification : STRICTEMENT SECRET-DÉFENSE<br>
Date : 03/09/2025<br>
Investigateur principal : Lt. D. Moreau<br>
Objet : Découverte et analyse des dépouilles calcinées – bord du lac, secteur Golza<br>
--------------------------------------------------------------------------------<br><br>

--- Notes de terrain initiales ---<br>
02/09/2025 – 05:42 : Signalement anonyme reçu via hotline UECS – “feu suspect, bord du lac, habitation isolée”.<br>
05:50 : Arrivée des équipes, périmètre sécurisé (code secteur : GOLZA-LAK-05).<br>
Observations : structure fortement calcinée, zones instables. Accès direct au salon central restreint.<br><br>

--------------------------------------------------------------------------------<br><br>

Résumé de la scène :<br>
- Deux corps découverts dans le salon principal, en position couchée l’un à côté de l’autre.<br>
- Sexe : masculin/féminin, âge estimé 40 45 ans.<br>
- Origine : apparente caucasienne.<br>
- Identification impossible : empreintes brûlées, dentition détruite.<br>
- Traumatismes : projectile crânien pour les deux sujets, calibre estimé 9 mm.<br>
- Séquence probable : victime masculine exécutée en premier, victime féminine suivie, feu déclenché après seconde exécution.<br>
- Résidus d’hydrocarbure léger détectés, propagation du feu accélérée par mobilier synthétique.<br><br>

--------------------------------------------------------------------------------<br><br>

Constatations médico-légales :<br><br>

1. **Individu 1 (Masculin)**<br>
   - Cause du décès : projectile crânien unique, entrée temporale droite, trajectoire transversale.<br>
   - Brûlures : 3e degré, ~80% de la surface corporelle.<br>
   - Résidus de poudre présents sur main droite – tir rapproché probable ou manipulation post-mortem.<br>
   - Autres lésions : contusions légères sur avant-bras, compatibles avec tentative de défense.<br>
   - Note enquêteur : position du corps et brûlures indiquent exécution et calfeutrage du corps avant incendie.<br><br>

2. **Individu 2 (Féminin)**<br>
   - Cause du décès : projectile crânien unique, trajectoire fronto-occipitale, calibre similaire.<br>
   - Brûlures : 3e degré, ~75% de la surface corporelle.<br>
   - Présence de fumée dans voies respiratoires supérieures – victime vivante lors du début du feu.<br>
   - Contusions périphériques compatibles avec résistance ou immobilisation.<br>
   - Note enquêteur : feu déclenché après seconde exécution pour masquer identité.<br><br>

3. **Analyse de la scène**<br>
   - Point d’origine probable : salon central.<br>
   - Absence de dispositifs incendiaires industriels.<br>
   - Pas d’empreintes exploitables, sols vitrifiés et murs carbonisés.<br>
   - Portes intactes – double serrure interne probable, indice de connaissance préalable.<br><br>

--------------------------------------------------------------------------------<br><br>

Balistique et preuves :<br>
- Projectiles récupérés : compatibles avec arme de poing semi-automatique, calibre 9 mm Luger.<br>
- Angle d’incidence et profondeur des lésions : exécution ciblée, mort quasi instantanée.<br>
- Aucun projectile secondaire ou fragmentation détectée.<br>
- Codes UECS internes : BAL-SEQ-09, TRAJ-CRAN-1<br><br>

--------------------------------------------------------------------------------<br><br>

Séquence événementielle estimée :<br>
- 05:30 – Exécution de l’individu masculin.<br>
- 05:33 – Exécution de l’individu féminin.<br>
- 05:35 – Début de l’incendie (résidus hydrocarbures confirmés).<br>
- 05:42 – Signalement anonyme reçu.<br><br>

--------------------------------------------------------------------------------<br><br>

Analyses complémentaires prioritaires :<br>
1. ADN comparatif (UECS/INTERPOL) et identification via mitochondries.<br>
2. Analyse isotopique des résidus de combustion pour reconstitution trajectoire feu.<br>
3. Vérification des images satellites et drones – rayon 5 km autour du lac.<br>
4. Coordination avec unité balistique nationale : reconstitution trajectoire, identification calibre exact.<br>
5. Triage des témoins locaux et recoupement signalements suspects 48h avant l’incendie.<br><br>

--------------------------------------------------------------------------------<br><br>

Commentaires confidentiels :<br>
- Les deux victimes ont été exécutées avec précision, laissant peu de traces exploitables.<br>
- Destruction des empreintes et dentitions suggère planification professionnelle.<br>
- Incendie déclenché intentionnellement pour masquer la séquence et retarder investigation.<br>
- Préparation et méthode : compatible avec niveau élevé d’expertise criminelle ou intervention externe.<br><br>

--------------------------------------------------------------------------------<br><br>

Conclusion préliminaire :<br>
- Meurtre suivi d’incendie volontaire.<br>
- Victimes exécutées dans un intervalle très court.<br>
- Identification impossible pour le moment ; ADN et analyses complémentaires en cours.<br>
- La scène indique préméditation et connaissance des procédures médico-légales.<br><br>

--------------------------------------------------------------------------------<br><br>

Notes de terrain supplémentaires :<br>
- Lt. D. Moreau : “Les brûlures et la séquence d’exécution indiquent une méthode froide et planifiée. Chaque détail de la scène a été intentionnellement organisé pour ralentir l’identification.”<br>
- Code interne UECS pour cette scène : GOLZA-LAKE-CASE-07-SECRET.<br>
- Rapport transmis à direction centrale et cellule spéciale “Feu & Balistique”.<br><br>

--------------------------------------------------------------------------------<br>
Fin du rapport – UECS<br>
Strictement confidentiel – Diffusion limitée aux unités d’enquête et autorité de défense<br>
--------------------------------------------------------------------------------<br>

`,
          },
          "SJ_Orphelinat_Incendie_2056_Secret.txt": {
            type: "file",
            content: `
--------------------------------------------------------------------------------<br>
RAPPORT CONFIDENTIEL – UNITÉ D’ENQUÊTE CRIMINELLE SPÉCIALE (UECS)<br>
Numéro de dossier : UECS-2056-04-SJ<br>
Classification : STRICTEMENT SECRET-DÉFENSE<br>
Date : 12/11/2056<br>
Investigateur principal : Capt. L. Vandenberg<br>
Objet : Incendie majeur – Orphelinat Saint-Joseph, secteur Golza<br>
--------------------------------------------------------------------------------<br><br>

--- Notes de terrain initiales ---<br>
12/11/2056 – 02:17 : Signalement incendie reçu via centrale UECS.<br>
02:25 : Arrivée des équipes, périmètre sécurisé (code secteur : SJ-INC-2056).<br>
Observations : bâtiment principal en feu, propagation rapide, toitures effondrées, fumée dense et toxique.<br>
Priorité : sauver survivants, identifier victimes, sécuriser preuves.<br><br>

--------------------------------------------------------------------------------<br><br>

Résumé de la scène :<br>
- Bâtiment : Orphelinat Saint-Joseph, structure bois et panneaux synthétiques, étage principal calciné.<br>
- Bilan humain :<br>
  - Enfants décédés : 10 (âges 9-13 ans)<br>
  - Enfants survivants avec brûlures légères : 6<br>
  - Enfants ayant fui et retrouvés : 9<br>
  - Enfants portés disparus : 5 (présumés morts)<br>
  - Personnel décédé : 3<br>
  - Gérante Roberta Calvini : indemne (non présente)<br><br>

--------------------------------------------------------------------------------<br><br>

**Tableau synthétique des victimes et survivants**<br>
--------------------------------------------------------------------------------<br>
| Nom / ID UECS        | Âge | Sexe | Statut             | Brûlures / Observations     | Notes UECS                  |<br>
|----------------------|-----|------|------------------|----------------------------|-----------------------------|<br>
| Enfant 1 – ID SJ01   | 10  | F    | Décédé            | 3e degré, asphyxie         | ADN prélevé                 |<br>
| Enfant 2 – ID SJ02   | 11  | M    | Décédé            | 3e degré                   | ADN prélevé                 |<br>
| Enfant 3 – ID SJ03   | 9   | F    | Décédé            | 3e degré                   | ADN prélevé                 |<br>
| Enfant 4 – ID SJ04   | 12  | M    | Décédé            | 3e degré                   | ADN prélevé                 |<br>
| Enfant 5 – ID SJ05   | 13  | F    | Décédé            | 3e degré                   | ADN prélevé                 |<br>
| Enfant 6 – ID SJ06   | 10  | M    | Décédé            | 3e degré                   | ADN prélevé                 |<br>
| Enfant 7 – ID SJ07   | 11  | F    | Décédé            | 3e degré                   | ADN prélevé                 |<br>
| Enfant 8 – ID SJ08   | 12  | M    | Décédé            | 3e degré                   | ADN prélevé                 |<br>
| Enfant 9 – ID SJ09   | 9   | F    | Décédé            | 3e degré                   | ADN prélevé                 |<br>
| Enfant 10 – ID SJ10  | 13  | M    | Décédé            | 3e degré                   | ADN prélevé                 |<br>
| Enfant 11 – Lucas Morel  | 12  | M | Survivant        | Brûlures légères           | Observation psychologique   |<br>
| Enfant 12 – Emma Dupuis  | 10  | F | Survivant        | Brûlures légères           | Observation psychologique   |<br>
| Enfant 13 – Noah Caron   | 11  | M | Survivant        | Brûlures légères           | Observation psychologique   |<br>
| Enfant 14 – Jade Lambert | 9   | F | Survivant        | Brûlures légères           | Observation psychologique   |<br>
| Enfant 15 – Théo Simon   | 13  | M | Survivant        | Brûlures légères           | Observation psychologique   |<br>
| Enfant 16 – Clara Richard| 12  | F | Survivant        | Brûlures légères           | Observation psychologique   |<br>
| Enfant 17 – Maxime Berger| 10  | M | Retrouvé fuite   | Intact                      | Traumatisme psychologique  |<br>
| Enfant 18 – Léa Fontaine  | 11  | F | Retrouvé fuite   | Intact                      | Traumatisme psychologique  |<br>
| Enfant 19 – Hugo Peltier | 12  | M | Retrouvé fuite   | Intact                      | Traumatisme psychologique  |<br>
| Enfants disparus ID SJ20-SJ24 | 9-13 | Mixte | Portés disparus | Non localisés             | Presumés morts             |<br>
| Personnel – Marc Leclerc | 34  | M | Décédé            | 3e degré, asphyxie        | Intervention héroïque      |<br>
| Personnel – Sonia Dumas  | 29  | F | Décédé            | 3e degré, asphyxie        | Intervention héroïque      |<br>
| Personnel – Henri Tréville | 42 | M | Décédé           | 3e degré, asphyxie        | Intervention héroïque      |<br>
| Gérante – Roberta Calvini  | 48 | F | Survivante       | Non présente              | Entièrement indemne        |<br><br>

--------------------------------------------------------------------------------<br><br>

**Séquence de l’incendie estimée (horaires UECS)**<br>
- 01:52 – Début probable du feu (analyse isotopique hydrocarbures)<br>
- 01:54 – Alarme incendie déclenchée<br>
- 01:55 – Tentative d’évacuation par personnel et enfants<br>
- 02:00 – Effondrement partiel des plafonds étage principal<br>
- 02:03 – 6 enfants évacués blessés légers<br>
- 02:05 – 14 enfants tentent de fuir, 9 retrouvés<br>
- 02:17 – Signalement UECS reçu, intervention sur site<br><br>

--------------------------------------------------------------------------------<br><br>

Analyses complémentaires et recommandations UECS :<br>
1. Vérification ADN et empreintes des enfants décédés et disparus.<br>
2. Expertise incendie UECS : résidus hydrocarbures, propagation feu.<br>
3. Interviews psychologiques des survivants et témoins.<br>
4. Recoupement vidéos et témoignages 48h avant incendie.<br>
5. Coordination avec service protection enfance et cellule incendies criminels.<br><br>

--------------------------------------------------------------------------------<br><br>

Commentaires confidentiels et notes de terrain :<br>
- Propagation rapide, accélérants volontaires suspectés.<br>
- Roberta Calvini (gérante) non présente, pas de blessures.<br>
- Niveau de préparation incendie indique connaissance préalable des issues et structures.<br>
- UECS recommande enquête approfondie pour cause criminelle possible.<br>
- Notes du capitaine : “Bilan tragique. Chaque détail du bâtiment a favorisé la propagation. Les enfants disparus nécessitent recherches immédiates. Priorité : ADN et recherche terrains alentours.”<br><br>

--------------------------------------------------------------------------------<br><br>

Conclusion préliminaire :<br>
- Incendie majeur, bilan humain : 10 enfants décédés, 6 survivants légers, 3 personnel décédé.<br>
- 5 enfants présumés morts ou disparus.<br>
- Identification en cours, analyses ADN et isotopiques prioritaires.<br>
- Circonstances indiquent préméditation ou négligence grave avec propagation accélérée.<br><br>

--------------------------------------------------------------------------------<br>
Fin du rapport – UECS<br>
Strictement confidentiel – Diffusion limitée aux unités d’enquête et autorités de défense<br>
--------------------------------------------------------------------------------<br>

`,
          },
          "protocol_evacuation.txt": {
            type: "file",
            content: `
> FICHIER protocol_evacuation.txt<br>
> -------------------------------<br>
> PROTOCOLE D'ÉVACUATION D'URGENCE - SUJET CHIMERE<br>
> En cas de compromission, priorité à l'extraction discrète du sujet 735. Toute trace de l'existence du projet doit être effacée. Point de rendez-vous secondaire : Ancien entrepôt (coordonnées : 34.782, -118.256).
`,
          },
        },
      },
      BACKUP: {
        type: "dir",
        children: {
          "backup_08182034.zip": {
            type: "file",
            content: `
> FICHIER backup_08182034.zip<br>
> ---------------------------<br>
> Archive de communication interceptée - 18/08/2034<br>
> Contient des fragments de messages entre le Commandement et l'Agent 313. Discussion sur une "anomalie de rapport" et une "fuite interne".<br>
> MOTS CLÉS : "Golza", "Chimère", "Agent Némésis".
`,
          },
        },
      },
      PROFILES: {
        type: "dir",
        children: {
          "agent_313_profile.info": {
            type: "file",
            content: `
> FICHIER agent_313_profile.info<br>
> ------------------------------<br>
> PROFIL D'AGENT : 313<br>
> Nom : Inconnu (Surnom : Le Corbeau)<br>
> Statut : Infiltré au sein du Commandement. Double agent.<br>
> Motivation : Vengeance (dossier Golza).<br>
> Contacts connus : Némésis, Fallen (indirect).
`,
          },
        },
      },
      "fallen_connection.txt": {
        type: "file",
        content: `
> FICHIER fallen_connection.txt<br>
> -----------------------------<br>
> CONNEXION : FALLEN & GOLZA<br>
> Le nom de code 'Golza' est une référence au directeur de l'orphelinat, Elias Vance.<br>
> Il a été le mentor de l'agent 313 et le gardien du sujet 'Fallen'.<br>
> Le projet Chimère utilisait l'orphelinat pour dissimuler ses recherches.<br>
> Elias Vance est la véritable identité derrière le nom 'Golza'.`,
      },
    },
  },
  SYSTEM_FILES: {
    type: "dir",
    children: {
      "data_fallen.db": {
        type: "file",
        content: `
> FICHIER data_fallen.db<br>
> ----------------------<br>
> BASE DE DONNÉES - SUJET FALLEN (ID: 735)<br>
> Nom : Inconnu<br>
> Âge supposé : 15 ans (au moment de la disparition)<br>
> Capacités : Régénération cellulaire accélérée, tolérance élevée à la douleur, modifications génétiques secondaires.<br>
> Statut : En fuite (depuis 10/08/2021).<br>
> Dernière localisation connue : Quartier Nord (Signal faible le 20/08/2034).
`,
      },
      "comms_nemesis_313.enc": {
        type: "file",
        content: `
> FICHIER comms_nemesis_313.enc<br>
> -----------------------------<br>
> Communication sécurisée interceptée :<br>
> Némésis: "La livraison est prête. Le paquet sera à l'endroit convenu à 03h00. Ne ratez pas ça."<br>
> 313: "Compris. Le Commandement est sur nos traces. Prépare-toi à l'extraction finale."<br>
> Némésis: "J'ai ma propre sortie. Concentre-toi sur Fallen. Il est leur dernière chance."
`,
      },
      "report_chimere_status.txt": {
        type: "file",
        content: `
> FICHIER report_chimere_status.txt<br>
> ---------------------------------<br>
> RAPPORT DE STATUT - PROJET CHIMERE (CLASSIFIÉ TOP SECRET)<br>
> Date : 22/08/2034<br>
> Statut : Compromis. Agent Némésis a volé les données critiques. Le sujet 735 n'a pas été sécurisé.<br>
> Recommandation : Activer le protocole "Phoenix" pour effacer toute implication de l'organisation.
`,
      },
      "plan_extraction_fallen.map": {
        type: "file",
        content: `
> FICHIER plan_extraction_fallen.map<br>
> ---------------------------------<br>
> PLAN D'EXTRACTION - SUJET FALLEN (ÉCHEC)<br>
> Route principale bloquée par des unités de Commandement. Route secondaire via les égouts sous le secteur industriel. Échec de la coordination avec l'agent 313. Fallen a changé d'itinéraire au dernier moment.
`,
      },
    },
  },
};

let currentPath = [];

function getCurrentDir() {
  let dir = filesystem;
  for (const subDir of currentPath) {
    if (dir[subDir] && dir[subDir].type === "dir" && dir[subDir].children) {
      dir = dir[subDir].children;
    } else {
      return null;
    }
  }
  return dir;
}

function updatePrompt() {
  const promptSpan = document.querySelector(".terminal-input-line span");
  promptSpan.textContent = `C:\\${currentPath.join("\\")}\\>`;
}

document.addEventListener("DOMContentLoaded", () => {
  updatePrompt();
});

terminalInput.addEventListener("keydown", (event) => {
  const commandLine = terminalInput.value.trim();
  const [cmd, ...args] = commandLine.split(" ");
  const currentDir = getCurrentDir();

  if (event.key === "Tab") {
    event.preventDefault(); // Empêche le comportement par défaut de la tabulation

    if (!currentDir) {
      return;
    }

    const partialInput = args.join(" ");
    const potentialMatches = Object.keys(currentDir).filter((name) =>
      name.toLowerCase().startsWith(partialInput.toLowerCase())
    );

    if (potentialMatches.length === 1) {
      // Complète l'entrée avec le nom complet
      const fullCommand =
        cmd + (cmd.length > 0 ? " " : "") + potentialMatches[0];
      terminalInput.value = fullCommand;
    } else if (potentialMatches.length > 1) {
      // Affiche toutes les options
      terminalOutput.innerHTML += `<p>C:\\${currentPath.join(
        "\\"
      )}\\> ${commandLine}</p>`;
      terminalOutput.innerHTML += "<p>> Options disponibles :</p>";
      let listHtml = "";
      for (const name of potentialMatches) {
        const item = currentDir[name];
        if (item.type === "dir") {
          listHtml += `<p style="color: #4da6ff;">> DIR : ${name}</p>`;
        } else {
          listHtml += `<p>> FILE: ${name}</p>`;
        }
      }
      terminalOutput.innerHTML += listHtml;
      terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }
    return;
  }

  if (event.key === "Enter") {
    history.push(commandLine);
    terminalOutput.innerHTML += `<p>C:\\${currentPath.join(
      "\\"
    )}\\> ${commandLine}</p>`;

    const lowerCmd = cmd.toLowerCase();
    const lowerArgs = args.map((arg) => arg.toLowerCase());
    const firstArg = lowerArgs[0];

    if (!currentDir) {
      terminalOutput.innerHTML += `<p>ERREUR : Le chemin spécifié est introuvable.</p>`;
    } else if (lowerCmd === "ls") {
      terminalOutput.innerHTML += `<p style="color: #72ff54;">[SYSTEM] Command accepted: ls</p>`;
      let listHtml = "<p>> Contenu du répertoire :</p>";
      for (const name in currentDir) {
        const item = currentDir[name];
        if (item.type === "dir") {
          listHtml += `<p style="color: #4da6ff;">> DIR : ${name}</p>`;
        } else {
          listHtml += `<p>> FILE: ${name}</p>`;
        }
      }
      terminalOutput.innerHTML += listHtml;
    } else if (lowerCmd === "cd") {
      if (firstArg === "..") {
        if (currentPath.length > 0) {
          currentPath.pop();
          updatePrompt();
          terminalOutput.innerHTML += `<p style="color: #72ff54;">[SYSTEM] Command accepted: cd ..</p>`;
        } else {
          terminalOutput.innerHTML += `<p>ERREUR : Vous êtes déjà à la racine du système.</p>`;
        }
      } else {
        const match = Object.keys(currentDir).find(
          (name) => name.toLowerCase() === firstArg.toLowerCase()
        );
        if (match && currentDir[match].type === "dir") {
          currentPath.push(match);
          updatePrompt();
          terminalOutput.innerHTML += `<p style="color: #72ff54;">[SYSTEM] Accessing '${match}'...</p>`;
        } else if (match && currentDir[match].type === "file") {
          terminalOutput.innerHTML += `<p>ERREUR : '${match}' est un fichier. Utilisez la commande 'decrypt' pour lire son contenu.</p>`;
        } else {
          terminalOutput.innerHTML += `<p>ERREUR : Le chemin spécifié est introuvable.</p>`;
        }
      }
    } else if (lowerCmd === "decrypt") {
      const match = Object.keys(currentDir).find(
        (name) => name.toLowerCase() === firstArg.toLowerCase()
      );
      if (match && currentDir[match].type === "file") {
        terminalOutput.innerHTML += `<p style="color: #ffff54;">[DECRYPTING] ${match}... Please wait...</p>`;
        setTimeout(() => {
          terminalOutput.innerHTML += currentDir[match].content;
          terminalOutput.scrollTop = terminalOutput.scrollHeight;
        }, 1000); // Délai de 1 seconde
      } else if (match && currentDir[match].type === "dir") {
        terminalOutput.innerHTML += `<p>ERREUR : '${match}' est un dossier. Utilisez la commande 'cd' pour y accéder.</p>`;
      } else {
        terminalOutput.innerHTML += `<p>ERREUR : Fichier '${firstArg}' introuvable ou non décryptable.</p>`;
      }
    } else if (lowerCmd === "help") {
      terminalOutput.innerHTML += `
                <p>> Commandes disponibles :</p>
                <p>> - ls : Lister les fichiers et dossiers du répertoire courant.</p>
                <p>> - cd [nom_du_dossier] : Changer de répertoire.</p>
                <p>> - cd .. : Remonter au répertoire parent.</p>
                <p>> - decrypt [nom_de_fichier] : Décrypter un fichier spécifique.</p>
                <p>> - history : Afficher l'historique des commandes.</p>
                <p>> - clear : Effacer l'historique du terminal.</p>
            `;
    } else if (lowerCmd === "history") {
      terminalOutput.innerHTML += `<p>> Historique des commandes :</p>`;
      history.forEach((cmd, index) => {
        terminalOutput.innerHTML += `<p>${index + 1}: ${cmd}</p>`;
      });
    } else if (lowerCmd === "clear") {
      terminalOutput.innerHTML = `
                <p>> Terminal V3.1. Prêt.</p>
                <p>> Tapez 'ls' pour lister les fichiers et dossiers.</p>
                <p>> Tapez 'help' pour les commandes.</p>
                <br>
            `;
    } else {
      terminalOutput.innerHTML += `<p>ERREUR : Commande non reconnue. Tapez 'help' pour la liste des commandes.</p>`;
    }

    terminalInput.value = "";
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }
});

// Ajout du listener pour le bouton "Envoyer"
const sendBtn = document.getElementById("send-btn");
if (sendBtn) {
  sendBtn.addEventListener("click", () => {
    const event = new KeyboardEvent("keydown", {
      key: "Enter",
    });
    document.getElementById("terminal-input").dispatchEvent(event);
  });
}

// ----------------- FONCTIONNALITÉ GLISSER-DÉPOSER DES FENÊTRES -----------------
let activeWindow = null;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

function dragStart(e) {
  // Détermine la fenêtre cliquée via l'en-tête
  const header = e.target.closest(".window-header");
  if (!header) return;
  activeWindow = header.closest(".window");

  // Met la fenêtre active au premier plan
  document.querySelectorAll(".window").forEach((win) => {
    win.style.zIndex = "200";
  });
  activeWindow.style.zIndex = "300";

  if (e.type === "touchstart") {
    initialX = e.touches[0].clientX;
    initialY = e.touches[0].clientY;
  } else {
    initialX = e.clientX;
    initialY = e.clientY;
  }

  // Stocke la position initiale de la fenêtre
  const rect = activeWindow.getBoundingClientRect();
  xOffset = rect.left;
  yOffset = rect.top;

  // Ajoute les listeners de déplacement et de fin de glisser-déposer sur le corps du document
  document.addEventListener("mouseup", dragEnd);
  document.addEventListener("mousemove", drag);
  document.addEventListener("touchend", dragEnd);
  document.addEventListener("touchmove", drag);
}

function drag(e) {
  if (!activeWindow) return;
  e.preventDefault();

  const currentX = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
  const currentY = e.type === "touchmove" ? e.touches[0].clientY : e.clientY;

  const dx = currentX - initialX;
  const dy = currentY - initialY;

  // Applique les nouvelles coordonnées
  activeWindow.style.left = `${xOffset + dx}px`;
  activeWindow.style.top = `${yOffset + dy}px`;

  // S'assure de réinitialiser le transform pour éviter les conflits de styles
  activeWindow.style.transform = "none";
}

function dragEnd() {
  // Retire les listeners pour arrêter le déplacement
  document.removeEventListener("mouseup", dragEnd);
  document.removeEventListener("mousemove", drag);
  document.removeEventListener("touchend", dragEnd);
  document.removeEventListener("touchmove", drag);

  activeWindow = null;
}

// Ajoute un listener de départ sur les en-têtes des fenêtres
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

  startX = e.clientX;
  startY = e.clientY;
  startWidth = resizeWindow.offsetWidth;
  startHeight = resizeWindow.offsetHeight;
  startLeft = resizeWindow.offsetLeft;
  startTop = resizeWindow.offsetTop;

  document.addEventListener("mousemove", resize);
  document.addEventListener("mouseup", resizeEnd);
}

function resize(e) {
  if (!resizeActive) return;

  const dx = e.clientX - startX;
  const dy = e.clientY - startY;

  let newWidth = startWidth;
  let newHeight = startHeight;
  let newLeft = startLeft;
  let newTop = startTop;

  // Redimensionnement horizontal
  if (resizeDirection.includes("right")) {
    newWidth = startWidth + dx;
  } else if (resizeDirection.includes("left")) {
    newWidth = startWidth - dx;
    newLeft = startLeft + dx;
  }

  // Redimensionnement vertical
  if (resizeDirection.includes("bottom")) {
    newHeight = startHeight + dy;
  } else if (resizeDirection.includes("top")) {
    newHeight = startHeight - dy;
    newTop = startTop + dy;
  }

  // Applique les nouvelles dimensions et position
  resizeWindow.style.width = `${newWidth}px`;
  resizeWindow.style.height = `${newHeight}px`;
  resizeWindow.style.left = `${newLeft}px`;
  resizeWindow.style.top = `${newTop}px`;
}

function resizeEnd() {
  resizeActive = false;
  document.removeEventListener("mousemove", resize);
  document.removeEventListener("mouseup", resizeEnd);
}

handles.forEach((handle) => {
  handle.addEventListener("mousedown", resizeStart);
});

// ----------------- FONCTIONNALITÉ DES BOUTONS DE CONTRÔLE -----------------
const minimizeButtons = document.querySelectorAll(".minimize-btn");
const maximizeButtons = document.querySelectorAll(".maximize-btn");
const taskbarIcons = document.getElementById("taskbar-icons");

minimizeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
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

      // Ajoute le listener pour restaurer la fenêtre
      taskbarItem.addEventListener("click", () => {
        window.classList.remove("hidden");
        // Met au premier plan quand elle est restaurée
        document
          .querySelectorAll(".window")
          .forEach((w) => w.classList.remove("active"));
        window.classList.add("active");
        taskbarItem.remove();
      });
    }
  });
});

// ----------------- JEU DE MORPION -----------------
const gameBoard = document.getElementById("game-board");
const cells = document.querySelectorAll(".cell");
const gameStatus = document.getElementById("game-status");
const resetButton = document.getElementById("reset-game-btn");

let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function handleCellClick(e) {
  const cell = e.target;
  const index = parseInt(cell.dataset.index);

  if (board[index] !== "" || !gameActive || currentPlayer !== "X") {
    return;
  }

  board[index] = "X";
  cell.textContent = "X";

  if (checkWinner()) {
    return;
  }

  currentPlayer = "O";
  gameStatus.textContent = `Au tour de l'ordinateur (O)`;
  setTimeout(computerMove, 500); // Laisse un petit délai pour simuler une "réflexion" de l'IA
}

function computerMove() {
  if (!gameActive) return;

  // Stratégie de l'IA
  let move = findWinningMove("O");
  if (move === -1) {
    move = findWinningMove("X");
  }
  if (move === -1) {
    move = findBestSpot();
  }

  if (move !== -1) {
    board[move] = "O";
    cells[move].textContent = "O";

    if (checkWinner()) {
      return;
    }
  }

  currentPlayer = "X";
  gameStatus.textContent = `Au tour de X`;
}

function findWinningMove(player) {
  for (let i = 0; i < winningConditions.length; i++) {
    const [a, b, c] = winningConditions[i];
    const line = [board[a], board[b], board[c]];
    if (
      line.filter((val) => val === player).length === 2 &&
      line.filter((val) => val === "").length === 1
    ) {
      return winningConditions[i][line.indexOf("")];
    }
  }
  return -1;
}

function findBestSpot() {
  const emptyCells = board
    .map((val, index) => (val === "" ? index : null))
    .filter((val) => val !== null);

  // Priorité au centre
  if (emptyCells.includes(4)) {
    return 4;
  }

  // Priorité aux coins
  const corners = [0, 2, 6, 8];
  const availableCorners = corners.filter((corner) =>
    emptyCells.includes(corner)
  );
  if (availableCorners.length > 0) {
    return availableCorners[
      Math.floor(Math.random() * availableCorners.length)
    ];
  }

  // Si rien d'autre, une case aléatoire
  if (emptyCells.length > 0) {
    return emptyCells[Math.floor(Math.random() * emptyCells.length)];
  }

  return -1;
}

function checkWinner() {
  let roundWon = false;
  let winningPlayer = null;

  for (let i = 0; i < winningConditions.length; i++) {
    const condition = winningConditions[i];
    const a = board[condition[0]];
    const b = board[condition[1]];
    const c = board[condition[2]];

    if (a === "" || b === "" || c === "") {
      continue;
    }

    if (a === b && b === c) {
      roundWon = true;
      winningPlayer = a;
      break;
    }
  }

  if (roundWon) {
    gameStatus.textContent = `Le joueur ${winningPlayer} a gagné !`;
    gameActive = false;
    return true;
  }

  if (!board.includes("")) {
    gameStatus.textContent = "Match nul !";
    gameActive = false;
    return true;
  }

  return false;
}

function resetGame() {
  gameActive = true;
  currentPlayer = "X";
  board = ["", "", "", "", "", "", "", "", ""];
  gameStatus.textContent = `Au tour de ${currentPlayer}`;
  cells.forEach((cell) => {
    cell.textContent = "";
  });
}

cells.forEach((cell) => cell.addEventListener("click", handleCellClick));
resetButton.addEventListener("click", resetGame);

// ----------------- JEU DE SNAKE (version isolée) -----------------
(function () {
  const snakeWindow = document.getElementById("snake-window");
  if (!snakeWindow) return;

  const canvas = snakeWindow.querySelector("#game-canvas");
  const ctx = canvas.getContext("2d");
  const startBtn = snakeWindow.querySelector("#start-snake-btn");
  const scoreDisplay = snakeWindow.querySelector("#score");
  const gameMessage = snakeWindow.querySelector("#game-message");

  const gridSize = 20;
  const tileCount = canvas.width / gridSize;

  let snake;
  let food;
  let score;
  let dx;
  let dy;
  let gameLoop;
  let gameActive = false;

  function resetSnakeGame() {
    snake = [{ x: 10 * gridSize, y: 10 * gridSize }];
    food = {};
    score = 0;
    dx = gridSize;
    dy = 0;
    gameActive = true;
    scoreDisplay.textContent = 0;
    gameMessage.classList.add("hidden");
    startBtn.textContent = "Recommencer";
    placeFood();
    document.addEventListener("keydown", handleKeyDown);
  }

  // Nouvelle fonction pour gérer le changement de direction
  function changeDirection(direction) {
    if (!gameActive) return;
    const goingUp = dy === -gridSize;
    const goingDown = dy === gridSize;
    const goingRight = dx === gridSize;
    const goingLeft = dx === -gridSize;

    switch (direction) {
      case "left":
        if (!goingRight) {
          dx = -gridSize;
          dy = 0;
        }
        break;
      case "up":
        if (!goingDown) {
          dx = 0;
          dy = -gridSize;
        }
        break;
      case "right":
        if (!goingLeft) {
          dx = gridSize;
          dy = 0;
        }
        break;
      case "down":
        if (!goingUp) {
          dx = 0;
          dy = gridSize;
        }
        break;
    }
  }

  // Écouteurs d'événements pour les boutons
  document.getElementById("up-btn").addEventListener("click", () => {
    changeDirection("up");
  });

  document.getElementById("down-btn").addEventListener("click", () => {
    changeDirection("down");
  });

  document.getElementById("left-btn").addEventListener("click", () => {
    changeDirection("left");
  });

  document.getElementById("right-btn").addEventListener("click", () => {
    changeDirection("right");
  });

  function placeFood() {
    food.x = Math.floor(Math.random() * tileCount) * gridSize;
    food.y = Math.floor(Math.random() * tileCount) * gridSize;
  }

  function draw() {
    ctx.fillStyle = "#0d0d0d";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawSnake();
    drawFood();
  }

  function drawSnake() {
    ctx.fillStyle = "#00ff00";
    snake.forEach((segment) => {
      ctx.fillRect(segment.x, segment.y, gridSize, gridSize);
      ctx.strokeStyle = "#0d0d0d";
      ctx.strokeRect(segment.x, segment.y, gridSize, gridSize);
    });
  }

  function drawFood() {
    ctx.fillStyle = "var(--neon-red)";
    ctx.fillRect(food.x, food.y, gridSize, gridSize);
  }

  function update() {
    if (!gameActive) return;
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
      score++;
      scoreDisplay.textContent = score;
      placeFood();
    } else {
      snake.pop();
    }

    if (checkCollision()) {
      gameActive = false;
      clearInterval(gameLoop);
      gameMessage.textContent = `Partie terminée ! Score final : ${score}`;
      gameMessage.classList.remove("hidden");
      startBtn.textContent = "Recommencer";
      document.removeEventListener("keydown", handleKeyDown);
    }
  }

  function checkCollision() {
    const head = snake[0];
    if (
      head.x < 0 ||
      head.x >= canvas.width ||
      head.y < 0 ||
      head.y >= canvas.height
    ) {
      return true;
    }
    for (let i = 1; i < snake.length; i++) {
      if (head.x === snake[i].x && head.y === snake[i].y) {
        return true;
      }
    }
    return false;
  }

  // La fonction de gestion des touches appelle maintenant la nouvelle fonction
  function handleKeyDown(e) {
    e.preventDefault();
    const keyPressed = e.key.toLowerCase();
    switch (keyPressed) {
      case "arrowleft":
        changeDirection("left");
        break;
      case "arrowup":
        changeDirection("up");
        break;
      case "arrowright":
        changeDirection("right");
        break;
      case "arrowdown":
        changeDirection("down");
        break;
    }
  }

  function startGame() {
    if (gameActive) return;
    resetSnakeGame();
    gameLoop = setInterval(() => {
      update();
      draw();
    }, 150);
  }

  startBtn.addEventListener("click", () => {
    if (!gameActive) {
      startGame();
      gameMessage.textContent =
        "Utilisez les flèches du clavier pour vous déplacer.";
      gameMessage.classList.remove("hidden");
    }
  });
})();

// ----------------- CALCULATRICE -----------------
(function () {
  const calculatorWindow = document.getElementById("calculator-window");
  if (!calculatorWindow) return;

  const display = calculatorWindow.querySelector("#calculator-display");
  const buttons = calculatorWindow.querySelector(".calculator-buttons");

  let currentInput = "";
  let operator = null;
  let firstOperand = null;
  let resetDisplay = false;

  function updateDisplay(value) {
    if (value.length > 10) {
      display.textContent = "Error";
      currentInput = "";
    } else {
      display.textContent = value;
    }
  }

  function handleNumber(number) {
    if (resetDisplay) {
      currentInput = number;
      resetDisplay = false;
    } else {
      currentInput += number;
    }
    updateDisplay(currentInput);
  }

  function handleDecimal() {
    if (resetDisplay) {
      currentInput = "0.";
      resetDisplay = false;
    } else if (!currentInput.includes(".")) {
      currentInput += ".";
    }
    updateDisplay(currentInput);
  }

  function handleOperator(nextOperator) {
    if (operator && resetDisplay) {
      operator = nextOperator;
      return;
    }

    const inputValue = parseFloat(currentInput);

    if (firstOperand === null) {
      firstOperand = inputValue;
    } else if (operator) {
      const result = operate(firstOperand, operator, inputValue);
      updateDisplay(String(result));
      firstOperand = result;
    }

    operator = nextOperator;
    resetDisplay = true;
  }

  function handleEquals() {
    if (operator === null || resetDisplay) {
      return;
    }

    const inputValue = parseFloat(currentInput);
    const result = operate(firstOperand, operator, inputValue);
    updateDisplay(String(result));

    firstOperand = null;
    operator = null;
    resetDisplay = true;
  }

  function operate(a, op, b) {
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "x":
        return a * b;
      case "/":
        return a / b;
      case "%":
        return a % b;
      default:
        return b;
    }
  }

  function handleClear() {
    currentInput = "";
    firstOperand = null;
    operator = null;
    updateDisplay("0");
  }

  function handleToggleSign() {
    if (currentInput) {
      currentInput = String(parseFloat(currentInput) * -1);
      updateDisplay(currentInput);
    }
  }

  buttons.addEventListener("click", (event) => {
    const target = event.target;
    if (!target.classList.contains("calc-btn")) return;

    if (target.classList.contains("num-btn")) {
      handleNumber(target.textContent);
    } else if (target.classList.contains("op-btn")) {
      const op = target.textContent;
      if (op === "C") {
        handleClear();
      } else if (op === "±") {
        handleToggleSign();
      } else {
        handleOperator(op);
      }
    } else if (target.classList.contains("equals-btn")) {
      handleEquals();
    }
  });
})();

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

// ----------------------------------------------------
// ----------------- GLISSER-DÉPOSER UNIVERSEL (PC & TACTILE) -----------------
// ----------------------------------------------------

// ATTENTION : Pour que cela fonctionne, assurez-vous que :
// 1. Vos fenêtres (.window) ont la propriété CSS 'position: absolute;' ou 'position: fixed;'.
// 2. La barre de titre que l'utilisateur va glisser a la classe '.window-header' (ou modifiez le sélecteur à la fin).

// Variables de gestion du glissement
let activeDrag = {
  element: null, // L'élément en cours de déplacement (la fenêtre)
  initialX: 0,
  initialY: 0,
  xOffset: 0, // Décalage du clic par rapport au bord de l'élément
  yOffset: 0,
  currentX: 0,
  currentY: 0,
};

// --- FONCTION UTILITAIRE CLÉ ---
// Harmonise les coordonnées entre la souris et le tactile.
function getEventCoords(e) {
  // Si c'est un événement tactile, on prend le premier doigt (touches[0])
  if (e.touches && e.touches.length) {
    return e.touches[0];
  }
  // Sinon, c'est un événement de souris
  return e;
}

// --- Démarrer le Glisser (Start Drag) ---
function startDrag(e) {
  // Empêche le comportement par défaut (ex: défilement sur tactile, sélection de texte sur PC)
  e.preventDefault();

  // S'assure que c'est le bouton gauche de la souris (pour PC)
  if (e.type === "mousedown" && e.button !== 0) return;

  // 1. Définir l'élément à glisser (la fenêtre parente de l'en-tête)
  const windowElement = e.target.closest(".window");
  if (!windowElement) return;

  activeDrag.element = windowElement;

  // Récupérer la position actuelle de la fenêtre
  const rect = activeDrag.element.getBoundingClientRect();
  activeDrag.currentX = rect.left;
  activeDrag.currentY = rect.top;

  const event = getEventCoords(e);

  // Position initiale du curseur/doigt
  activeDrag.initialX = event.clientX;
  activeDrag.initialY = event.clientY;

  // Calculer le décalage pour que la fenêtre ne "saute" pas lors du clic
  activeDrag.xOffset = activeDrag.currentX - activeDrag.initialX;
  activeDrag.yOffset = activeDrag.currentY - activeDrag.initialY;

  // 2. Attacher les fonctions de déplacement et de fin au DOCUMENT
  // Cela permet de ne pas perdre le glissement
  document.addEventListener("mousemove", onDrag);
  document.addEventListener("touchmove", onDrag);
  document.addEventListener("mouseup", endDrag);
  document.addEventListener("touchend", endDrag);

  activeDrag.element.classList.add("is-dragging");

  // Mettre la fenêtre au premier plan (z-index)
  activeDrag.element.style.zIndex = getHighestZIndex() + 1;
}

// --- Déplacer l'Élément (On Drag) ---
function onDrag(e) {
  if (!activeDrag.element) return;

  e.preventDefault();

  const event = getEventCoords(e);

  // Nouveau calcul de position : Position du curseur + Décalage initial
  let newX = event.clientX + activeDrag.xOffset;
  let newY = event.clientY + activeDrag.yOffset;

  // Application de la nouvelle position via top/left
  activeDrag.element.style.left = newX + "px";
  activeDrag.element.style.top = newY + "px";
}

// --- Terminer le Glisser (End Drag) ---
function endDrag(e) {
  if (!activeDrag.element) return;

  // 1. Retirer les écouteurs d'événements du DOCUMENT
  document.removeEventListener("mousemove", onDrag);
  document.removeEventListener("touchmove", onDrag);
  document.removeEventListener("mouseup", endDrag);
  document.removeEventListener("touchend", endDrag);

  activeDrag.element.classList.remove("is-dragging");

  // 2. Réinitialiser la structure de drag
  activeDrag.element = null;
}

// --- UTILITIES : Pour mettre la fenêtre au premier plan ---
function getHighestZIndex() {
  return Array.from(document.querySelectorAll(".window")).reduce(
    (max, windowEl) => {
      // ParseInt permet d'obtenir le z-index actuel (ou 0 si non défini)
      const zIndex = parseInt(windowEl.style.zIndex) || 0;
      return Math.max(max, zIndex);
    },
    100
  ); // Base de z-index pour les fenêtres
}

// ----------------------------------------------------
// 6. Point d'entrée : Attacher les Écouteurs aux EN-TÊTES DE FENÊTRES
// ----------------------------------------------------
// SÉLECTEUR CLÉ : Ciblez tous les éléments qui servent de poignée pour glisser une fenêtre.
document.querySelectorAll(".window-header").forEach((handle) => {
  // Attacher MOUSE (PC) et TOUCH (Mobile) au même gestionnaire de DÉMARRAGE
  handle.addEventListener("mousedown", startDrag);
  handle.addEventListener("touchstart", startDrag);
});
