// strimanga.js

class Strimanga {
  constructor() {
    this.tasks = [];
    this.intervalId = null;
  }

  scheduleTask(task, interval) {
    this.tasks.push({ task, interval });
    if (!this.intervalId) {
      this.intervalId = setInterval(this.runTasks.bind(this), interval);
    }
  }

  runTasks() {
    this.tasks.forEach(({ task, interval }, index) => {
      task();
    });
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
}

module.exports = Strimanga;
