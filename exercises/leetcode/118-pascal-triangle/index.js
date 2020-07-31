/**
 * completed 7/31/2019
 * Leetcode - EASY
 * 
 * Given a non-negative integer numRows, generate the first numRows of      Pascal's triangle.
 * Input: 5
    Output:
    [
        [1],
        [1,1],
        [1,2,1],
        [1,3,3,1],
        [1,4,6,4,1]
    ]
 * 
*/

//  MY SOLUTION
var solution = function (numRows) {
    if (numRows < 1) {
        return []
    }

    if (numRows === 1) return [[1]];
    if (numRows === 2) return [[1], [1, 1]];

    let result = [[1], [1, 1]];
    for (let i = 2; i < numRows; i++) {
        const last = result[result.length - 1];
        const newRow = new Array(i + 1).fill(1);
        for (let j = 1; j < newRow.length - 1; j++) {
            newRow[j] = last[j - 1] + last[j];
        }
        result.push(newRow);
    }
    return result;
};

module.exports = solution;