/*

Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example:
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses!

describe('Basic tests', () => {
  Test.assertEquals(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
  Test.assertEquals(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
  Test.assertEquals(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
});

*/

// MY SOLUTION:
function createPhoneNumber(numbers) {
    if (numbers.length > 10) {
        return false;
    }
    return "(" + numbers.slice(0, 3).join("") + ") " + numbers.slice(3, 6).join("") + "-" + numbers.slice(6, 10).join("")
}


// First solution - answer
function createPhoneNumber(numbers) {
    numbers = numbers.join('');
    return '(' + numbers.substring(0, 3) + ') '
        + numbers.substring(3, 6)
        + '-'
        + numbers.substring(6);
}
// notable solution 
function createPhoneNumber(numbers) {
    var format = "(xxx) xxx-xxxx";

    for (var i = 0; i < numbers.length; i++) {
        format = format.replace('x', numbers[i]);
    }

    return format;
}