// DOM Element selections
const decadesEl = document.getElementById("decades");
const yearsEl = document.getElementById("years");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const millisecondsEl = document.getElementById("milliseconds");

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

// Time variables
let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;
let isRunning = false;

// Helper function to format numbers with leading zeros (e.g., 5 -> "05")
function pad(num, size = 2) {
  let s = "000" + num;
  return s.substr(s.length - size);
}

// Format and update the DOM
function updateDisplay(timeInMilliseconds) {
  // Calculate time components
  const ms = Math.floor((timeInMilliseconds % 1000) / 10);
  const totalSeconds = Math.floor(timeInMilliseconds / 1000);
  const secs = totalSeconds % 60;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const mins = totalMinutes % 60;
  const totalHours = Math.floor(totalMinutes / 60);
  const hrs = totalHours % 24;
  const totalDays = Math.floor(totalHours / 24);
  const days = totalDays % 365;
  const totalYears = Math.floor(totalDays / 365);
  const yrs = totalYears % 10;
  const decades = Math.floor(totalYears / 10);

  // Update DOM elements
  decadesEl.firstChild.textContent = pad(decades);
  yearsEl.firstChild.textContent = pad(yrs);
  daysEl.firstChild.textContent = pad(days);
  hoursEl.firstChild.textContent = pad(hrs);
  minutesEl.firstChild.textContent = pad(mins);
  secondsEl.firstChild.textContent = pad(secs);
  millisecondsEl.firstChild.textContent = pad(ms);
}

// Start Timer
startBtn.addEventListener("click", () => {
  if (!isRunning) {
    isRunning = true;
    startTime = Date.now() - elapsedTime;
    
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      updateDisplay(elapsedTime);
    }, 10); // Updates every 10 milliseconds for smooth millisecond tracking
  }
});

// Stop Timer
stopBtn.addEventListener("click", () => {
  if (isRunning) {
    isRunning = false;
    clearInterval(timerInterval);
  }
});

// Reset Timer
resetBtn.addEventListener("click", () => {
  isRunning = false;
  clearInterval(timerInterval);
  elapsedTime = 0;
  updateDisplay(0);
});