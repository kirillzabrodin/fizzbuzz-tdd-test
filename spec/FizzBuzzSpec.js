'use strict'

describe('FizzBuzz', () => {

    var game

    beforeEach(() => {
        game = new FizzBuzz()
    })

    describe('returns Fizz for multiples of 3', () => {

        it('returns Fizz for 3', () => {
            expect(game.play(3)).toBe('Fizz')
        })

        it('returns Fizz for 6', () => {
            expect(game.play(6)).toBe('Fizz')
        })

        it('returns Fizz for 12', () => {
            expect(game.play(12)).toBe('Fizz')
        })

    })

    describe('returns Buzz for numbers that are divisible by 5', () => {

        it('returns Buzz for 5', () => {
            expect(game.play(5)).toBe('Buzz')
        })

        it('returns Buzz for 10', () => {
            expect(game.play(10)).toBe('Buzz')
        })

        it('returns Buzz for 20', () => {
            expect(game.play(20)).toBe('Buzz')
        })

    })
})