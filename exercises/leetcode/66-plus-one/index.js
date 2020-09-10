/**
 * completed 9/10/2020
 * Leetcode - EASY
*/

/**
Given a non-empty array of digits representing a non-negative integer, increment one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.
*/

var plusOne = function (digits) {
    let last = digits[digits.length - 1];

    if (last === 9) {
        // if last digit is 9, look from the back;
        let counter = digits.length - 1;

        while (counter >= 0 && digits[counter] === 9) {
            // keep marking the current digit to 0 + decrease counter
            digits[counter] = 0
            counter--;
        }
        // at the end, the counter is either at the beginning; 
        // or at the last digit that can be increased by 1; 

        if (counter === -1) {
            digits.unshift(1);
        } else {
            digits[counter] += 1;
        }

    } else {
        // if last isn't a 9, just increase and return last digit.
        digits[digits.length - 1] = last + 1;
    }
    return digits;
};
module.exports = plusOne;