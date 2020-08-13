/**
 * completed 8/13/2020
 * Leetcode - MEDIUM
*/

/**
Given a string, find the length of the longest substring without repeating characters.

Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
 */
var lengthOfLongestSubstring = function (s) {
    let seen = {};
    let longest = 0;
    let start = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (seen[char] >= start) {
            start = seen[char] + 1;

        }
        seen[char] = i;
        longest = Math.max(longest, i - start + 1)

    }
    return longest
};

module.exports = lengthOfLongestSubstring;