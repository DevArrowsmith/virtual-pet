const Pet = require("../src/pet");

let fido;

describe("Pet", () => {

    beforeEach(() => {
        fido = new Pet("Fido");
    });

    it("returns an object", () => {
        expect(new Pet("Pompompur")).toBeInstanceOf(Object);
    });
    it("returns an object with a specified 'name' value", () => {
        expect(fido.name).toBe("Fido");
    });
    it("returns an object with an initial 'age' value of 0", () => {
        expect(fido.age).toBe(0);
    });
    it("returns an object with an initial 'hunger' value of 0", () => {
        expect(fido.hunger).toBe(0);
    });
    it("returns an object with an initial 'fitness' value of 10", () => {
        expect(fido.fitness).toBe(10);
    });
    it("has a growUp method that increases the 'age' value by 1", () => {
        expect(fido.age).toBe(0);
        fido.growUp();
        expect(fido.age).toBe(1);
        fido.growUp();
        fido.growUp();
        expect(fido.age).toBe(3);
    });
    it("has a growUp method that increases the 'hunger' value by 10", () => {
        expect(fido.hunger).toBe(0);
        fido.growUp();
        expect(fido.hunger).toBe(5);
        fido.growUp();
        expect(fido.hunger).toBe(10);
    });
    it("has a growUp method that decreases the 'fitness' value by 3", () => {
        expect(fido.fitness).toBe(10);
        fido.growUp();
        expect(fido.fitness).toBe(7);
        fido.growUp();
        fido.growUp();
        expect(fido.fitness).toBe(1);
    });
    it("has a feed method that decreases the 'hunger' value by 3", () => {
        fido.growUp();
        expect(fido.hunger).toBe(5);
        fido.feed();
        expect(fido.hunger).toBe(2);
    });
    it("has a feed method that cannot decrease the 'hunger' value below 0", () => {
        fido.growUp();
        expect(fido.hunger).toBe(5);
        fido.feed();
        fido.feed();
        expect(fido.hunger).toBe(0);
        fido.feed();
        expect(fido.hunger).toBe(0);
    });
    it("has an exercise method that increases the 'fitness' value by 4", () => {
        fido.growUp();
        fido.growUp();
        expect(fido.fitness).toBe(4);
        fido.exercise();
        expect(fido.fitness).toBe(8)
    });
    it("has an exercise method that cannot increase the 'fitness' value beyond 10", () => {
        fido.growUp();
        expect(fido.fitness).toBe(7);
        fido.exercise();
        expect(fido.fitness).toBe(10)
        fido.exercise();
        expect(fido.fitness).toBe(10)
    });
    it("has a checkUp method that returns the string 'I need a walk!' if fitness is 3 or lower.", () => {

        fido.fitness = 3;
        expect(fido.checkUp()).toBe("I need a walk!");
        fido.fitness = 1;
        expect(fido.checkUp()).toBe("I need a walk!");
    });
    it("has a checkUp method that returns the string 'I'm hungry!' if hunger is 5 or higher.", () => {

        fido.hunger = 5;
        expect(fido.checkUp()).toBe("I'm hungry!");
        fido.hunger = 9;
        expect(fido.checkUp()).toBe("I'm hungry!");
    });
    it("has a checkUp method that returns the string 'I'm hungry and I need a walk!' if hunger is 5 or higher and fitness is 3 or lower.", () => {
        fido.hunger = 5;
        fido.fitness = 3;
        expect(fido.checkUp()).toBe("I'm hungry and I need a walk!")
        fido.hunger = 9;
        fido.fitness = 1;
        expect(fido.checkUp()).toBe("I'm hungry and I need a walk!");        
    });
    it("has a checkUp method that returns the string 'I feel great!' if hunger is 4 or lower and fitness is 4 or higher.", () => {
        expect(fido.checkUp()).toBe("I feel great!")
        fido.hunger = 4;
        fido.fitness = 4;
        expect(fido.checkUp()).toBe("I feel great!");        
    });
    it("has an isAlive property with an initial value of true.", () => {
        expect(fido.isAlive).toBe(true);
    });
    it("has an isAlive property that returns false when hunger is 10 or above.", () => {
        fido.hunger = 9;
        expect(fido.isAlive).toBe(true);
        fido.hunger = 10;
        expect(fido.isAlive).toBe(false);
    });
    it("has an isAlive property that returns false when fitness is 0 or lower.", () => {
        fido.fitness = 1;
        expect(fido.isAlive).toBe(true);
        fido.fitness = 0;
        expect(fido.isAlive).toBe(false);
    });
});