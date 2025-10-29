// ===================================================================
// 1. DÉCLARATIONS ET INITIALISATION DES ÉLÉMENTS (Inchangés)
// ===================================================================

const chatIcon = document.querySelector('.icon[data-window="chat"]');
const desktopNotification = chatIcon
  ? chatIcon.querySelector(".notification")
  : null;

const chatWindow = document.getElementById("chat-window");
const chatOutput = document.getElementById("chat-output");
const chatReplyBtn = document.getElementById("chat-reply-btn");
const traceIpBtn = document.getElementById("trace-ip-btn");
const contactItems = document.querySelectorAll(".chat-contact-item");
const responseChoicesContainer = document.getElementById(
  "response-choices-container"
);

let activeContactId = "anonymous";
let totalUnreadCount = 0;

// ===================================================================
// 2. DATA : Historique et Réponses (CORRECTION DÉFINITIVE DES CHAÎNES DE CHOIX)
// ===================================================================

const INITIAL_CHAT_MESSAGE = `
<p>> Connexion au serveur ...</p>
<p>> Authentification réussie. Bienvenue, Agent Selina.</p>
<p>
    > ANONYME:<br>> &nbsp;&nbsp;[Dossier FALLEN - Confidentiel]<br>> Vous jouez à un jeu dont vous ignorez les règles, Aaron. J'ai pris soin de vous transférer des fichiers qui vous aideront peut-être. À vous de réussir à les décoder pour y voir plus clair.
</p>
`;

function generateInitialHistory(initialReply) {
  return (
    `<p>> Système :<br>> &nbsp;&nbsp;Début de la conversation.</p>` +
    initialReply
  );
}

