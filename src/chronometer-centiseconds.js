class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    // ... your code goes here
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) printTimeCallback();
    }, 1000 / 100);
  }

  getMinutes() {
    // ... your code goes here

    return Math.floor(this.currentTime / 6000);
  }

  getSeconds() {
    let sec = Math.floor(this.currentTime / 100) % 60;
    // ... your code goes here
    return sec;
  }

  getCentiseconds() {
    if (this.currentTime === null) {
      return 0;
    }
    return Math.floor(this.currentTime % 100);
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
  }

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}
