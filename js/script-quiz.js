// -------------------- QUIZ --------------------
const questions = [
  {
    question: "Quel est le nom de la ville où se déroule l'histoire ?",
    answers: ["Golza", "Morath", "Durnhame"],
    correct: 0,
  },
  {
    question: "Qui est le personnage principal ?",
    answers: ["Fox", "Fallen", "Alix"],
    correct: 1,
  },
  {
    question: "Comment s'appelle la fille d'Aaron ?",
    answers: ["Kylia", "Shayna", "Nina"],
    correct: 0,
  },
  {
    question: "Comment s'appelle la psychologue d'Alix?",
    answers: ["Lucie", "Lexie", "Victoria"],
    correct: 2,
  },
  {
    question: "Quel est le nom de l'auteur ?",
    answers: ["Naxx", "Nexx", "Noxx"],
    correct: 1,
  },
  {
    question: "De quelle couleur est la capuche de Fallen ?",
    answers: ["Rouge", "Blanche", "Noire"],
    correct: 0,
  },
  {
    question: "Quel est le nom de famille de Aaron ?",
    answers: ["Gomez", "Parm", "Sélina"],
    correct: 2,
  },
  {
    question: "Quelle est la passion de Abby ?",
    answers: ["Le chant", "L'art", "La danse"],
    correct: 1,
  },
  {
    question: "Qui dirige l'orphelinat de Golza ?",
    answers: ["Carl", "Laurenn", "Roberta"],
    correct: 2,
  },
  {
    question: "Comment se fait appeler l'énigmatique personnage ?",
    answers: ["-A-", "_A_", "-v-"],
    correct: 0,
  },
  {
    question: "Combien de tomes de Chimère sont prévus ?",
    answers: ["4", "6", "8"],
    correct: 2,
  },
  {
    question: "Comment s'appelle le tome 2 ?",
    answers: [
      "Paradis détruit",
      "Des roses et du sang",
      "La gallerie des larmes",
    ],
    correct: 1,
  },
  {
    question: "De quelle couleur sont les cheveux de Nina ?",
    answers: ["Blonds", "Noirs", "Rouges"],
    correct: 0,
  },
  {
    question: "Que porte Alix autour du cou ?",
    answers: ["Une chaine en argent", "Un chapelet", "Rien"],
    correct: 1,
  },
  {
    question: "Quel est le nom du supérieur d'Aaron ?",
    answers: ["Carl", "Danny", "Earl"],
    correct: 2,
  },
  {
    question: "Quelle est la particularité de Tyler ?",
    answers: ["Il a une jumelle", "Il lui manque une jambe", "Il est albinos"],
    correct: 0,
  },
  {
    question: "Quel métier faisait Marvin ?",
    answers: ["Pompier", "Ecrivain", "Militaire"],
    correct: 2,
  },
  {
    question: "Qui est le narrateur de l'histoire ?",
    answers: ["Axel", "Angèle", "Alan"],
    correct: 0,
  },
  {
    question: "Lequel de ces personnages n'existe pas dans le roman ?",
    answers: ["John", "Rudy", "Nathan"],
    correct: 1,
  },
  {
    question:
      "Selon toi, quel personnage dit cette citation : Du plaisir vient ce que l'on veut entendre, de la peur vient l'improvisation, de la haine vient l'exagération, de la douleur vient la vérité. Dois-je vous laisser le choix de la réponse, où dois-je choisir la manière de poser la question?",
    answers: ["Nina", "Fallen", "-A-"],
    correct: 2,
  },
];

let currentQuestionIndex = 0;
let score = 0;
let attempts = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const feedbackEl = document.getElementById("feedback");
const finalResultEl = document.getElementById("final-result");

function showQuestion() {
  const current = questions[currentQuestionIndex];
  questionEl.textContent = current.question;
  answersEl.innerHTML = "";
  feedbackEl.classList.add("hidden");
  attempts = 0;

  current.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.classList.add("answer-btn");
    btn.textContent = answer;
    btn.addEventListener("click", () => checkAnswer(index, btn));
    answersEl.appendChild(btn);
  });
}

function checkAnswer(index, button) {
  const correctIndex = questions[currentQuestionIndex].correct;
  if (index === correctIndex) {
    button.classList.add("correct");
    score += attempts === 0 ? 3 : attempts === 1 ? 1 : 0;
    setTimeout(() => {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        showQuestion();
      } else {
        showFinalResult();
      }
    }, 800);
  } else {
    button.classList.add("wrong");
    feedbackEl.textContent = "Mauvaise réponse, Fallen est à tes trousses...";
    feedbackEl.classList.remove("hidden");
    attempts++;
    if (attempts >= 2) {
      setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
          showQuestion();
        } else {
          showFinalResult();
        }
      }, 1000);
    } else {
      setTimeout(() => {
        button.classList.remove("wrong");
        feedbackEl.classList.add("hidden");
      }, 600);
    }
  }
}

