const INITIAL_AGE = 0;
const INITIAL_HUNGER = 0
const INITIAL_FITNESS = 10;

const MAX_FITNESS = 10;
const FITNESS_THRESHOLD = 3;

const MIN_HUNGER = 0;
const HUNGER_THRESHOLD = 5

const FEED_HUNGER_DECREASE = 3;
const EXERCISE_FITNESS_INCREASE = 4;

const AGING_HUNGER_INCREASE = 5;
const AGING_FITNESS_DECREASE = 3;

function Pet (name) {
    this.name = name;
    this.age = INITIAL_AGE;
    this.hunger = INITIAL_HUNGER;
    this.fitness = INITIAL_FITNESS;
};

Pet.prototype = {
    get isAlive () {
        return this.age < 30 && this.hunger <10 && this.fitness > 0;
    },
    growUp () {
        if (!this.isAlive) {
            throw new Error("Your pet is no longer alive :(");
        };
        this.age ++;
        this.hunger += AGING_HUNGER_INCREASE;
        this.fitness -= AGING_FITNESS_DECREASE;
    },
    feed () {
        if (!this.isAlive) {
            throw new Error("Your pet is no longer alive :(");
        };
        this.hunger = Math.max(this.hunger - FEED_HUNGER_DECREASE, MIN_HUNGER);
    },
    exercise () {
        if (!this.isAlive) {
            throw new Error("Your pet is no longer alive :(");
        };
        this.fitness = Math.min(this.fitness + EXERCISE_FITNESS_INCREASE, MAX_FITNESS);
    },
    checkUp () {
        if(this.fitness <= FITNESS_THRESHOLD && this.hunger >= HUNGER_THRESHOLD) {
            return "I'm hungry and I need a walk!"
        } else if (this.fitness <= FITNESS_THRESHOLD) {
            return "I need a walk!"
        } else if (this.hunger >= HUNGER_THRESHOLD) {
            return "I'm hungry!"
        } else {
            return "I feel great!"
        };
    }
};

module.exports = Pet;