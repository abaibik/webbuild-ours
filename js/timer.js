loadScript("js/common.js", () => {
  console.log("timer.js ");
});

class Timer {
  constructor(renderCallback) {
    this.renderCallback = renderCallback;
    this.intervalHandler = this.intervalHandler.bind(this);
    this.stop = this.stop.bind(this);
  }

  start(timeout) {
    if (this.timer) {
      return;
    }
    this.timeout = timeout;
    this.secondsLeft = timeout;
    this.timer = setInterval(this.intervalHandler, 1000);
    this.renderSecondsLeft();
  }
  stop() {
    clearInterval(this.timer);
    this.timer = undefined;
  }
  intervalHandler() {
    this.secondsLeft -= 1;
    this.renderSecondsLeft();
    if (this.secondsLeft === 0) {
      this.stop();
    }
  }
  renderSecondsLeft() {
    this.renderCallback(this.secondsLeft, this.timeout);
  }
}

const buttonStart = document.getElementById("btn-start");
const buttonStop = document.getElementById("btn-stop");
const progressTimer = document.getElementById("progress-timer");
const inputTimer = document.getElementById("input-timer");

const timer = new Timer((secondsLeft, total) => {
  progressTimer.innerHTML = secondsLeft;
  const percent = (secondsLeft / total) * 100;
  progressTimer.style = `width: ${percent}%`;
});

function run() {
  const timeout = parseInt(inputTimer.value);
  timer.start(timeout);
}

buttonStart.addEventListener("click", run);
inputTimer.addEventListener("keydown", (e) => {
  if (["Enter", "NumpadEnter"].includes(e.code)) {
    run();
  }
});

buttonStop.addEventListener("click", timer.stop);
