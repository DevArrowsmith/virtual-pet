function Pet (name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
};

Pet.prototype = {
    growUp () {
        this.age += 1;
        this.fitness -= 3;
    }
};

module.exports = Pet;