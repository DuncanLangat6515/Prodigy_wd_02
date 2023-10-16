let secretNumber;
let attempts = 0;

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function startGame() {
  secretNumber = generateRandomNumber(1, 100);
  attempts = 0;
  document.getElementById('feedback').innerText = '';
}

function checkGuess() {
  const userGuess = parseInt(document.getElementById('userGuess').value);

  if (isNaN(userGuess)) {
    alert('Please enter a valid number.');
    return;
  }

  attempts++;

  if (userGuess === secretNumber) {
    alert(`Congratulations! You guessed the number ${secretNumber} correctly in ${attempts} attempts.`);
    startGame();
  } else if (userGuess < secretNumber) {
    document.getElementById('feedback').innerText = 'Too low! Try again.';
  } else {
    document.getElementById('feedback').innerText = 'Too high! Try again.';
  }
}

function resetGame() {
  startGame();
  document.getElementById('userGuess').value = '';
  document.getElementById('feedback').innerText = '';
}

// Start the game initially
startGame();
