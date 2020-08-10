/**
 * completed 8/10/2019
 * Leetcode - similar to MEDIUM
 * 
 * Given a 2D grid, each cell is either a zombie 1 or a human 0. Zombies can turn adjacent (up/down/left/right) human beings into zombies every hour. Find out how many hours does it take to infect all humans?

Example:

Input:
[[0, 1, 1, 0, 1],
 [0, 1, 0, 1, 0],
 [0, 0, 0, 0, 1],
 [0, 1, 0, 0, 0]]

Output: 2

Explanation:
At the end of the 1st hour, the status of the grid:
[[1, 1, 1, 1, 1],
 [1, 1, 1, 1, 1],
 [0, 1, 0, 1, 1],
 [1, 1, 1, 0, 1]]

At the end of the 2nd hour, the status of the grid:
[[1, 1, 1, 1, 1],
 [1, 1, 1, 1, 1],
 [1, 1, 1, 1, 1],
 [1, 1, 1, 1, 1]]
 * 
*/

//  MY SOLUTION
function zombie(input, count = 0) {
    let result = true;
    const copyInput = JSON.parse(JSON.stringify(input));
    for (let row = 0; row < input.length; row++) {
        for (let col = 0; col < input[0].length; col++) {
            if (input[row][col] === 0) {
                result = false;
            }
            if (input[row][col] === 1) {
                if (row > 0 && row < input.length - 1) {
                    if (input[row - 1][col] === 0) {
                        copyInput[row - 1][col] = 1;
                    }
                    if (input[row + 1][col] === 0) {
                        copyInput[row + 1][col] = 1;
                    }
                }
                if (col > 0 && col < input[0].length - 1) {
                    if (input[row][col + 1] === 0) {
                        copyInput[row][col + 1] = 1;
                    }
                    if (input[row][col - 1] === 0) {
                        copyInput[row][col - 1] = 1;
                    }
                }
            }
        }
    }

    if (result) {
        return count
    } else {
        return zombie(copyInput, count+1)
    }
} 

module.exports = zombie;