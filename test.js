describe('Guessing Game', () => {
    it ('Should be able to take in the number from the input set', () => {
        let gess = GuessingGame([])
        gess.setNumber(6)
        assert.equal(6, gess.getNumber());
    })
    it ('Should be able to return a string if number guessed did not match', () => {
        let gess = GuessingGame([]);
        assert.equal(gess.setString('Guess out of context'))
    })
    it ('Should be able to start a new game after the correct guess', ()=> {
        let gess = GuessingGame([])
        assert.equal(gess.theGame('New game started'))
    })
})