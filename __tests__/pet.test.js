const Pet = require("../src/pet");

describe('Pet', () => {
    it('returns an object', () => {
        expect(new Pet("Fido")).toBeInstanceOf(Object);
    });
    it('returns an object with a specified name property', () => {
        expect(new Pet("Pompompur").name).toBe("Pompompur");
    });
});