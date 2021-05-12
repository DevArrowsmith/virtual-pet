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
});