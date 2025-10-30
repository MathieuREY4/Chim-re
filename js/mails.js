// ============== CONFIG ==============
const APPLY_QUARANTINE = false;
const SCAN_TOTAL_MS = 10000;
const ENABLE_SOUNDS = true;

// ------------------ Données mails ------------------
const mails = {
  inbox: {
    1: {
      sender: "Admin",
      date: "03/09/2025, 14:00",
      subject: "Mise à jour sur Fallen",
      body: "Agent Selina, Vous trouverez sur votre bureau plusieurs onglets utilisables.<br><br> - L'onglet 'Rapports' Vous donneras accès à l'avancée de l'enquête.<br><br> - L'onglet 'Boite mail' vous donnera certaines informations importantes pour votre enquête.<br><br> - L'onglet 'Photos' contient des images liées à l'enquête que vous devrait glisser/déposer dans l'onglet 'Analyse' afin de procéder aux retouches.<br><br> - L'onglet 'Orphelinat' est un fichier sécurisé que vous devez réussir à ouvrir en trouvant le bon mot de passe.<br><br> - L'onglet 'corbeille' contient peut-être des choses intéressantes. Ou pas.<br><br> - L'onglet 'Chat sécurisé' sera votre point de départ idéal pour débuter votre immersion. Il simulera un échange dans lequel vous aurez seulement besoin de cliquer sur 'Répondre' lorsque votre interlocuteur aura répondu.<br><br> - L'onglet 'Carte de la ville' vous aidera à mieux situer l'enquête et vous donnera probablement quelques pistes.<br><br> - l'onglet 'Terminal' sera votre meilleur ami pour résoudre l'enquête. Il vous permettra de naviguer dans les fichiers afin de récolter de précieux indices.<br><br> - L'onglet 'Notes' contient un bloc note ordinaire afin de faciliter votre immersion et de pouvoir écrire vos notes tout au long de votre enquête.<br><br> - Les onglets 'Morpion' et 'Snake' Sont simplement là pour vous divertir un peu lors de vos pauses.<br><br> - l'onglet calculatrice vous aidera à... réviser vos multiplications?<br><br> - L'onglet 'Analyse' vous permettra de retoucher les images importées directement depuis l'onglet 'Photos'.<br><br> - L'onglet 'Eteindre' vous déconnectera directement de la session. Attention, si vous cliquez dessus, vous perdrez votre progression! ",
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

// ------------------ DOM refs ------------------
const mailListDiv = document.getElementById("mail-list");
const mailContentDiv = document.getElementById("mail-view");
const mailIcon = document.querySelector('.icon[data-window="mails"]');
const mailSidebar = document.querySelector(".mail-sidebar");
const securityPopup = document.getElementById("security-popup");
const antivirusPopup = document.getElementById("antivirus-popup");
const launchAntivirusBtn = document.getElementById("launch-antivirus-btn");
const antivirusStatus = document.getElementById("antivirus-status");
const antivirusProgress = document.getElementById("antivirus-progress");

// ------------------ Mail logic ------------------
let unreadMails = Object.values(mails.inbox).filter((m) => !m.read).length;
let currentFolder = "inbox";

const updateMailNotification = () => {
  if (!mailIcon) return;
  let notification = mailIcon.querySelector(".notification");
  if (unreadMails > 0) {
    if (!notification) {
      notification = document.createElement("span");
      notification.classList.add("notification");
      mailIcon.appendChild(notification);
    }
    notification.textContent = unreadMails;
    notification.style.display = "block";
  } else if (notification) {
    notification.style.display = "none";
  }
};

// ------------------ HTML escape ------------------
const escapeHTML = (str) => {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/\n/g, "<br>");
};

// ------------------ Display mail content ------------------
const displayMailContent = (mail, id, folder) => {
  if (!mail) return;
  let bodyHTML = mail.body || "";
  let replyHTML = mail.reply || "";
  let content = `<div class="mail-header">
      <h3>De: ${escapeHTML(mail.sender)}<br>Sujet: ${escapeHTML(
    mail.subject
  )}<br>Date: ${escapeHTML(mail.date)}</h3>
    </div>
    <div class="mail-body"><p>${bodyHTML}</p>`;

  if (mail.replied) {
    content += `<div class="mail-body-reply"><br><br>---<br>Réponse :<br>${replyHTML}</div>`;
  }

  content += `</div>`;

  if (folder === "inbox" && mail.reply && !mail.replied) {
    content += `<button class="reply-button">Répondre</button>`;
  }

  mailContentDiv.innerHTML = content;

  // Bouton réponse
  if (folder === "inbox" && mail.reply && !mail.replied) {
    const replyButton = mailContentDiv.querySelector(".reply-button");
    if (replyButton) {
      replyButton.addEventListener("click", () => {
        mails.inbox[id].replied = true;
        const mailBody = mailContentDiv.querySelector(".mail-body");
        const replyDiv = document.createElement("div");
        replyDiv.innerHTML = `<br><br>---<br>Réponse :<br>${replyHTML}`;
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

  // Popup sécurité pour spam
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

// ------------------ Display mail list ------------------
const displayMails = (folder) => {
  mailListDiv.innerHTML = "";
  mailContentDiv.innerHTML = "";
  const currentMails = mails[folder] || {};
  unreadMails = Object.values(currentMails).filter((mail) => !mail.read).length;
  for (let id in currentMails) {
    const mail = currentMails[id];
    const mailDiv = document.createElement("div");
    mailDiv.classList.add("mail-item");
    mailDiv.dataset.mail = id;
    mailDiv.dataset.folder = folder;
    if (!mail.read) mailDiv.classList.add("unread");
    mailDiv.innerHTML = `<span class="mail-sender">${mail.sender}</span> - <span class="mail-date">${mail.date}</span><br><strong>Sujet:</strong> ${mail.subject}`;
    mailListDiv.appendChild(mailDiv);
  }
  updateMailNotification();
};

// ------------------ Sidebar click ------------------
mailSidebar.addEventListener("click", (e) => {
  const folder = e.target.closest(".mail-folder");
  if (folder) {
    const prev = document.querySelector(".mail-folder.active");
    if (prev) prev.classList.remove("active");
    folder.classList.add("active");
    currentFolder = folder.dataset.folder;
    displayMails(currentFolder);
  }
});

// ------------------ Mail click ------------------
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

// ------------------ Audio ------------------
let audioCtx = null;
function ensureAudio() {
  if (!ENABLE_SOUNDS) return null;
  if (!audioCtx) {
    try {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
      audioCtx = null;
    }
  }
  return audioCtx;
}
function playBeep(freq = 880, dur = 0.08, type = "sine", gain = 0.06) {
  const ctx = ensureAudio();
  if (!ctx) return;
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.type = type;
  o.frequency.value = freq;
  g.gain.value = gain;
  o.connect(g);
  g.connect(ctx.destination);
  o.start();
  g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + dur);
  o.stop(ctx.currentTime + dur + 0.02);
}
function playStartSound() {
  playBeep(680, 0.12, "sine", 0.08);
}
function playTick() {
  playBeep(1200, 0.04, "square", 0.03);
}
function playSuccess() {
  playBeep(1000, 0.12, "triangle", 0.09);
}
function playAlert() {
  playBeep(220, 0.18, "sawtooth", 0.12);
}

// ------------------ Antivirus UI helpers ------------------
function makeCircleMarkup(percent = 0) {
  const p = Math.max(0, Math.min(100, Math.round(percent)));
  return `<svg viewBox="0 0 36 36" class="circular-chart" aria-hidden="true">
  <path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#043214" stroke-width="2.8"></path>
  <path class="circle" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#00ff6a" stroke-width="3.2" stroke-linecap="round" stroke-dasharray="${p},100"></path>
</svg>`;
}

async function typeLog(consoleEl, text, speed = 6) {
  return new Promise((resolve) => {
    const line = document.createElement("div");
    line.className = "log-line";
    consoleEl.appendChild(line);
    let i = 0;
    function step() {
      if (i <= text.length) {
        line.textContent = text.slice(0, i);
        consoleEl.scrollTop = consoleEl.scrollHeight;
        i++;
        setTimeout(step, Math.max(3, speed + (Math.random() * 6 - 3)));
      } else resolve();
    }
    step();
  });
}

function animateCircle(contentEl, fromP, toP, dur = 600) {
  return new Promise((resolve) => {
    const start = performance.now();
    function frame(now) {
      const t = Math.min(1, (now - start) / dur);
      const val = Math.round(fromP + (toP - fromP) * t);
      const circle = contentEl.querySelector(".circle");
      if (circle) circle.setAttribute("stroke-dasharray", `${val},100`);
      const pct = contentEl.querySelector(".percent-text");
      if (pct) pct.textContent = `${val}%`;
      if (t < 1) requestAnimationFrame(frame);
      else resolve();
    }
    requestAnimationFrame(frame);
  });
}

// ------------------ Build Antivirus UI ------------------
function buildAdvancedAntivirusUI() {
  const content = antivirusPopup.querySelector(".antivirus-content");
  if (!content) return;
  content.innerHTML = `
  <div class="av-top">
    <div class="av-logo" aria-hidden="true">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M12 2L3 5v6c0 5 3.8 9.8 9 11 5.2-1.2 9-6 9-11V5l-9-3z" fill="#01320f"/><path d="M9 12l2 2 4-4" stroke="#eaffea" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
    <div style="line-height:1;">
      <div style="font-weight:800;color:#eaffea;">Windows Defender — Analyse approfondie</div>
      <div style="font-size:0.85rem;color:#bfffc1;">Inspection en cours — simulation réaliste</div>
    </div>
  </div>
  <div class="av-main">
    <div class="av-circle-wrap">
      ${makeCircleMarkup(0)}
      <div class="percent-text">0%</div>
    </div>
    <div class="av-console" role="log" aria-live="polite"></div>
  </div>
  <div class="av-cpu" aria-hidden="false">
    <div class="stat"> CPU  <span class="value cpu-val">0%</span> </div>
    <div class="stat"> Processus <span class="value proc-val">0</span> </div>
    <div class="stat"> Menaces <span class="value threat-val">0</span> </div>
  </div>
  <div class="av-threats" style="display:none;"></div>
  <div class="av-actions" style="display:none;">
    <button class="btn btn-primary" data-action="quarantine">Mettre en quarantaine</button>
    <button class="btn btn-danger" data-action="delete">Supprimer définitivement</button>
    <button class="btn btn-ghost" data-action="ignore">Ignorer</button>
  </div>
  `;
}

// ------------------ Run Full Scan ------------------
async function runFullScan(href, folder, mailId) {
  buildAdvancedAntivirusUI();
  antivirusPopup.classList.remove("hidden");
  antivirusPopup.setAttribute("aria-hidden", "false");
  const content = antivirusPopup.querySelector(".antivirus-content");
  const consoleEl = content.querySelector(".av-console");
  const cpuVal = content.querySelector(".cpu-val");
  const procVal = content.querySelector(".proc-val");
  const threatVal = content.querySelector(".threat-val");
  const threatsEl = content.querySelector(".av-threats");
  const actionsEl = content.querySelector(".av-actions");

  if (ENABLE_SOUNDS) {
    playAlert();
    setTimeout(() => playStartSound(), 140);
  }

  const phases = [
    { name: "Initialisation du moteur de sécurité...", weight: 0.12 },
    { name: "Chargement des signatures locales...", weight: 0.12 },
    { name: "Analyse heuristique approfondie...", weight: 0.18 },
    { name: `Extraction en-têtes HTTP pour ${href}...`, weight: 0.12 },
    { name: "Exécution en sandbox des scripts (isolation)...", weight: 0.16 },
    { name: "Analyse comportementale et réputation cloud...", weight: 0.18 },
    { name: "Finalisation et compilation du rapport...", weight: 0.12 },
  ];
  const totalWeight = phases.reduce((s, p) => s + p.weight, 0);
  let elapsedPercent = 0;
  let scannedProcesses = 0;
  let detectedList = [];
  const totalMs = SCAN_TOTAL_MS;

  for (let i = 0; i < phases.length; i++) {
    const phase = phases[i];
    const msPhase = Math.max(
      300,
      Math.round(totalMs * (phase.weight / totalWeight))
    );
    await typeLog(consoleEl, `> ${phase.name}`, 6);
    const ticks = Math.max(4, Math.floor(msPhase / 350));
    for (let t = 0; t < ticks; t++) {
      const inc = Math.round(((phase.weight / totalWeight) * 100) / ticks);
      elapsedPercent = Math.min(98, elapsedPercent + inc);
      await animateCircle(content, elapsedPercent - inc, elapsedPercent, 220);
      if (ENABLE_SOUNDS) playTick();
      scannedProcesses += Math.round(Math.random() * 6 + 12);
      if (procVal) procVal.textContent = scannedProcesses;
      if (cpuVal)
        cpuVal.textContent = `${Math.min(
          99,
          30 + Math.round(scannedProcesses / 2)
        )}%`;
      await new Promise((r) =>
        setTimeout(r, Math.max(80, Math.random() * 120))
      );
      if (Math.random() < 0.06 && detectedList.length < 2) {
        const candidate = [
          {
            name: "Script.ObfJS",
            level: "HAUT",
            desc: "Code JavaScript fortement obfusqué",
          },
          {
            name: "Tracker.CookieX",
            level: "FAIBLE",
            desc: "Tracking non autorisé",
          },
          {
            name: "Dropper.FallenLoader",
            level: "CRITIQUE",
            desc: "Téléchargeur distant détecté",
          },
        ][Math.floor(Math.random() * 3)];
        detectedList.push(candidate);
        if (threatVal) threatVal.textContent = detectedList.length;
        await typeLog(
          consoleEl,
          `> Détection : ${candidate.name} — ${candidate.desc}`,
          6
        );
      }
    }
  }

  await animateCircle(content, elapsedPercent, 100, 700);
  if (ENABLE_SOUNDS) playSuccess();
  await typeLog(
    consoleEl,
    "> Analyse terminée — vérification des recommandations...",
    6
  );
  await new Promise((r) => setTimeout(r, 300));

  let finalDetected = [];
  if (href && href.indexOf && href.indexOf("payment-secure") !== -1) {
    finalDetected = [
      {
        name: "Dropper.FallenLoader",
        level: "CRITIQUE",
        desc: "Téléchargeur distant — exfiltration possible",
      },
      {
        name: "Script.ObfJS",
        level: "HAUT",
        desc: "Code JavaScript fortement obfusqué",
      },
    ];
  } else {
    if (detectedList.length > 0) finalDetected = detectedList;
    else if (Math.random() < 0.5)
      finalDetected = [
        {
          name: "Tracker.CookieX",
          level: "FAIBLE",
          desc: "Tracking non autorisé",
        },
      ];
  }

  if (finalDetected.length === 0) {
    await typeLog(consoleEl, "> Aucun risque significatif détecté.", 6);
    const ok = document.createElement("div");
    ok.className = "av-success";
    ok.textContent = "Système : AUCUN RISQUE — sécurisé";
    consoleEl.appendChild(ok);
    setTimeout(() => {
      antivirusPopup.classList.add("hidden");
      antivirusPopup.setAttribute("aria-hidden", "true");
    }, 1400);
    return;
  }

  threatsEl.style.display = "flex";
  threatsEl.innerHTML = "";
  for (const t of finalDetected) {
    const el = document.createElement("div");
    el.className = "av-threat-item";
    el.innerHTML = `<div style="font-weight:800">${t.name}</div><div style="opacity:0.95">${t.level}</div>`;
    threatsEl.appendChild(el);
    await typeLog(consoleEl, `> Détail: ${t.desc}`, 6);
  }

  actionsEl.style.display = "flex";
  const quarantineBtn = actionsEl.querySelector("[data-action='quarantine']");
  const deleteBtn = actionsEl.querySelector("[data-action='delete']");
  const ignoreBtn = actionsEl.querySelector("[data-action='ignore']");

  function finalize(action) {
    typeLog(
      consoleEl,
      `> Action choisie : ${action.toUpperCase()} — exécution...`,
      6
    );
    animateCircle(content, 98, 100, 420);
    setTimeout(() => {
      if (
        action === "quarantine" &&
        APPLY_QUARANTINE &&
        folder &&
        mailId &&
        mails[folder] &&
        mails[folder][mailId]
      ) {
        if (!mails.quarantine) mails.quarantine = {};
        const newId = Object.keys(mails.quarantine).length + 1;
        mails.quarantine[newId] = {
          ...(mails[folder][mailId] || {}),
          date: new Date().toLocaleString("fr-FR"),
          body:
            ((mails[folder][mailId] && mails[folder][mailId].body) || "") +
            "<br><em>— Quarantiné automatiquement</em>",
          read: true,
        };
        delete mails[folder][mailId];
      } else if (
        action === "delete" &&
        folder &&
        mailId &&
        mails[folder] &&
        mails[folder][mailId]
      )
        delete mails[folder][mailId];
      else if (
        action === "ignore" &&
        folder &&
        mailId &&
        mails[folder] &&
        mails[folder][mailId]
      ) {
        mails[folder][mailId].body =
          (mails[folder][mailId].body || "") +
          "<br><em>— Ignoré par l'utilisateur</em>";
        mails[folder][mailId].read = true;
      }
      antivirusPopup.classList.add("hidden");
      antivirusPopup.setAttribute("aria-hidden", "true");
      try {
        displayMails(currentFolder || "inbox");
        mailContentDiv.innerHTML =
          "<h3>Sélectionnez un mail pour l’ouvrir</h3>";
      } catch (e) {}
    }, 900);
  }

  quarantineBtn.onclick = () => finalize("quarantine");
  deleteBtn.onclick = () => finalize("delete");
  ignoreBtn.onclick = () => finalize("ignore");
}

// ------------------ Launch antivirus button ------------------
if (launchAntivirusBtn) {
  const cloned = launchAntivirusBtn.cloneNode(true);
  launchAntivirusBtn.parentNode.replaceChild(cloned, launchAntivirusBtn);
  cloned.addEventListener("click", (ev) => {
    ev.preventDefault();
    if (securityPopup) securityPopup.classList.add("hidden");
    let href = "#";
    try {
      const link = document.querySelector("#mail-view a");
      if (link) href = link.getAttribute("href") || "#";
    } catch (e) {
      href = "#";
    }
    runFullScan(href, currentFolder, null);
  });
}

// -- show inbox by default --
displayMails("inbox");
