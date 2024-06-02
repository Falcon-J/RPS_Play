let botScore = 0;
let userScore = 0;

const choice = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreCount = document.querySelector("#user-score");
const botScoreCount = document.querySelector("#bot-score");
const reset = document.querySelector(".refresh");

// Function to add a ring around the selected choice
const addRing = (element) => {
  element.classList.add("selected");
};

const showWinner = (userWin) => {
  if (userWin) {
    console.log("You Win!");
    msg.innerText = "You Win!";
    userScoreCount.innerText++;
    msg.style.backgroundColor = "green";
  } else {
    console.log("You Lose!");
    msg.innerText = "You Lose!";
    msg.style.backgroundColor = "red";
    botScoreCount.innerText++;
  }
};

const drawGame = () => {
  console.log("Game was draw");
  msg.innerText = "Game was draw. Play again!";
  msg.style.backgroundColor = "DarkGrey";
};

// Logic for bot choice
const genBotChoice = () => {
  // rock | paper | scissor
  const options = ["rock", "paper", "scissor"];
  const randIndex = Math.floor(Math.random() * 3);
  return options[randIndex];
};

const gamelogic = (userChoice) => {
  console.log("User choice = ", userChoice);
  const botChoice = genBotChoice();
  console.log("Bot choice = ", botChoice);

  if (userChoice === botChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = botChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = botChoice === "scissor" ? false : true;
    } else {
      userWin = botChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};

choice.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    gamelogic(userChoice);
  });
});

reset.addEventListener("click", () => {
  // Reset scores and message
  botScore = 0;
  userScore = 0;
  botScoreCount.innerText = botScore;
  userScoreCount.innerText = userScore;
  msg.innerText = "Let's play!";
  msg.style.backgroundColor = "rgb(16, 17, 61)";
});


//theme
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check if the user has a saved preference, otherwise default to dark mode
body.classList.add(localStorage.getItem('theme') || 'dark-mode');

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  themeToggle.innerText = body.classList.contains('dark-mode') ? 'Toggle Light Mode' : 'Toggle Dark Mode';
  localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode');
});
