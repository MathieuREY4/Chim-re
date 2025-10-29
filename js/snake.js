(function () {
  const snakeWindow = document.getElementById("snake-window");
  if (!snakeWindow) return;

  const canvas = snakeWindow.querySelector("#game-canvas");
  const ctx = canvas.getContext("2d");
  const startBtn = snakeWindow.querySelector("#start-snake-btn");
  const scoreDisplay = snakeWindow.querySelector("#score");
  const gameMessage = snakeWindow.querySelector("#game-message");

  const gridSize = 20;
  const tileCount = canvas.width / gridSize;

  let snake;
  let food;
  let score;
  let dx;
  let dy;
  let gameLoop;
  let gameActive = false;

  function resetSnakeGame() {
    snake = [{ x: 10 * gridSize, y: 10 * gridSize }];
    food = {};
    score = 0;
    dx = gridSize;
    dy = 0;
    gameActive = true;
    scoreDisplay.textContent = 0;
    gameMessage.classList.add("hidden");
    startBtn.textContent = "Recommencer";
    placeFood();
    document.addEventListener("keydown", handleKeyDown);
  }

  function changeDirection(direction) {
    if (!gameActive) return;
    const goingUp = dy === -gridSize;
    const goingDown = dy === gridSize;
    const goingRight = dx === gridSize;
    const goingLeft = dx === -gridSize;

    switch (direction) {
      case "left":
        if (!goingRight) {
          dx = -gridSize;
          dy = 0;
        }
        break;
      case "up":
        if (!goingDown) {
          dx = 0;
          dy = -gridSize;
        }
        break;
      case "right":
        if (!goingLeft) {
          dx = gridSize;
          dy = 0;
        }
        break;
      case "down":
        if (!goingUp) {
          dx = 0;
          dy = gridSize;
        }
        break;
    }
  }

  document.getElementById("up-btn").addEventListener("click", () => {
    changeDirection("up");
  });

  document.getElementById("down-btn").addEventListener("click", () => {
    changeDirection("down");
  });

  document.getElementById("left-btn").addEventListener("click", () => {
    changeDirection("left");
  });

  document.getElementById("right-btn").addEventListener("click", () => {
    changeDirection("right");
  });

  function placeFood() {
    food.x = Math.floor(Math.random() * tileCount) * gridSize;
    food.y = Math.floor(Math.random() * tileCount) * gridSize;
  }

  function draw() {
    ctx.fillStyle = "#0d0d0d";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawSnake();
    drawFood();
  }

  function drawSnake() {
    ctx.fillStyle = "#00ff00";
    snake.forEach((segment) => {
      ctx.fillRect(segment.x, segment.y, gridSize, gridSize);
      ctx.strokeStyle = "#0d0d0d";
      ctx.strokeRect(segment.x, segment.y, gridSize, gridSize);
    });
  }

  function drawFood() {
    ctx.fillStyle = "var(--neon-red)";
    ctx.fillRect(food.x, food.y, gridSize, gridSize);
  }

  function update() {
    if (!gameActive) return;
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
      score++;
      scoreDisplay.textContent = score;
      placeFood();
    } else {
      snake.pop();
    }

    if (checkCollision()) {
      gameActive = false;
      clearInterval(gameLoop);
      gameMessage.textContent = `Partie terminée ! Score final : ${score}`;
      gameMessage.classList.remove("hidden");
      startBtn.textContent = "Recommencer";
      document.removeEventListener("keydown", handleKeyDown);
    }
  }

  function checkCollision() {
    const head = snake[0];
    if (
      head.x < 0 ||
      head.x >= canvas.width ||
      head.y < 0 ||
      head.y >= canvas.height
    ) {
      return true;
    }
    for (let i = 1; i < snake.length; i++) {
      if (head.x === snake[i].x && head.y === snake[i].y) {
        return true;
      }
    }
    return false;
  }

  function handleKeyDown(e) {
    e.preventDefault();
    const keyPressed = e.key.toLowerCase();
    switch (keyPressed) {
      case "arrowleft":
        changeDirection("left");
        break;
      case "arrowup":
        changeDirection("up");
        break;
      case "arrowright":
        changeDirection("right");
        break;
      case "arrowdown":
        changeDirection("down");
        break;
    }
  }

  function startGame() {
    if (gameActive) return;
    resetSnakeGame();
    gameLoop = setInterval(() => {
      update();
      draw();
    }, 150);
  }

  startBtn.addEventListener("click", () => {
    if (!gameActive) {
      startGame();
      gameMessage.textContent =
        "Utilisez les flèches du clavier pour vous déplacer.";
      gameMessage.classList.remove("hidden");
    }
  });
})();