const chatData = {
  anonymous: {
    currentStep: 0,
    history: INITIAL_CHAT_MESSAGE,
    finished: false,
    traced: false,
    initialMessage: INITIAL_CHAT_MESSAGE.split("> ANONYME:")[1],
    replies: [
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
        user: "> Aaron SELINA :<br>> &nbsp;&nbsp;Quel est ton but? M'aider à résoudre cette enquête? Détourner mon attention?",
        anonymous:
          "> ANONYME:<br>> &nbsp;&nbsp;La justice Aaron, rien que la justice. La vraie, l'inévitable et douloureuse justice.",
      },
      {
        user: "> Aaron SELINA :<br>> &nbsp;&nbsp;Tuer, ce n'est pas la justice. C'est juste... tuer. Mais à quel prix? Et pour quelle raison?",
        anonymous: `> ANONYME:<br>> &nbsp;&nbsp; Les Rivières, les Montagnes et les Ancres. Vous ne pouvez pas comprendre, mais ça viendra. Inutile d'essayer retracer mon IP, vous ne trouverez rien et perdrez un temps précieux. Regardez plutôt les dossiers. Adieu, Aaron.`,
      },
    ],
  },

  // -------------------------------------------------------------------
  // EARL : CHEMINS UNIQUES IMPLÉMENTÉS
  // -------------------------------------------------------------------
  earl: {
    initialMessage: "> Earl - Chef du département :",
    currentStep: "step1",
    history: null,
    finished: false,
    typingDelay: 1500,
    conversations: {
      step1: {
        choices: [
          {
            text: "Chef, une personne a infiltré notre réseau et nos terminaux cryptés, la sécurité est compromise, je suspecte que ce soit signé Fallen.",
            next: "step2_r1",
            reply:
              "As-tu réussis à le tracer? Je préviens la DSI de mettre nos serveur en quarantaine!",
          },
          {
            text: "Chef, nous avons un problème.",
            next: "step2_r2",
            reply: "Nous ?",
          },
          {
            text: "Bonjour Chef, avez-vous lu le rapport que j'ai déposé sur votre bureau ce matin ?",
            next: "step2_r3",
            reply:
              "Bonjour Aaron, sors tout juste d'un entretien avec le procureur, je regarde ça rapidement.",
          },
        ],
      },

      step2_r1: {
        choices: [
          {
            text: "Il semblerait que le hacker ait placé des fichiers cryptés dans notre base de données, je vais tenter de tirer ça au clair.",
            next: "step3_r1_c1",
            reply: "Bien, tenez-moi au courant de l'avancée.",
          },
          {
            text: "Savez-vous où est Carl? Je ne l'ai pas vu ce matin...",
            next: "step3_r1_c2",
            reply: "Carl est à la scientifique , il ne devrait pas tarder.",
          },
          {
            text: "Quelque chose m'intrigue au sujet de l'affaire Fallen...",
            next: "step3_r1_c3",
            reply:
              "Alors faisons en sorte d'élucider ce mystère rapidement, nous avons suffisament de cadavres sur les bras.",
          },
        ],
      },

      step2_r2: {
        choices: [
          {
            text: "J'ai reçu un message étrange, impossible de retracer l'ip. Je pense que notre sécurité est corrompue. ",
            next: "step3_r2_c1",
            reply: "Vous êtes en retard, Selina. Agissez vite.",
          },
          {
            text: "Je le délègue à un subordonné, je n'ai pas le temps.",
            next: "step3_r2_c2",
            reply:
              "Vous n'avez pas cette autorité ! Si vous ne le faites pas, je le ferai remonter à la direction.",
          },
          {
            text: "J'ai besoin de savoir ce qu'est 'Chimera'.",
            next: "step3_r2_c3",
            reply:
              "Ne vous occupez pas de 'Chimera' ! Fin du débat. Le rapport d'abord.",
          },
        ],
      },

      step2_r3: {
        choices: [
          {
            text: "Un témoin clé a disparu.",
            next: "step3_r3_c1",
            reply:
              "L'enquête est en pause jusqu'à ce que ce rapport soit sur mon bureau. C'est l'ordre.",
          },
          {
            text: "Je pense que Fallen est en ville.",
            next: "step3_r3_c2",
            reply:
              "Fallen est une piste froide ! Concentrez-vous sur votre tâche. Ne me dérangez plus.",
          },
          {
            text: "J'ai besoin d'un accès de niveau 4.",
            next: "step3_r3_c3",
            reply:
              "Votre niveau 3 est suffisant. Arrêtez de me faire perdre mon temps et envoyez ce rapport.",
          },
        ],
      },

      step3_r1_c1: {
        bossReply: "Parfait. Maintenant, ne me dérangez plus.",
        end: true,
        choices: [],
      },
      step3_r1_c2: {
        bossReply: "Inacceptable. Je vous attends avant 17h. Est-ce clair ?",
        choices: [{ text: "Oui Chef.", next: "step_end_earl", reply: "Bien." }],
      },
      step3_r1_c3: {
        bossReply: "Bien. Fin de la conversation.",
        end: true,
        choices: [],
      },

      step3_r2_c1: {
        bossReply: "J'espère bien. Fin de la conversation.",
        end: true,
        choices: [],
      },
      step3_r2_c2: {
        bossReply:
          "Si vous le faites, vous êtes virée. C'est ça ou la direction. Votre choix est fait.",
        end: true,
        choices: [],
      },
      step3_r2_c3: {
        bossReply:
          "Dernier avertissement : ne vous occupez pas de Chimera. C'est un ordre.",
        end: true,
        choices: [],
      },

      step3_r3_c1: {
        bossReply:
          "Je me fiche des témoins ! Envoyez le rapport et attendez mes ordres pour la suite de l'enquête.",
        end: true,
        choices: [],
      },
      step3_r3_c2: {
        bossReply:
          "N'inventez pas des histoires de Fallen. Retournez au bureau, Selina.",
        end: true,
        choices: [],
      },
      step3_r3_c3: {
        bossReply:
          "Absolument pas. Je coupe la communication. Fin de l'abus de messagerie.",
        end: true,
        choices: [],
      },

      step_end_earl: {
        bossReply:
          "Fin de la conversation. Je suis en réunion. Ne me dérangez plus sauf urgence vitale.",
        end: true,
        choices: [],
      },
    },
  },

  // -------------------------------------------------------------------
  // KYLIA : CHEMINS UNIQUES IMPLÉMENTÉS
  // -------------------------------------------------------------------
  kylia: {
    initialMessage:
      "> Kylia Selina :<br>> &nbsp;&nbsp;Papa, tu vas bien ? J'ai entendu le répondeur de Maman, elle avait l'air bizarre. Rappelle-moi.",
    currentStep: "step1",
    history: null,
    finished: false,
    typingDelay: 1000,
    conversations: {
      step1: {
        bossReply:
          "Je suis au travail, je vais bien. Qu'est-ce qui t'inquiète ? Tu es avec ta mère ?",
        choices: [
          {
            text: "Oui, je suis avec elle.",
            next: "step2_r1",
            reply: "Bien. Dis-lui que je l'appelle ce soir.",
          },
          {
            text: "Non, je finis un dossier important.",
            next: "step2_r2",
            reply: "Très bien, je t'appelle plus tard. Concentre-toi.",
          },
          {
            text: "Pourquoi l'as-tu appelée si tu vas bien ?",
            next: "step2_r3",
            reply:
              "Je voulais juste prendre de ses nouvelles, c'est tout. Qu'est-ce qui t'inquiète ?",
          },
        ],
      },

      step2_r1: {
        bossReply:
          "Elle ne m'a pas dit que tu étais rentrée. Qu'est-ce que tu entends par 'bizarre' ? Elle était juste fatiguée.",
        choices: [
          {
            text: "Rien, je me suis fait des idées.",
            next: "step3_r1_c1",
            reply: "C'est le stress. Tout va bien, ma puce.",
          },
          {
            text: "Elle m'a paru stressée par l'enquête.",
            next: "step3_r1_c2",
            reply:
              "Elle a beaucoup de travail. Rien de plus. Je gère l'enquête.",
          },
          {
            text: "Elle a l'air de cacher quelque chose, Papa.",
            next: "step3_r1_c3",
            reply: "Elle ne te cache rien. Nous allons bien, je t'assure.",
          },
        ],
      },
      step2_r2: {
        bossReply:
          "Je suis d'accord, c'est mieux que tu te concentres. Qu'est-ce qui te fait dire qu'elle était bizarre ?",
        choices: [
          {
            text: "Rien, je me suis fait des idées.",
            next: "step3_r2_c1",
            reply: "C'est le stress. Tout va bien, ma puce.",
          },
          {
            text: "Elle m'a paru stressée par l'enquête.",
            next: "step3_r2_c2",
            reply:
              "Elle a beaucoup de travail. Rien de plus. Je gère l'enquête.",
          },
          {
            text: "Elle a l'air de cacher quelque chose, Papa.",
            next: "step3_r2_c3",
            reply: "Elle ne te cache rien. Nous allons bien, je t'assure.",
          },
        ],
      },
      step2_r3: {
        bossReply:
          "Juste un appel normal. Qu'est-ce qui t'inquiète ? Elle ne t'a pas dit quelque chose de spécifique ?",
        choices: [
          {
            text: "Rien, je me suis fait des idées.",
            next: "step3_r3_c1",
            reply: "C'est le stress. Tout va bien, ma puce.",
          },
          {
            text: "Elle m'a paru stressée par l'enquête.",
            next: "step3_r3_c2",
            reply:
              "Elle a beaucoup de travail. Rien de plus. Je gère l'enquête.",
          },
          {
            text: "Elle a l'air de cacher quelque chose, Papa.",
            next: "step3_r3_c3",
            reply: "Elle ne te cache rien. Nous allons bien, je t'assure.",
          },
        ],
      },

      step3_r1_c1: {
        bossReply:
          "Je t'appelle plus tard pour en parler quand je serai hors du bureau.",
        end: true,
        choices: [],
      },
      step3_r1_c2: {
        bossReply:
          "Je t'assure que tout va bien, mon amour. C'est le stress du travail. Je t'appelle plus tard pour en parler quand je serai hors du bureau.",
        end: true,
        choices: [],
      },
      step3_r1_c3: {
        bossReply:
          "Elle ne te cache rien. Nous allons bien, je t'assure. Je t'appelle plus tard pour en parler quand je serai hors du bureau.",
        end: true,
        choices: [],
      },

      step3_r2_c1: {
        bossReply:
          "Je t'appelle plus tard pour en parler quand je serai hors du bureau.",
        end: true,
        choices: [],
      },
      step3_r2_c2: {
        bossReply:
          "Je t'assure que tout va bien, mon amour. C'est le stress du travail. Je t'appelle plus tard pour en parler quand je serai hors du bureau.",
        end: true,
        choices: [],
      },
      step3_r2_c3: {
        bossReply:
          "Elle ne te cache rien. Nous allons bien, je t'assure. Je t'appelle plus tard pour en parler quand je serai hors du bureau.",
        end: true,
        choices: [],
      },

      step3_r3_c1: {
        bossReply:
          "Je t'appelle plus tard pour en parler quand je serai hors du bureau.",
        end: true,
        choices: [],
      },
      step3_r3_c2: {
        bossReply:
          "Je t'assure que tout va bien, mon amour. C'est le stress du travail. Je t'appelle plus tard pour en parler quand je serai hors du bureau.",
        end: true,
        choices: [],
      },
      step3_r3_c3: {
        bossReply:
          "Elle ne te cache rien. Nous allons bien, je t'assure. Je t'appelle plus tard pour en parler quand je serai hors du bureau.",
        end: true,
        choices: [],
      },
    },
  },

  // -------------------------------------------------------------------
  // EMILIE : CHEMINS UNIQUES IMPLÉMENTÉS
  // -------------------------------------------------------------------
  emilie: {
    initialMessage:
      "> Dr. Emilie Dubois :<br>> &nbsp;&nbsp;Aaron, j'ai les premiers résultats de l'autopsie. Ce n'est pas ce que l'on attendait. Contactez-moi rapidement.",
    currentStep: "step1",
    history: null,
    finished: false,
    typingDelay: 1800,
    conversations: {
      step1: {
        bossReply:
          "Le corps ne présentait pas de traces de lutte. La cause du décès est un poison non identifié, extrêmement rapide.",
        choices: [
          {
            text: "Un poison ? Est-ce lié au dossier Chimère ?",
            next: "step2_r1",
            reply:
              "C'est possible. Le produit est très sophistiqué. Je mets l'équipe sur l'analyse de la composition exacte.",
          },
          {
            text: "Je comprends. Transférez-moi le rapport complet.",
            next: "step_end_final_emilie",
            reply:
              "Rapport transféré. Fin de la communication. Restez prudent.",
          },
          {
            text: "Avez-vous trouvé des traces de l'antidote ?",
            next: "step2_r3",
            reply:
              "Aucune. C'est ce qui nous inquiète. Le produit est inconnu. Je mets l'équipe sur l'analyse de la composition exacte.",
          },
        ],
      },
      step2_r1: {
        bossReply:
          "Je ne peux pas confirmer le lien avec Chimère pour l'instant. Que faites-vous ?",
        choices: [
          {
            text: "Je m'occupe des bases de données militaires.",
            next: "step_end_final_emilie",
            reply: "Faites. Nous faisons tout ce que nous pouvons ici.",
          },
          {
            text: "Il faut une contre-analyse rapide!",
            next: "step_end_final_emilie",
            reply:
              "Oui, nous sommes dessus. Ne perdez pas de temps de votre côté.",
          },
          {
            text: "C'est Fallen. Il utilise le même poison.",
            next: "step_end_final_emilie",
            reply:
              "Je ne peux pas confirmer ça. Nous vous transférons le rapport. Restez prudent.",
          },
        ],
      },
      step2_r3: {
        bossReply:
          "L'absence d'antidote connu est la clé. Que faites-vous maintenant pour identifier le poison ?",
        choices: [
          {
            text: "Je m'occupe des bases de données militaires.",
            next: "step_end_final_emilie",
            reply: "Faites. Nous faisons tout ce que nous pouvons ici.",
          },
          {
            text: "Il faut une contre-analyse rapide!",
            next: "step_end_final_emilie",
            reply:
              "Oui, nous sommes dessus. Ne perdez pas de temps de votre côté.",
          },
          {
            text: "C'est Fallen. Il utilise le même poison.",
            next: "step_end_final_emilie",
            reply:
              "Je ne peux pas confirmer ça. Nous vous transférons le rapport. Restez prudent.",
          },
        ],
      },
      step_end_final_emilie: {
        bossReply:
          "Rapport transféré. Fin de la communication. Restez prudent.",
        end: true,
        choices: [],
      },
    },
  },

  // -------------------------------------------------------------------
  // CATHERINE : CHEMINS UNIQUES IMPLÉMENTÉS
  // -------------------------------------------------------------------
  catherine: {
    initialMessage: null,
    currentStep: "step1",
    history: null,
    finished: false,
    typingDelay: 800,
    conversations: {
      step1: {
        bossReply:
          "J'ai fini l'analyse des traces de poudre sur la scène de crime 2. Vous voulez que je vous l'envoie ?",
        choices: [
          {
            text: "Envoyez-moi les données, merci.",
            next: "step_end_1_r1",
            reply: "Fait. Données transférées. À votre disposition.",
          },
          {
            text: "Avez-vous trouvé une correspondance dans la base de données ?",
            next: "step_end_1_r2",
            reply:
              "Négatif, aucune correspondance connue. Je vous envoie le rapport.",
          },
          {
            text: "Où a-t-elle été trouvée exactement ?",
            next: "step_end_1_r3",
            reply:
              "Sur le corps de la victime, mais pas autour. L'analyse est dans le rapport que je vous envoie.",
          },
        ],
      },
      step_end_1_r1: {
        bossReply: "Fin de la communication.",
        end: true,
        choices: [],
      },
      step_end_1_r2: {
        bossReply: "Fin de la communication.",
        end: true,
        choices: [],
      },
      step_end_1_r3: {
        bossReply: "Fin de la communication.",
        end: true,
        choices: [],
      },
    },
  },

  // -------------------------------------------------------------------
  // DAVID : CHEMINS UNIQUES IMPLÉMENTÉS
  // -------------------------------------------------------------------
  david: {
    initialMessage: null,
    currentStep: "step1",
    history: null,
    finished: false,
    typingDelay: 2000,
    conversations: {
      step1: {
        bossReply:
          "J'ai des infos sur la fuite de données interne. 500 crédits si l'info est bonne.",
        choices: [
          {
            text: "Quelles sont les infos ?",
            next: "step_end_1_r1",
            reply:
              "Je vous envoie l'historique de connexion suspecte. Envoyez le paiement.",
          },
          {
            text: "Pas de paiement avant la vérification.",
            next: "step_end_1_r2",
            reply: "C'est la règle. Payez ou pas d'info. Vous décidez.",
          },
          {
            text: "Qui a fait la fuite ?",
            next: "step_end_1_r3",
            reply:
              "Je sais qui, mais l'info vaut 500 crédits. Envoyez le paiement.",
          },
        ],
      },
      step_end_1_r1: {
        bossReply: "J'attends le paiement. Fin de la communication.",
        end: true,
        choices: [],
      },
      step_end_1_r2: {
        bossReply: "Pas de paiement, pas de données. Fin de la communication.",
        end: true,
        choices: [],
      },
      step_end_1_r3: {
        bossReply: "J'attends le paiement. Fin de la communication.",
        end: true,
        choices: [],
      },
    },
  },

  // -------------------------------------------------------------------
  // LUCY : NOUVELLE CONVERSATION À CHOIX MULTIPLES
  // -------------------------------------------------------------------
  lucy: {
    initialMessage:
      "> Lucy Selina :<br>> &nbsp;&nbsp;Aaron, j'ai trouvé une chose étrange dans ton bureau, ça concerne l'enquête. Peux-tu passer me voir ou en parler par ici ?",
    currentStep: "step1",
    history: null,
    finished: false,
    typingDelay: 1200,
    conversations: {
      step1: {
        bossReply:
          "C'est une photo sous ton bureau. Elle n'est pas récente. J'ai peur pour toi.",
        choices: [
          {
            text: "De quelle photo parles-tu ?",
            next: "step2_r1",
            reply:
              "Elle est avec les dossiers 'Rivières'. J'ai peur que quelqu'un soit entré.",
          },
          {
            text: "Ce n'est pas important. Ne touche à rien.",
            next: "step2_r2",
            reply: "Trop tard, je l'ai. Dis-moi ce que je dois faire.",
          },
          {
            text: "Fais-moi un scan tout de suite.",
            next: "step2_r3",
            reply: "Le scanner est hors service. Peux-tu venir la chercher ?",
          },
        ],
      },

      step2_r1: {
        bossReply:
          "Je suis inquiète, Aaron. Qui est cette personne sur la photo ?",
        choices: [
          {
            text: "C'est ma mère. Rien d'important.",
            next: "step_end_lucy",
            reply: "OK. Range-la. Je ne veux pas qu'Earl la voie.",
          },
          {
            text: "C'est un témoin. Ne pose pas de questions.",
            next: "step_end_lucy",
            reply: "Compris. Je la mets dans un dossier sécurisé.",
          },
          {
            text: "C'est 'Fallen'. Il est lié aux 'Rivières'.",
            next: "step_end_lucy",
            reply:
              "Quoi ? Tu dois la détruire immédiatement ! Ne la montre à personne.",
          },
        ],
      },

      step2_r2: {
        bossReply:
          "Je l'ai prise. Que dois-je en faire ? Je ne comprends rien à l'enquête.",
        choices: [
          {
            text: "C'est ma mère. Rien d'important.",
            next: "step_end_lucy",
            reply: "OK. Range-la. Je ne veux pas qu'Earl la voie.",
          },
          {
            text: "C'est un témoin. Ne pose pas de questions.",
            next: "step_end_lucy",
            reply: "Compris. Je la mets dans un dossier sécurisé.",
          },
          {
            text: "C'est 'Fallen'. Il est lié aux 'Rivières'.",
            next: "step_end_lucy",
            reply:
              "Quoi ? Tu dois la détruire immédiatement ! Ne la montre à personne.",
          },
        ],
      },

      step2_r3: {
        bossReply:
          "Je suis au bureau A12. Viens vite avant qu'Earl ne revienne.",
        choices: [
          {
            text: "J'arrive tout de suite.",
            next: "step_end_lucy",
            reply: "Dépêche-toi.",
          },
          {
            text: "Donne-la à Marc. Je ne peux pas venir.",
            next: "step_end_lucy",
            reply: "Marc est en patrouille. Je la garde pour toi.",
          },
          {
            text: "Détruis-la. Je ne veux pas prendre de risque.",
            next: "step_end_lucy",
            reply: "C'est fait. Je ne poserai plus de questions.",
          },
        ],
      },

      step_end_lucy: {
        bossReply: "Fin de la conversation.",
        end: true,
        choices: [],
      },
    },
  },

  lea: {
    history: `<p>> Léa Dupuis :<br>> &nbsp;&nbsp;Hors ligne.</p>`,
    currentStep: "offline",
    finished: true,
    initialMessage: null,
  },
  marc: {
    history: `<p>> Marc Dubois :<br>> &nbsp;&nbsp;En patrouille. Ne peut pas répondre.</p>`,
    currentStep: "offline",
    finished: true,
    initialMessage: null,
  },
  sophie: {
    history: `<p>> Sophie Blanc :<br>> &nbsp;&nbsp;En surveillance. Ne peut pas répondre.</p>`,
    currentStep: "offline",
    finished: true,
    initialMessage: null,
  },
  service: {
    history: `<p>> Service Technique :<br>> &nbsp;&nbsp;Déconnecté.</p>`,
    currentStep: "offline",
    finished: true,
    initialMessage: null,
  },
};

