const Pet = require("../src/pet");

describe('Pet', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
});