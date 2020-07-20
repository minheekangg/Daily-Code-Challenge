/**
 * completed 7/20/2019
 * Leetcode - EASY
*/

/**
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
 */

// My Solution
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let sum = 0;
    const dict = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }
    const dictTwo = {
        "IV": 4,
        "IX": 9,
        "XL": 40,
        "XC": 90,
        "CD": 400,
        "CM": 900,
    }

    const filtered = s.replace(/IV|IX|XL|XC|CD|CM/gi, function (curr) {
        sum += dictTwo[curr];
        return ""
    })

    for (let n of filtered) {
        sum += dict[n]
    }

    return sum
};

module.exports = romanToInt;