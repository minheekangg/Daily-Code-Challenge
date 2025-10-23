/**
 * completed 10/23/2025
 * Leetcode - MEDIUM
*/

/**
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
 
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */

var numIslands = function(grid) {
    let islands = 0;

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col<grid[row].length; col++) {
            if (grid[row][col] === '1') {
                islands++;
                explore(grid, row, col)
            }
        }
    }

    return islands
};

function explore(grid, row, col) {
    if (row < 0 || col < 0 || row > grid.length -1 || col > grid[0].length -1 || grid[row][col] === '0') {
        return
    }

    grid[row][col] = "0"

    // down
    explore(grid, row+1, col)
    // up
    explore(grid, row-1, col)
    // right
    explore(grid, row, col+1)
    // left
    explore(grid, row, col-1)
}

module.exports = numIslands;