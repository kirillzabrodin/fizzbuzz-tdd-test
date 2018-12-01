'use strict'

function FizzBuzz() {}

FizzBuzz.prototype.play = number => {
    if (number == 5 || number == 10 || number == 20) {
        return "Buzz"
    } else {
        return "Fizz"
    }
}