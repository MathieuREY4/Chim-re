// Partie : Cartes
document.addEventListener("DOMContentLoaded", () => {
  const toggleButtons = document.querySelectorAll(".toggle-btn");

  toggleButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const text = btn.nextElementSibling;
      text.classList.toggle("visible");
    });
  });

  // Partie : Quiz
  const quizData = [
    {
      question: "Vous préférez passer votre temps...",
      answers: [
        { text: "En mouvement, à explorer", type: "Rivière" },
        { text: "À grimper, atteindre des sommets", type: "Montagne" },
        { text: "Ancré, à observer le monde", type: "Ancre" },
      ],
    },
    {
      question: "Votre force principale est...",
      answers: [
        { text: "L’adaptabilité", type: "Rivière" },
        { text: "La stabilité", type: "Ancre" },
        { text: "La persévérance", type: "Montagne" },
      ],
    },
    {
      question: "Dans un groupe, vous êtes celui qui...",
      answers: [
        { text: "Inspire le mouvement", type: "Rivière" },
        { text: "Reste calme et solide", type: "Montagne" },
        { text: "Maintient les liens", type: "Ancre" },
      ],
    },
  ];

  let currentQuestion = 0;
  const scores = {
    Rivière: 0,
    Montagne: 0,
    Ancre: 0,
  };

  const quizContainer = document.getElementById("quiz-container");
  const restartBtn = document.getElementById("restart-button");

  function loadQuestion() {
    quizContainer.innerHTML = "";

    if (currentQuestion >= quizData.length) {
      showResult();
      return;
    }

    const q = quizData[currentQuestion];

    const questionElem = document.createElement("p");
    questionElem.textContent = q.question;
    quizContainer.appendChild(questionElem);

    q.answers.forEach((ans) => {
      const btn = document.createElement("button");
      btn.textContent = ans.text;
      btn.classList.add("answer-button");
      btn.addEventListener("click", () => {
        scores[ans.type]++;
        currentQuestion++;
        loadQuestion();
      });
      quizContainer.appendChild(btn);
    });
  }

  function showResult() {
    quizContainer.innerHTML = "";

    const topType = Object.keys(scores).reduce((a, b) =>
      scores[a] > scores[b] ? a : b
    );

    const result = document.createElement("p");
    result.textContent = `Fallen a déterminé ton affectation, tu es une ${topType}.`;
    quizContainer.appendChild(result);

    restartBtn.style.display = "block";
  }

  restartBtn.addEventListener("click", () => {
    currentQuestion = 0;
    scores.Rivière = 0;
    scores.Montagne = 0;
    scores.Ancre = 0;
    restartBtn.style.display = "none";
    loadQuestion();
  });

  loadQuestion();
});

// --- MENU BURGER ---
const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