// ===================================================================
// 3. FONCTIONS DE GESTION DE LA NOTIFICATION GLOBALE (Inchangées)
// ===================================================================

function updateDesktopIcon() {
  if (!desktopNotification) return;
  if (totalUnreadCount > 0) {
    desktopNotification.textContent = totalUnreadCount;
    desktopNotification.classList.remove("hidden");
    desktopNotification.style.display = "block";
  } else {
    desktopNotification.classList.add("hidden");
    desktopNotification.style.display = "none";
    desktopNotification.textContent = "";
  }
}

function incrementUnreadCount(contactId) {
  const contactElement = document.querySelector(
    `[data-contact-id="${contactId}"]`
  );
  if (contactElement) {
    const unreadSpan = contactElement.querySelector(".unread-count");
    let count =
      unreadSpan.textContent === "" ? 0 : parseInt(unreadSpan.textContent) || 0;
    if (count === 0) {
      totalUnreadCount++;
    }
    count++;
    unreadSpan.textContent = count;
    unreadSpan.classList.remove("hidden");
    updateDesktopIcon();
  }
}

function resetUnreadCount() {
  const contactElement = document.querySelector(
    `[data-contact-id="${activeContactId}"]`
  );
  if (contactElement) {
    const unreadSpan = contactElement.querySelector(".unread-count");
    const currentLocalCount = parseInt(unreadSpan.textContent) || 0;
    if (currentLocalCount > 0) {
      totalUnreadCount -= currentLocalCount;
    }
    unreadSpan.textContent = "";
    unreadSpan.classList.add("hidden");
    updateDesktopIcon();
  }
}

