const refs = {
  startBtn: document.querySelector('button[data-action-start]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
  clockface: document.querySelector('.js-clockface'),
};

class Timer {
  constructor() {
    this.intervalId = null;
    this.isActive = false;
    this.initTime = null;
  }

  start() {
    if (this.isActive) return;

    this.initTime = Date.now();

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const diff = currentTime - this.initTime;
      this.tick(diff);
    }, 100);

    this.isActive = true;
  }

  stop() {
    if (!this.isActive) return;

    clearInterval(this.intervalId);
    this.isActive = false;
  }

  tick(milliseconds) {
    const time = this.parseTime(milliseconds);
    render(time);
  }

  parseTime(milliseconds) {
    const ms = milliseconds % 1000;
    const seconds = Math.round(milliseconds / 1000);
    const minutes = Math.round(seconds / 60);
    const hours = Math.round(minutes / 60);

    return { hours, minutes: minutes % 60, seconds: seconds % 60, ms };
  }
}

const timer = new Timer();

refs.startBtn.addEventListener('click', () => {
  timer.start();
});

refs.stopBtn.addEventListener('click', () => {
  timer.stop();
  refs.clockface.innerHTML = '00:00:00:0000';
});

function render(time) {
  const markup = timeTemplate(time);
  refs.clockface.innerHTML = markup;
}

function timeTemplate({ hours, minutes, seconds, ms }) {
  return `${padStart(hours)}:${padStart(minutes)}:${padStart(seconds)}:${ms
    .toString()
    .padStart(4, '0')}`;
}

function padStart(num) {
  return num.toString().padStart(2, '0');
}
