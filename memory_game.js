const fruits = [
  "🍎",
  "🍎",
  "🍌",
  "🍌",
  "🍇",
  "🍇",
  "🍓",
  "🍓",
  "🍉",
  "🍉",
  "🍒",
  "🍒",
];

fruits.sort(() => Math.random() - 0.5);

const moves = document.getElementById("moves");
const pairs = document.getElementById("pairs");
const action = document.querySelector(".action");

let firstIndex = null;
let secondIndex = null;
let movesCount = 0;
let pairsCount = 0;
let lock = false;

function flip(index) {
  const card = document.getElementById("card" + index);

  if (lock || card.textContent !== "❓") {
    return;
  }

  card.textContent = fruits[index];

  if (firstIndex === null) {
    firstIndex = index;
  } else if (secondIndex === null) {
    secondIndex = index;
    movesCount++;
    moves.textContent = movesCount;

    if (fruits[firstIndex] === fruits[secondIndex]) {
      pairsCount++;
      pairs.textContent = pairsCount;
      firstIndex = null;
      secondIndex = null;

      if (pairsCount === 6) {
        setTimeout(function () {
          alert("🎉 Яллаа! " + movesCount + " нүүдлээр дуусгалаа.");
        }, 300);
      }
    } else {
      lock = true;
      const a = document.getElementById("card" + firstIndex);
      const b = document.getElementById("card" + secondIndex);
      firstIndex = null;
      secondIndex = null;

      setTimeout(function () {
        a.textContent = "❓";
        b.textContent = "❓";
        lock = false;
      }, 800);
    }
  }
}

action.addEventListener("click", function () {
  if (lock) {
    return;
  }

  lock = true;

  for (let i = 0; i < fruits.length; i++) {
    const card = document.getElementById("card" + i);
    if (card.textContent === "❓") {
      card.textContent = fruits[i];
    }
  }

  setTimeout(function () {
    for (let i = 0; i < fruits.length; i++) {
      document.getElementById("card" + i).textContent = "❓";
    }
    firstIndex = null;
    secondIndex = null;
    lock = false;
  }, 3000);
});