// ===================================================================
// 4. FONCTIONS DE GESTION DE L'AFFICHAGE ET DES CHOIX (CORRIGÉES)
// ===================================================================

function renderResponseChoices(contactId) {
  const data = chatData[contactId];
  if (
    !data.conversations ||
    !data.conversations[data.currentStep] ||
    data.finished
  ) {
    responseChoicesContainer.style.display = "none";
    return;
  }

  const step = data.conversations[data.currentStep];
  responseChoicesContainer.innerHTML = "";
  if (step && step.choices && step.choices.length > 0) {
    step.choices.forEach((choice) => {
      const button = document.createElement("button");
      button.className = "choice-btn";
      button.textContent = choice.text;
      button.dataset.nextStep = choice.next;

      button.addEventListener("click", () =>
        handleReplyChoice(contactId, choice.text, choice.next, choice.reply)
      );
      responseChoicesContainer.appendChild(button);
    });
    responseChoicesContainer.style.display = "flex";
  } else {
    responseChoicesContainer.style.display = "none";
  }
}

function updateChatInterface(contactId) {
  activeContactId = contactId;
  const data = chatData[contactId];

  resetUnreadCount();

  contactItems.forEach((item) => {
    item.classList.remove("active");
    if (item.dataset.contactId === contactId) {
      item.classList.add("active");
    }
  });

  if (data.initialMessage && !data.history) {
    data.history = generateInitialHistory(data.initialMessage);
    const contactElement = document.querySelector(
      `[data-contact-id="${contactId}"] small`
    );
    if (contactElement) {
      const previewText =
        data.initialMessage.split(":<br>>")[1].trim().substring(0, 30) + "...";
      contactElement.textContent = previewText
        .replace(/&nbsp;/g, " ")
        .replace(/\.$/g, "");
    }
  } else if (data.history === null) {
    data.history = `<p>> Système :<br>> &nbsp;&nbsp;Pas d'historique de message récent.</p>`;
  }

  chatOutput.innerHTML = data.history;
  chatOutput.scrollTop = chatOutput.scrollHeight;

  chatReplyBtn.style.display = "none";
  traceIpBtn.style.display = "none";
  responseChoicesContainer.style.display = "none";

  if (contactId === "anonymous") {
    if (!data.finished) {
      chatReplyBtn.style.display = "block";
    } else if (data.finished && !data.traced) {
      traceIpBtn.style.display = "block";
    }
  } else {
    if (!data.finished && data.currentStep !== "offline") {
      renderResponseChoices(contactId);
    }
  }
}

