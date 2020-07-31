
const solution = (maze, ) => {
    let result = false;
    n.push(new Array(n.length).fill(9));

    function searchGrid(x, y, grid) {
        console.log('x is', x, 'y is', y, 'grid', grid);
        if (grid[x][y] === 0) {
            grid[x][y] = 'X';

            if (x < grid.length) {
                searchGrid(x+1, y, grid);
            }
            if (x > 0 && x < grid.length) {
                searchGrid(x-1, y, grid);
            }
            if (y < grid[x].length) {
                searchGrid(x, y+1, grid);
            }
            if (y > 0 && y < grid.length) {
                searchGrid(x, y-1, grid);
            }
        } else if (grid[x][y] === 9) {
            if (x === grid.length && y === grid[0].length) {
                console.log('made it!');
                result = true;
            }
        } else  {
            console.log('skip!')
            return;
        }
    }

    for (let row=0; row < n.length; row++ ) {
        for (let col=0; col < n[0].length; col++) {
            searchGrid(row, col, [...n]);
        }
    }

    return result;
};

module.exports = solution;


