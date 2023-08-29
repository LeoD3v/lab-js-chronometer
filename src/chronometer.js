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
    }, 1000);
  }

  getMinutes() {
    let number = this.currentTime / 60;
    return Math.floor(number);
    // ... your code goes here
  }

  getSeconds() {
    return this.currentTime % 60;
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    let str = value.toString();
    if (str.length < 2) {
      return "0".concat(str);
    } else return str;
  }

  stop() {
    clearInterval(this.intervalId);
    // ... your code goes here
  }

  reset() {
    this.currentTime = 0;
    // ... your code goes here
  }

  split() {
    const min = this.computeTwoDigitNumber(this.getMinutes());
    const sec = this.computeTwoDigitNumber(this.getSeconds());

    return `${min}:${sec}`;

    // ... your code goes here
  }
}