function handleReplyChoice(contactId, userText, nextStep, contactReply) {
  const data = chatData[contactId];
  responseChoicesContainer.style.display = "none";

  const userReplyHTML = `<p style="color:white;">> Aaron SELINA :<br>> &nbsp;&nbsp;${userText}</p><br/>`;
  chatOutput.insertAdjacentHTML("beforeend", userReplyHTML);
  data.history += userReplyHTML;
  chatOutput.scrollTop = chatOutput.scrollHeight;

  const statusElement = document.querySelector(
    `[data-contact-id="${contactId}"] .contact-status`
  );
  if (statusElement && statusElement.classList.contains("away")) {
    statusElement.classList.remove("away");
    statusElement.classList.add("online");
  }

  const typingMessage = `<p class="typing-indicator">> ${contactId.toUpperCase()} est en train d'écrire...</p>`;
  chatOutput.insertAdjacentHTML("beforeend", typingMessage);
  data.history += typingMessage;
  chatOutput.scrollTop = chatOutput.scrollHeight;

  setTimeout(() => {
    const typingElements = chatOutput.querySelectorAll(".typing-indicator");
    if (typingElements.length > 0) {
      typingElements[typingElements.length - 1].remove();
      data.history = data.history.replace(typingMessage, "");
    }

    data.currentStep = nextStep;
    const nextConversation = data.conversations[nextStep];

    if (!nextConversation) {
      data.finished = true;
      updateChatInterface(contactId);
      return;
    }

    let finalContactMessage = contactReply;
    if (!finalContactMessage && nextConversation.bossReply) {
      finalContactMessage = nextConversation.bossReply;
    }

    if (finalContactMessage) {
      const replyHTML = `<p>> ${contactId.toUpperCase()}:<br>> &nbsp;&nbsp;${finalContactMessage}</p>`;
      chatOutput.insertAdjacentHTML("beforeend", replyHTML);
      data.history += replyHTML;
      chatOutput.scrollTop = chatOutput.scrollHeight;

      const contactElement = document.querySelector(
        `[data-contact-id="${contactId}"] small`
      );
      if (contactElement) {
        const previewText =
          (
            finalContactMessage.split(":<br>>")[1]?.trim() ||
            finalContactMessage.trim()
          ).substring(0, 30) + "...";
        contactElement.textContent = previewText
          .replace(/&nbsp;/g, " ")
          .replace(/\.$/g, "");
      }
    }

    if (activeContactId !== contactId) {
      incrementUnreadCount(contactId);
    }

    if (nextConversation.end) {
      data.finished = true;
      if (statusElement && statusElement.classList.contains("online")) {
        statusElement.classList.remove("online");
        statusElement.classList.add("away");
      }
      updateChatInterface(contactId);
    } else {
      renderResponseChoices(contactId);
    }
  }, data.typingDelay);
}

