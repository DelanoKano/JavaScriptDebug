const hands = ["rock", "paper", "scissors"];
const leftHand = document.getElementById("left");
const rightHand = document.getElementById("right");
const winnerText = document.querySelector(".vs + h1:last-child");
const roundResults = [
  document.getElementById("r1"),
  document.getElementById("r2"),
  document.getElementById("r3"),
];

const selections = document.querySelectorAll(".selections");
selections.forEach((selection) => {
  selection.addEventListener("click", () => {
    const playerChoice = selection.id;
    const computerChoice = hands[Math.floor(Math.random() * 3)];

    leftHand.src = `${playerChoice}.png`;
    rightHand.src = `${computerChoice}.png`;

    let winner = checkWinner(playerChoice, computerChoice);
    winnerText.textContent = `Winner: ${winner}`;

    updateRoundResults(winner);
  });
});

function checkWinner(player, computer) {
  if (player === computer) return "Draw";
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function updateRoundResults(winner) {
  for (let i = 0; i < roundResults.length; i++) {
    if (roundResults[i].textContent === "-") {
      roundResults[i].textContent = winner;
      break;
    }
  }
}
