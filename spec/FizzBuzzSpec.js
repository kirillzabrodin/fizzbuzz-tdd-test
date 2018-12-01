'use strict'

describe('FizzBuzz', () => {

    var game

    beforeEach(() => {
        game = new FizzBuzz()
    })

    it('Numbers returns Fizz if they are divisible by 3', () => {
        expect(game.play(3)).toBe('Fizz')
        expect(game.play(12)).toBe('Fizz')
        expect(game.play(3 * 69)).toBe('Fizz')
    })
})