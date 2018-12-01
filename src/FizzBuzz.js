'use strict'

function FizzBuzz() {}

FizzBuzz.prototype.play = number => {
    let output = ""
    if (!(number % 3)) output += 'Fizz'
    if (!(number % 5)) output += 'Buzz'
    if (output === "") output = number
    return output
}