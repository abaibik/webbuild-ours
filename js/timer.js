loadScript("js/common.js", () => {
  console.log("timer.js ");
});

class Timer {
  constructor(elemToRender) {
    this.elemToRender = elemToRender;
  }

  start(timeout) {
    this.secondsLeft = timeout;
    this.timer = setInterval(this.intervalHandler, 1000);
  }
  stop() {
    clearInterval(this.timer);
  }
  intervalHandler() {
    this.secondsLeft -= 1;
    this.renderSecondsLeft();
    if (this.secondsLeft === 0) {
      this.stop();
    }
  }
  renderSecondsLeft() {
    this.elemToRender.innerHTML = this.secondsLeft;
  }
}
