const Pet = require("../src/pet");

let fido;

describe("Pet", () => {
    beforeEach(() => {
        fido = new Pet("Fido");
    });
    it("returns an object", () => {
        expect(new Pet("Pompompur")).toBeInstanceOf(Object);
    });
    it("has a specified 'name' value", () => {
        expect(fido.name).toBe("Fido");
    });
    it("has an initial 'age' value of 0", () => {
        expect(fido.age).toBe(0);
    });
    it("has an initial 'hunger' value of 0", () => {
        expect(fido.hunger).toBe(0);
    });
    it("has an initial 'fitness' value of 10", () => {
        expect(fido.fitness).toBe(10);
    });
    it("has an initial 'children' value of an empty array", () => {
        expect(fido.children).toEqual([]);
    });

    describe("Pet.growUp()", () => {
        it("increases the 'age' value by 1", () => {
            expect(fido.age).toBe(0);
            fido.growUp();
            expect(fido.age).toBe(1);
        });
        it("increases the 'hunger' value by 5", () => {
            expect(fido.hunger).toBe(0);
            fido.growUp();
            expect(fido.hunger).toBe(5);
        });
        it("decreases the 'fitness' value by 3", () => {
            expect(fido.fitness).toBe(10);
            fido.growUp();
            expect(fido.fitness).toBe(7);
        });
        it("throws an error if isAlive is false", () => {
            fido.age = 30;
            expect(fido.isAlive).toBe(false);
            expect(() => fido.growUp()).toThrow('Fido is no longer alive :(');
        });
    });

    describe("Pet.feed()", () => {
        it("decreases the 'hunger' value by 3", () => {
            fido.hunger = 5;
            fido.feed();
            expect(fido.hunger).toBe(2);
        });
        it("cannot decrease the 'hunger' value below 0", () => {
            fido.hunger = 2;
            fido.feed();
            expect(fido.hunger).toBe(0);
        });
        it("throws an error if isAlive is false", () => {
            fido.age = 30;
            expect(fido.isAlive).toBe(false);
            expect(() => fido.feed()).toThrow('Fido is no longer alive :(');
        });
    });

    describe("Pet.exercise()", () => {
        it("increases the 'fitness' value by 4", () => {
            fido.fitness = 4;
            fido.exercise();
            expect(fido.fitness).toBe(8)
        });
        it("cannot increase the 'fitness' value beyond 10", () => {
            fido.fitness = 9;
            fido.exercise();
            expect(fido.fitness).toBe(10)
        });
        it("throws an error if isAlive is false", () => {
            fido.age = 30;
            expect(fido.isAlive).toBe(false);
            expect(() => fido.exercise()).toThrow('Fido is no longer alive :(');
        });
    });

    describe("Pet.checkUp()", () => {
        it("returns the string 'I need a walk!' if fitness is 3 or lower", () => {
            fido.fitness = 3;
            expect(fido.checkUp()).toBe("I need a walk!");
            fido.fitness = 1;
            expect(fido.checkUp()).toBe("I need a walk!");
        });
        it("returns the string 'I'm hungry!' if hunger is 5 or higher", () => {
            fido.hunger = 5;
            expect(fido.checkUp()).toBe("I'm hungry!");
            fido.hunger = 9;
            expect(fido.checkUp()).toBe("I'm hungry!");
        });
        it("returns the string 'I'm hungry and I need a walk!' if hunger is 5 or higher and fitness is 3 or lower", () => {
            fido.hunger = 5;
            fido.fitness = 3;
            expect(fido.checkUp()).toBe("I'm hungry and I need a walk!")
            fido.hunger = 9;
            fido.fitness = 1;
            expect(fido.checkUp()).toBe("I'm hungry and I need a walk!");        
        });
        it("returns the string 'I feel great!' if hunger is 4 or lower and fitness is 4 or higher", () => {
            expect(fido.checkUp()).toBe("I feel great!")
            fido.hunger = 4;
            fido.fitness = 4;
            expect(fido.checkUp()).toBe("I feel great!");        
        });
        it("returns the string '{pet.name} is no longer alive :(' if isAlive is false", () => {
            fido.age = 30;
            expect(fido.isAlive).toBe(false);
            expect(fido.checkUp()).toBe('Fido is no longer alive :(');
        });
    });


    describe("Pet.haveChild()", () => {
        beforeEach(() => {
            fido.haveChild("whiskeridoo");
        });
        afterEach(() => {
            fido.children = [];
        });
        it("creates a new Pet object and adds it to the parent pet's children array", () => {
            expect(fido.children[0] instanceof Pet).toBe(true);
        });
        it("creates a new Pet object with the specified name value", () => {
            expect(fido.children[0].name).toBe("whiskeridoo");
        });
        it("throws an error if isAlive is false", () => {
            fido.age = 30;
            expect(fido.isAlive).toBe(false);
            expect(() => fido.haveChild()).toThrow('Fido is no longer alive :(');
        });
    });

    describe("Pet.isAlive", () => {
        it("has an initial value of true.", () => {
            expect(fido.isAlive).toBe(true);
        });
        it("returns false when hunger is 10", () => {
            fido.hunger = 9;
            expect(fido.isAlive).toBe(true);
            fido.hunger = 10;
            expect(fido.isAlive).toBe(false);
        });
        it("returns false when fitness is 0", () => {
            fido.fitness = 1;
            expect(fido.isAlive).toBe(true);
            fido.fitness = 0;
            expect(fido.isAlive).toBe(false);
        });
        it("returns false when age is 30", () => {
            fido.age = 29;
            expect(fido.isAlive).toBe(true);
            fido.age = 30;
            expect(fido.isAlive).toBe(false);
        });
    });
});