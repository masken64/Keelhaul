let currPlayer = "O";
let chanceNum = 0;
const playerDiv = document.querySelectorAll(".playdiv");
playerDiv.forEach((pdiv) => pdiv.addEventListener("click", handleChance));

function handleChance(event) {
  const guide = document.querySelector(".header");
  const feedback = document.querySelector("#feedback");
  feedback.play();
  const ost = document.querySelector("#ost");
  ost.play();
  if (event.target.classList.contains("clicked")) {
    guide.textContent = "Ye fool! That chance be already taken!";
  } else if (currPlayer == "X") {
    chanceNum++;
    event.target.textContent = "O";
    event.target.classList.add("clicked");
    currPlayer = "O";
    guide.textContent = "X's moment to wield the power o' the sea!";
  } else {
    chanceNum++;
    event.target.textContent = "X";
    currPlayer = "X";
    event.target.classList.add("clicked");
    guide.textContent = "O's chance to dance with fate upon the plank!";
  }
  const winner = checkWinner();
  if (winner) {
    guide.textContent = `${winner} reigns victorious! Let O face Davy Jones's locker for defyin' the code!`;
    const overlay = document.querySelector("#overlay");
    overlay.classList.add("overlay");
  }
}

function checkWinner() {
  const winningStates = [
    ["one", "two", "three"],
    ["four", "five", "six"],
    ["seven", "eight", "nine"],
    ["one", "four", "seven"],
    ["two", "five", "eight"],
    ["three", "six", "nine"],
    ["one", "five", "nine"],
    ["three", "five", "seven"],
  ];

  for (let i of winningStates) {
    const [a, b, c] = i;
    const A = document.getElementById(a);
    const B = document.getElementById(b);
    const C = document.getElementById(c);
    if (
      A.textContent != "" &&
      A.textContent == B.textContent &&
      B.textContent == C.textContent &&
      C.textContent == A.textContent
    ) {
      return A.textContent;
    }
  }
  return null;
}

/*
below is a failed attempt ;)  

const startButton = document.querySelector('#startGame');
startButton.addEventListener('mouseover',playLoadSound);
function playLoadSound (event){
    const laughSound = document.querySelector('#laugh');
    laughSound.play();
}*/
