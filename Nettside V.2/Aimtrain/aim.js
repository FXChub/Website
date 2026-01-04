// Deler inn elementer fra filen og definerer variabler som den trekker informasjon fra
const gameArea = document.getElementById('gameArea');
const target = document.getElementById('target');
const startBtn = document.getElementById('startBtn');
const scoreEl = document.getElementById('score');
const missesEl = document.getElementById('misses');
const levelEl = document.getElementById('level');
const endBtn = document.getElementById('endBtn');

// Tall somm senere går opp under spillet
let score = 0;
let misses = 0;
let level = 1;

// Vannskelighets innstillinger
let targetSize = 60;          
let visibleTime = 1200;       
let timerId = null;
let gameRunning = false;

// Setter blinken på en tilfeldig posisjon innenfor spillområdet
function randomPosition(size) {
  const areaRect = gameArea.getBoundingClientRect();
  const maxX = areaRect.width - size;
  const maxY = areaRect.height - size;
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;
  return { x, y };
}

// Oppdaterer poeng, bom og nivå på skjermen
function updateUI() {
  scoreEl.textContent = score;
  missesEl.textContent = misses;
  levelEl.textContent = level;
}

function moveTarget() {
  // Forandrer størrelse på blinken etter vanskelighetsgrad
  target.style.width = targetSize + 'px';
  target.style.height = targetSize + 'px';

  const pos = randomPosition(targetSize);
  target.style.left = pos.x + 'px';
  target.style.top = pos.y + 'px';
  target.style.display = 'block';

  // Starter en ny timer
  if (timerId) clearTimeout(timerId);
  timerId = setTimeout(() => {
    // Hvis tiden går ut uten klikk, teller det som en bom
    misses++;
    updateUI();
    if (gameRunning) moveTarget();
  }, visibleTime);
}

function increaseDifficulty() {
  level++;
  // Gjør blinken mindre, men aldri under 20 px
  targetSize = Math.max(20, targetSize - 4);
  // Blinken forsvinner, men aldri under 400 ms
  visibleTime = Math.max(400, visibleTime - 70);
}

target.addEventListener('click', (e) => {
  e.stopPropagation(); // Registrerer bare treff på blinken
  if (!gameRunning) return;

  score++;
  updateUI();

  // Etter hvert 5. poeng, øk vanskelighetsgraden
  if (score % 5 === 0) {
    increaseDifficulty();
  }
// Flytter blinken til en ny posisjon
  moveTarget();
});

gameArea.addEventListener('click', () => {
  // Bom utenfor blinken
  if (!gameRunning) return;
  misses++;
  updateUI();
});

startBtn.addEventListener('click', () => {
  // Restarter all statistikk og starter spillet
    score = 0;
    misses = 0;
    level = 1;
    targetSize = 60;
    visibleTime = 1200;
    updateUI();

endBtn.addEventListener('click', () => {
  gameRunning = false;          // Stop koden
  clearTimeout(timerId);
  target.style.display = 'none';// Gjem blinken


  gameRunning = true;
  moveTarget();
});
)
