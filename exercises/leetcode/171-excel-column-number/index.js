/**
 * completed 7/21/2019
 * Leetcode - EASY
*/

/**
 Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28
    ...
 */

// My Solution
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        let toPower = s.length - 1 - i;
        let currentNum = s[i].toUpperCase().charCodeAt() - 64;
        result += Math.pow(26, toPower) * currentNum
    }
    return result
};

module.exports = titleToNumber;