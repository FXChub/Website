const gameArea = document.getElementById('gameArea');
const target = document.getElementById('target');
const startBtn = document.getElementById('startBtn');
const scoreEl = document.getElementById('score');
const missesEl = document.getElementById('misses');
const levelEl = document.getElementById('level');
const endBtn = document.getElementById('endBtn');


let score = 0;
let misses = 0;
let level = 1;

// difficulty settings
let targetSize = 60;          // starting size in px
let visibleTime = 1200;       // ms the target stays before counting as miss
let timerId = null;
let gameRunning = false;

function randomPosition(size) {
  const areaRect = gameArea.getBoundingClientRect();
  const maxX = areaRect.width - size;
  const maxY = areaRect.height - size;
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;
  return { x, y };
}

function updateUI() {
  scoreEl.textContent = score;
  missesEl.textContent = misses;
  levelEl.textContent = level;
}

function moveTarget() {
  // adjust size and difficulty based on score / level
  target.style.width = targetSize + 'px';
  target.style.height = targetSize + 'px';

  const pos = randomPosition(targetSize);
  target.style.left = pos.x + 'px';
  target.style.top = pos.y + 'px';
  target.style.display = 'block';

  // clear old timer and start a new one
  if (timerId) clearTimeout(timerId);
  timerId = setTimeout(() => {
    // if not clicked in time -> miss
    misses++;
    updateUI();
    if (gameRunning) moveTarget();
  }, visibleTime);
}

function increaseDifficulty() {
  level++;
  // make target smaller, but not less than 20px
  targetSize = Math.max(20, targetSize - 4);
  // make it disappear faster, but not less than 400ms
  visibleTime = Math.max(400, visibleTime - 70);
}

target.addEventListener('click', (e) => {
  e.stopPropagation(); // prevent counting as click on gameArea
  if (!gameRunning) return;

  score++;
  updateUI();

  // every 5 hits -> more difficult
  if (score % 5 === 0) {
    increaseDifficulty();
  }

  moveTarget();
});

gameArea.addEventListener('click', () => {
  // miss if player clicks empty area while game is running
  if (!gameRunning) return;
  misses++;
  updateUI();
});

startBtn.addEventListener('click', () => {
  // reset stats and difficulty
    score = 0;
    misses = 0;
    level = 1;
    targetSize = 60;
    visibleTime = 1200;
    updateUI();

endBtn.addEventListener('click', () => {
  gameRunning = false;          // stop game logic
  clearTimeout(timerId);        // stop pending moveTarget timeout
  target.style.display = 'none';// hide target
});


  gameRunning = true;
  moveTarget();
});
