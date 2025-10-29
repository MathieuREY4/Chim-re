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
