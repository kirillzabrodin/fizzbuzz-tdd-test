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

    describe('returns FizzBuzz for numbers that are divisible by 15', () => {

        it('returns FizzBuzz for 15', () => {
            expect(game.play(15)).toBe('FizzBuzz')
        })

        it('returns FizzBuzz for 30', () => {
            expect(game.play(30)).toBe('FizzBuzz')
        })

        it('returns FizzBuzz for 45', () => {
            expect(game.play(45)).toBe('FizzBuzz')
        })

    })

    describe('return number if not divisible by 5 or 3', () => {

        it('returns 8 for 8', () => {
            expect(game.play(8)).toBe(8)
        })

        it('returns 31 for 31', () => {
            expect(game.play(31)).toBe(31)
        })

        it('returns 101 for 101', () => {
            expect(game.play(101)).toBe(101)
        })

    })

})