/**
 * completed 7/23/2019
 * Leetcode - EASY
*/

/**
 Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

    Examples:

    s = "leetcode"
    return 0.

    s = "loveleetcode"
    return 2.
 */

// My Solution
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let result = [];
    let seen = {};

    for (let idx in s) {
        const char = s[idx];
        if (!seen[char]) {
            seen[char] = idx;
            result.push(idx);
        } else if (!!seen[char]) {
            result = result.filter(e => e !== seen[char]);
        }
    }
    return result[0] === undefined ? -1 : parseInt(result[0], 10);
};

module.exports = firstUniqChar;