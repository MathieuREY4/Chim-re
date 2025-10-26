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
      question: "Comment abordes-tu la solitude ?",
      answers: [
        {
          text: "Elle me met mal à l'aise, j'ai besoin d'être entouré(e)",
          type: "Rivière",
        },
        {
          text: "J'aime être avec mes proches, mais j'ai aussi besoin de mes moments de solitude",
          type: "Montagne",
        },
        {
          text: "Ce sont les moments que je préfère, car c'est en groupe que je me sens le/la plus seul(e)",
          type: "Ancre",
        },
      ],
    },
    {
      question:
        "Le meurtrier d'un de tes proches se retrouve face à toi et le juge te propose trois options. Laquelle choisis-tu? ",
      answers: [
        {
          text: "Que la justice le mette en prison le plus longtemps possible",
          type: "Rivière",
        },
        { text: "La peine de mort", type: "Ancre" },
        {
          text: "Qu'on te laisse seul avec lui dans une pièce",
          type: "Montagne",
        },
      ],
    },
    {
      question: "Dans un groupe, vous êtes celui ou celle qui...",
      answers: [
        { text: "Suit le mouvement", type: "Rivière" },
        { text: "Prend le lead", type: "Montagne" },
        { text: "s'éfface et observe", type: "Ancre" },
      ],
    },
    {
      question:
        "Tu apprends une vérité qui pourrait fortement blesser la personne que tu aimes le plus si elle était dévoilée...",
      answers: [
        {
          text: "Tu conduis l'auteur du mensonge dans une position où avouer devient sa seule porte de sortie",
          type: "Ancre",
        },
        {
          text: "Tu lui raconte tout, pour ne pas garder ça sur la conscience",
          type: "Montagne",
        },
        {
          text: "Tu ne dis rien pour la préserver et parce-que le messager se fait toujours tuer",
          type: "Rivière",
        },
      ],
    },
    {
      question: "Peut-on avoir une confiance aveugle ?",
      answers: [
        {
          text: "Pas aveuglément, une confiance saine, qui s'entretient mais sans devenir naif.",
          type: "Montagne",
        },
        {
          text: "Oui, c'est le secret d'une vraie relation. Il faut avoir pleinement confiance, quitte à se tromper parfois.",
          type: "Rivière",
        },
        { text: "Non. Ni aveugle, ni modérèment.", type: "Ancre" },
      ],
    },
    {
      question:
        "Ton enfant t'informe qu'il est victime de harcèlement scolaire. Selon toi, quel est le meilleur conseil pour faire cesser cette pratique ?",
      answers: [
        {
          text: "En parler au proviseur, aux parents et faire de la prévention sans recours à la violence",
          type: "Rivière",
        },
        {
          text: "Se défendre pour se faire respecter et en parler aux adultes",
          type: "Montagne",
        },
        {
          text: "Les harceleurs ne s'en prennent qu'à ceux qu'il jugent plus faibles. Fais lui connaitre la peur et il te respectera",
          type: "Ancre",
        },
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
