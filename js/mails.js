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
