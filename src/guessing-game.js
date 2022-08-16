class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.minValue = min;
        this.maxValue = max;
    }

    guess() {
        return Math.round((this.maxValue + this.minValue) / 2);
    }

    lower() {
        return this.maxValue = (Math.round((this.maxValue + this.minValue) / 2));
    }

    greater() {
        return this.minValue = (Math.round((this.maxValue + this.minValue) / 2));
    }
}

module.exports = GuessingGame;