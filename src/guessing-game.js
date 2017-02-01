class GuessingGame {
    constructor() {
      this.array = [];
      this.left_limit = undefined;
      this.right_limit = undefined;
    }

    setRange(min, max) {
      for (let i = min; i <= max; i++) {
        this.array.push(i);
      }
      this.left_limit = min;
      this.right_limit = max;
    }

    guess() {
      return this.array[Math.ceil((this.right_limit + this.left_limit) / 2)];
    }

    lower() {
      return this.right_limit = Math.ceil((this.right_limit + this.left_limit) / 2);
      return this;
    }

    greater() {
      return this.left_limit = Math.ceil((this.right_limit + this.left_limit) / 2);
      return this;
    }
}

module.exports = GuessingGame;
