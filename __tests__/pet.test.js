const Pet = require("../src/pet");

describe("Pet", () => {
    it("returns an object", () => {
        expect(new Pet("Fido")).toBeInstanceOf(Object);
    });
    it("returns an object with a specified 'name' value", () => {
        expect(new Pet("Pompompur").name).toBe("Pompompur");
    });
    it("returns an object with an initial 'age' value of 0", () => {
        expect(new Pet("Sparky Buttons").age).toBe(0);
    })
    it("returns an object with an initial 'hunger' value of 0", () => {
        expect(new Pet("This Guy").hunger).toBe(0);
    })
    it("has a growUp method that increases the 'age' value by 1", () => {
        const whiskeridoo = new Pet("Whiskeridoo");
        expect(whiskeridoo.age).toBe(0);
        whiskeridoo.growUp();
        expect(whiskeridoo.age).toBe(1);
        whiskeridoo.growUp();
        whiskeridoo.growUp();
        expect(whiskeridoo.age).toBe(3);
    })
});