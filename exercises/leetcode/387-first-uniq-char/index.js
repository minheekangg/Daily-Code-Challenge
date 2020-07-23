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



// NOTABLE SOLUTION 1:
var firstUniqChar = function (s) {
    var sMap = new Map();
    for (let i = 0; i < s.length; i++) {
        if (sMap.has(s[i])) {
            sMap.set(s[i], 2);  // duplicated character: value set 2   
        } else {
            sMap.set(s[i], 1); // unique character: value set 1
        }
    };
    //e.g. s= "ackcamkcg",  sMap= {a => 2, c => 2, k => 2, m => 1, g => 1}
    for (let i = 0; i < s.length; i++) {
        if (sMap.get(s[i]) === 1) return i;
    }
    return -1;
}

// NOTABLE SOLUTION 2:
var firstUniqChar = function (s) {
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) == s.lastIndexOf(s[i])) return i;
    }
    return -1;
}

// My Solution
// var firstUniqChar = function (s) {
//     let result = [];
//     let seen = {};

//     for (let idx in s) {
//         const char = s[idx];
//         if (!seen[char]) {
//             seen[char] = idx;
//             result.push(idx);
//         } else if (!!seen[char]) {
//             result = result.filter(e => e !== seen[char]);
//         }
//     }
//     return result[0] === undefined ? -1 : parseInt(result[0], 10);
// };

module.exports = firstUniqChar;