function handleReply(e) {
  if (e.type === "touchend") {
    e.preventDefault();
  }
  if (activeContactId !== "anonymous") return;

  const data = chatData.anonymous;
  let currentStep = data.currentStep;
  if (currentStep < data.replies.length) {
    chatReplyBtn.style.display = "none";

    const userReply = document.createElement("p");
    userReply.style.color = "white";
    userReply.innerHTML = data.replies[currentStep].user;
    chatOutput.appendChild(userReply);
    chatOutput.appendChild(document.createElement("br"));

    data.history += userReply.outerHTML + "<br/>";
    chatOutput.scrollTop = chatOutput.scrollHeight;
    setTimeout(() => {
      const typingMessage = document.createElement("p");
      typingMessage.textContent = "> ANONYME est en train d'écrire...";
      typingMessage.classList.add("typing-indicator");
      chatOutput.appendChild(typingMessage);
      data.history += typingMessage.outerHTML;
      chatOutput.scrollTop = chatOutput.scrollHeight;

      setTimeout(() => {
        data.history = data.history.replace(typingMessage.outerHTML, "");
        typingMessage.remove();

        const anonymousReply = document.createElement("p");
        anonymousReply.innerHTML = data.replies[currentStep].anonymous;
        chatOutput.appendChild(anonymousReply);

        if (activeContactId !== "anonymous") {
          incrementUnreadCount("anonymous");
        }

        data.history += anonymousReply.outerHTML;
        chatOutput.scrollTop = chatOutput.scrollHeight;

        currentStep++;
        data.currentStep = currentStep;

        if (currentStep >= data.replies.length) {
          data.finished = true;

          const lostConnection = document.createElement("p");
          lostConnection.textContent = "> Connexion perdue.";
          lostConnection.style.color = "#ff4d4d";
          chatOutput.appendChild(lostConnection);
          data.history += lostConnection.outerHTML;

          chatOutput.scrollTop = chatOutput.scrollHeight;
          traceIpBtn.style.display = "block";
        } else {
          chatReplyBtn.style.display = "block";
        }
      }, 3000);
    }, 2000);
  }
}

