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
    question: "Qui dirrige l'orphelinat de Golza ?",
    answers: ["Carl", "Laurenn", "Roberta"],
    correct: 2,
  },
  {
    question: "Comment se fait appeller l'énigmatique personnage ?",
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
    question: "Quel est le nom du superieur d'Aaron ?",
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
    question: "Lequel de ces personnage n'existe pas dans le roman ?",
    answers: ["John", "Rudy", "Nathan"],
    correct: 1,
  },
  {
    question:
      "Selon toi, quel personnage dit cette citation :  Du plaisir vient ce que l'on veut entendre, de la peur vient l'improvisation, de la haine vient l'exagération, de la douleur vient la vérité. Dois-je vous laisser le choix de la réponse, où dois-je choisir la manière de poser la question?",
    answers: ["Nina", "Fallen", "-A-"],
    correct: 2,
  },
  // Ajoute jusqu'à 20 questions ici
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

// Journal intime--------------------------------------------------------------
// Carousel journal intime
const pages = document.querySelectorAll(".journal-page");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
let currentPage = 0;

function showPage(index) {
  pages.forEach((page, i) => {
    page.classList.toggle("active", i === index);
  });
}

prevBtn.addEventListener("click", () => {
  currentPage = (currentPage - 1 + pages.length) % pages.length;
  showPage(currentPage);
});

nextBtn.addEventListener("click", () => {
  currentPage = (currentPage + 1) % pages.length;
  showPage(currentPage);
});

// Init display
showPage(currentPage);
