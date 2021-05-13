const Pet = require("../src/pet");

describe("Pet", () => {

    beforeAll(() => {
        let fido = {};
    })

    beforeEach(() => {
        fido = new Pet("Fido");
    });

    afterEach(() => {
        fido = {};
    })

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
    it("has a feed method that cannot decrease the 'hunger' value below 3", () => {
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
});