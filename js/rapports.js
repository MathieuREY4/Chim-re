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
