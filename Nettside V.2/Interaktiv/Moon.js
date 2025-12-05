let started = false;

// GAME STATE
let state = "start";

// Write text to window
function write(msg) {
  const box = document.getElementById("textbox");
  box.textContent += msg + "\n";
  box.scrollTop = box.scrollHeight;
}

// Start
document.getElementById("startBtn").addEventListener("click", () => {
  started = true;
  state = "room_start";

  write("You wake up in your room. Its dark, quiet and eerie. Its cold.");
  setButtons("Close Window", "Get up", "Try to sleep");
});

// Restart
document.getElementById("restartBtn").addEventListener("click", () => {
  started = false;
  state = "start";
  document.getElementById("textbox").textContent = "";
  setButtons("Close Window", "Get up", "Try to sleep");
});

// Helper to change all button texts at once
function setButtons(b1, b2, b3) {
  document.getElementById("btn1").textContent = b1;
  document.getElementById("btn2").textContent = b2;
  document.getElementById("btn3").textContent = b3;
}

// MAIN DECISION SYSTEM
document.getElementById("btn1").addEventListener("click", () => {
  if (!started) return write("Press START first.");

  switch (state) {

    case "room_start":
      write("You look around. The walls feel wrong.");
      state = "looked";
      setButtons("Inspect Walls", "Approach Door", "Listen");
      break;

    case "looked":
      write("The walls pulse slightly. They are alive.");
      state = "walls_alive";
      setButtons("Touch Wall", "Back Away", "Whisper");
      break;

    case "walls_alive":
      write("It feels warm… too warm.");
      break;
  }
});

document.getElementById("btn2").addEventListener("click", () => {
  if (!started) return write("Press START first.");

  switch (state) {

    case "room_start":
      write("You check the door. It's vibrating slightly.");
      state = "door_checked";
      setButtons("Look at Floor", "Try Handle", "Call Out");
      break;

    case "door_checked":
      write("The handle turns… something pulls back.");
      state = "door_alive";
      setButtons("Pull Harder", "Let Go", "Step Back");
      break;

    case "door_alive":
      write("You feel something pulling from the other side.");
      break;
  }
});

document.getElementById("btn3").addEventListener("click", () => {
  if (!started) return write("Press START first.");

  switch (state) {

    case "room_start":
      write("Your voice echoes… then something whispers back.");
      state = "heard_whisper";
      setButtons("Answer", "Stay Quiet", "Move Away");
      break;

    case "heard_whisper":
      write("The whisper repeats your own words… wrong and distorted.");
      break;
  }
});
