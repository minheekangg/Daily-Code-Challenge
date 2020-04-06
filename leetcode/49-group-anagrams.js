/*
Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.
*/


var groupAnagrams = function (strs) {
    let map = {};

    for (let i = 0; i < strs.length; i++) {
        let currentWord = strs[i];
        let sortedWord = currentWord.split("").sort().join("");
        if (!map[sortedWord]) {
            map[sortedWord] = [currentWord];
        } else {
            map[sortedWord].push(currentWord);
        }
    }
    return Object.values(map);
};