function showFinalResult() {
  questionEl.textContent = "";
  answersEl.innerHTML = "";
  feedbackEl.classList.add("hidden");
  if (score >= 15) {
    finalResultEl.textContent = `Félicitations, tu as semé Fallen ! Tu as obtenu ${score} points. File vite te cacher pendant que c'est safe.`;
  } else {
    finalResultEl.textContent = `Fallen t'a rattrapé... Tu as obtenu ${score} points. Tu es mort.`;
  }
  finalResultEl.classList.remove("hidden");
}

showQuestion();

// -------------------- CARTE INTERACTIVE --------------------
const passwordInput = document.getElementById("password-input");
const submitBtn = document.getElementById("submit-btn");
const passwordFeedback = document.getElementById("password-feedback"); // message spécifique mot de passe
const codeCard = document.querySelector(".code-card");
const validationOverlay = document.querySelector(".validation-overlay");
const validationText = document.getElementById("validation-text");

const journalTexts = {
  alix: "Journal Intime de l'Ombre - 24 Mai\nLes jours se ressemblent et les nuits sont courtes. Je pensais trouver un peu de paix ici...",
  "-a-":
    "Journal d'Alpha - 1er Juin\nLa mission a été difficile, mais nous avons survécu...",
  fallen:
    "Journal de Beta - 2 Juin\nRien n'est ce qu'il semble dans cette ville...",
  ambre:
    "Journal de Gamma - 3 Juin\nJe dois prendre une décision importante aujourd'hui...",
  kylia:
    "Journal de Delta - 4 Juin\nLes ombres deviennent plus longues chaque soir...",
  abby: "Journal d'Epsilon - 5 Juin\nJ'ai rencontré quelqu'un qui connaît la vérité...",
  aaron:
    "Journal de Zeta - 6 Juin\nIl y a des secrets que personne ne doit découvrir...",
  fox: "Journal d'Eta - 7 Juin\nJe commence à perdre confiance en mes alliés...",
  shayna: "Journal de Theta - 8 Juin\nUne énigme étrange m'a été laissée...",
  glenn: "Journal d'Iota - 9 Juin\nLes souvenirs du passé me hantent encore...",
  nina: "Journal de Kappa - 10 Juin\nJe sens que quelqu'un m'observe...",
  tyler:
    "Journal de Lambda - 11 Juin\nIl faut agir avant qu'il ne soit trop tard...",
  grace: "Journal de Mu - 12 Juin\nLa vérité est plus sombre que prévu...",
  john: "Journal de Nu - 13 Juin\nJe dois me méfier de chaque visage...",
  victoria:
    "Journal de Xi - 14 Juin\nLe temps presse et les décisions sont critiques...",
  carl: "Journal d'Omicron - 15 Juin\nUne découverte surprenante change tout...",
  earl: "Journal de Pi - 16 Juin\nJe ne peux plus faire confiance à personne...",
  nathan:
    "Journal de Rho - 17 Juin\nChaque nuit apporte de nouveaux dangers...",
  laurenn:
    "Journal de Sigma - 18 Juin\nLe passé refait surface et menace mes plans...",
  lucie: "Journal de Tau - 19 Juin\nDemain, tout pourrait changer à jamais...",
};

const specialPassword = "@234_jB!Dam4";
const specialJournalText =
  "Journal du Département A - 21 Octobre\nCes archives contiennent tous les dossiers secrets : 'FALLEN', 'CHIMÈRE', 'OMEGA'. L'accès est crypté mais les notes sont intactes. Le niveau de sécurité est élevé. Seul le code 'ANONYME' permet d'accéder au Journal Intime du créateur.";

submitBtn.addEventListener("click", () => {
  const userInput = passwordInput.value.trim();
  const generalInput = userInput.toLowerCase();

  let journalEntry = null;

  if (userInput === specialPassword) {
    journalEntry = specialJournalText;
  } else if (journalTexts[generalInput]) {
    journalEntry = journalTexts[generalInput];
  }

  if (journalEntry) {
    passwordFeedback.textContent = "";
    passwordFeedback.classList.remove("error");
    validationText.textContent = "Accès autorisé";
    validationOverlay.classList.add("visible");

    const cardBackText = codeCard.querySelector(".journal-page p");
    cardBackText.textContent = journalEntry;

    setTimeout(() => {
      codeCard.classList.add("flipped");
    }, 500);
  } else {
    passwordFeedback.textContent = "Connexion refusée";
    passwordFeedback.classList.add("error");
    submitBtn.classList.add("shake");
    setTimeout(() => submitBtn.classList.remove("shake"), 500);

    setTimeout(() => {
      passwordFeedback.textContent = "";
      passwordFeedback.classList.remove("error");
    }, 2000);
  }
});

passwordInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") submitBtn.click();
});

const returnBtn = document.getElementById("return-btn");
returnBtn.addEventListener("click", () => {
  codeCard.classList.remove("flipped");
  validationOverlay.classList.remove("visible");
});

// -------------------- MENU BURGER --------------------
const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");
burger.addEventListener("click", () => navLinks.classList.toggle("active"));