function handleTraceIp(e) {
  if (e.type === "touchend") e.preventDefault();
  const data = chatData.anonymous;
  if (activeContactId === "anonymous" && data.finished && !data.traced) {
    data.traced = true;

    const tracingMessage = `<p style="color:#ff4d4d;">> Aaron SELINA :<br>> &nbsp;&nbsp;Tentative de traçage de l'adresse IP...</p><br/>`;
    chatOutput.insertAdjacentHTML("beforeend", tracingMessage);
    chatOutput.scrollTop = chatOutput.scrollHeight;

    const TRACE_CODE_CONTENT = `
[INIT] Starting secure IP trace sequence...
[SCAN] Pinging target IP: 192.168.1.1 (Masked Proxy)
[CHECK] Latency unstable: 450ms, 620ms, 580ms. High variance.
[WARN] Detected Layer 7 Obfuscation: TOR/VPN mix.
[MODULE] Activating Deep Packet Inspection (DPI) Module...
[DPI] Analyzing encrypted traffic headers...
[DPI] Cipher Suite: TLS_AES_256_GCM_SHA384
[DPI] Key Exchange Protocol: Diffie-Hellman Ephemeral (DHE)
[HUNT] Cross-referencing known exit nodes (Database v14.2)...
[FAIL] Exit node pool too dynamic. No match found.
[ATTEMPT] Bypassing firewall: 10/12/23 attempts failed.
[TRACE] Attempting geo-location via network time delta...
[FAIL] Clock skew too severe. Location triangulated as 'Unknown / Global'.
[STATUS] Trace integrity: 1.2%
[ERROR] Reached maximum allowed hop count (255).
`;

    const codeOutputElement = document.createElement("pre");
    codeOutputElement.style.color = "#00ff00";
    codeOutputElement.style.fontSize = "0.85em";
    codeOutputElement.style.fontFamily = "'Courier New', Courier, monospace";
    codeOutputElement.style.whiteSpace = "pre-wrap";
    chatOutput.appendChild(codeOutputElement);

    let charIndex = 0;
    const typingSpeed = 10;

    function typeCode() {
      if (charIndex < TRACE_CODE_CONTENT.length) {
        const charsToAdd = TRACE_CODE_CONTENT.substring(
          charIndex,
          charIndex + 2
        );
        codeOutputElement.textContent += charsToAdd;
        charIndex += 2;
        chatOutput.scrollTop = chatOutput.scrollHeight;
        setTimeout(typeCode, typingSpeed);
      } else {
        data.history = chatOutput.innerHTML;
        const resultMessage = `<p style="color:#ff4d4d; font-weight: bold; font-size: 1.1em;">> Système : Échec - adresse IP introuvable.</p>`;
        chatOutput.insertAdjacentHTML("beforeend", resultMessage);
        data.history += resultMessage;
        chatOutput.scrollTop = chatOutput.scrollHeight;
        updateChatInterface(activeContactId);
      }
    }

    typeCode();
  }
}

// ===================================================================
// 5. ÉVÉNEMENTS & INITIALISATION
// ===================================================================

contactItems.forEach((item) => {
  item.addEventListener("click", () =>
    updateChatInterface(item.dataset.contactId)
  );
});
chatReplyBtn.addEventListener("click", handleReply);
chatReplyBtn.addEventListener("touchend", handleReply);

if (traceIpBtn) {
  traceIpBtn.addEventListener("click", handleTraceIp);
  traceIpBtn.addEventListener("touchend", handleTraceIp);
}

document.addEventListener("DOMContentLoaded", () => {
  const initialContacts = ["anonymous", "kylia", "emilie", "lucy"];

  initialContacts.forEach((contactId) => {
    const unreadSpan = document.querySelector(
      `[data-contact-id="${contactId}"] .unread-count`
    );
    if (unreadSpan) {
      unreadSpan.textContent = "1";
      unreadSpan.classList.remove("hidden");
    }
  });

  totalUnreadCount = initialContacts.length;

  updateDesktopIcon();
});
if (chatIcon) {
  chatIcon.addEventListener("click", () => {
    activeContactId = "anonymous";
    updateChatInterface("anonymous");
  });
}
