let [hours, minutes, seconds] = [0, 0, 0];
let display = document.getElementById("display");
let timer = null;
let lapContainer = document.getElementById("laps");

function updateDisplay() {
  display.innerText =
    (hours < 10 ? "0" + hours : hours) + ":" +
    (minutes < 10 ? "0" + minutes : minutes) + ":" +
    (seconds < 10 ? "0" + seconds : seconds);
}

function start() {
  if (timer !== null) return;
  timer = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    updateDisplay();
  }, 1000);
}

function pause() {
  clearInterval(timer);
  timer = null;
}

function reset() {
  clearInterval(timer);
  timer = null;
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
  lapContainer.innerHTML = "";
}

function lap() {
  const li = document.createElement("li");
  li.textContent = display.innerText;
  lapContainer.appendChild(li);
}
