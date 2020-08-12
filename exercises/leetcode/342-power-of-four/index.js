/**
 * completed 8/4/2020
 * Leetcode - EASY
*/

/**
 * Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

    Input: 16
    Output: true
 */

// My Solution
var isPowerOfFour = function(num) {
if (num < 1) return false;
while (num > 1) {
    if (num % 4 === 0) {
        return isPowerOfFour(num / 4);
    } else {
        return false;
    }
}
return true;
};

module.exports = isPowerOfFour;