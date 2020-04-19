var minPathSum = function (grid) {
    const row = grid.length;
    const column = grid[0].length;

    for (let i = 1; i < row; i++) {
        grid[i][0] += grid[i - 1][0];
    }

    for (let j = 1; j < column; j++) {
        grid[0][j] += grid[0][j - 1];
    }

    for (let i = 1; i < row; i++) {
        for (let j = 1; j < column; j++) {
            grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
        }
    }
    return grid[row - 1][column - 1];
};