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
