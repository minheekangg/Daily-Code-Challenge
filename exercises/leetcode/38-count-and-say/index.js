/**
 * completed 9/9/2020
 * Leetcode - EASY
*/

/**
 *The count-and-say sequence is the sequence of integers with the first five terms as following:

1.     1
2.     11
3.     21
4.     1211
5.     111221
1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.

Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence. You can do so recursively, in other words from the previous member read off the digits, counting the number of digits in groups of the same digit.

Note: Each term of the sequence of integers will be represented as a string.



Example 1:

Input: 1
Output: "1"
Explanation: This is the base case.
Example 2:

Input: 4
Output: "1211"
Explanation: For n = 3 the term was "21" in which we have two groups "2" and "1", "2" can be read as "12" which means frequency = 1 and value = 2, the same way "1" is read as "11", so the answer is the concatenation of "12" and "11" which is "1211".
 */

var countAndSay = function (n, seq = ["1"]) { //memoize sequence arrays
    if (n === seq.length) return seq[seq.length - 1]; 
    //base case for recursion: if n is equal to seq.length return the last of the seq array.

    const lastResult = seq.slice(-1)[0]; //take the last of the sequence + send strig to toSay();
    seq.push(toSay(lastResult));
    // toSay(lastResult) will return converted count. push this to seq arr.

    return countAndSay(n, seq);
};

var toSay = function (s) {
    let result = ""; tmp = 1;
    //init result to blank string + counter to 1;
    for (var j = 0; j < s.length; j++) {
        if (s[j] !== s[j + 1] || j == s.length - 1) {
            // if next letter is not equal to current letter or we're at the end;
            result += tmp + s[j];
            // add counter and letter to result;
            tmp = 1;
            //result counter to 1;
        } else {
            // else if next letter is equal to current letter increase counter;
            tmp += 1;
        }
    }

    // expect result to be stringified conversion of the counts (eg 1211 input --> 111221 output)
    return result;
}

module.exports = countAndSay;