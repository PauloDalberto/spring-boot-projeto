document.addEventListener("DOMContentLoaded", function() {
  let gameStarted = false;
  let currentRound = 0;
  let sequence = [];
  let playerSequence = [];
  let highlighting = false;
  let gamePaused = false;
  let scores = [];

  const roundContainer = document.querySelector(".round-container"); 
  const colors = ["green", "red", "yellow", "blue"];

  async function startGame() {
    if (!gameStarted) {
      gameStarted = true;
      currentRound = 3;
      updateRoundElement();
      await countdownRound();
      gamePaused = false;
      generateNextColor();
    }
  }

  function restartGame() {
    gameStarted = false;
    currentRound = 0;
    updateRoundElement();
    sequence = [];
    playerSequence = [];
  }

  document.querySelector(".start-game-button").addEventListener("click", function() {
    if (gameStarted) {
      restartGame();
    } else {
      startGame();
    }
  });

  function playAudio(color) {
    const audioElement = document.getElementById(`audio-${color}`);
    audioElement.play();
  }

  function updateRoundElement() {
    roundContainer.textContent = currentRound;
    roundContainer.style.fontSize = "40px"; 
  }
  
  async function countdownRound() {
    if (currentRound > 0) {
      updateRoundElement();
      currentRound--;
      await new Promise(resolve => setTimeout(resolve, 1000));
      await countdownRound();
    } else {
      updateRoundElement();
    }
  }

  function generateNextColor() {
    if (!gamePaused) {
      const randomIndex = Math.floor(Math.random() * colors.length);
      const randomColor = colors[randomIndex];
      sequence.push(randomColor);
      playColorSequence();
    }
  }

  function playColorSequence() {
    highlighting = true;
    let i = 0;
    const interval = setInterval(function() {
      if (i >= sequence.length) {
        clearInterval(interval);
        highlighting = false;
        return;
      }
      const color = sequence[i];
      playAudio(color); 
      markWhiteColor(color);
      setTimeout(() => deselectWhiteColor(color), 500);
      i++;
    }, 1000);
  }

  function markWhiteColor(color) {
    document.querySelector(`.${color}-game-container`).style.backgroundColor = "white";
  }

  function deselectWhiteColor(color) {
    document.querySelector(`.${color}-game-container`).style.backgroundColor = "";
  }

  document.querySelectorAll(".game button").forEach(button => {
    button.addEventListener("click", function() {
      if (gameStarted && !highlighting) {
        const color = button.className.split("-")[0];
        playAudio(color);
        markWhiteColor(color);
        setTimeout(() => deselectWhiteColor(color), 500);

        playerSequence.push(color);

        if (playerSequence[playerSequence.length - 1] !== sequence[playerSequence.length - 1]) {
          playAudio("error"); 
          alert("Você errou! Fim de jogo.");
          gamePaused = true;
          scores.push(currentRound);
          updateResultsList();
          restartGame();
        }

        if (playerSequence.length === sequence.length) {
          if (JSON.stringify(playerSequence) === JSON.stringify(sequence)) {
            currentRound++;
            playerSequence = [];
            updateRoundElement();
            generateNextColor();
          } else {
            playAudio("error");
            alert("Você errou! Fim de jogo.");
            gamePaused = true;
            scores.push(currentRound);
            updateResultsList();
            restartGame();
          }
        }
      }
    });
  });

  function updateResultsList() {
    const resultsList = document.getElementById("results-list");
    resultsList.innerHTML = "";

    scores.forEach(score => {
      const listItem = document.createElement("li");
      listItem.textContent = `Pontuação: ${score}`;
      resultsList.appendChild(listItem);
    });
  }
});
