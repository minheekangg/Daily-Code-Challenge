const solution = require('./index');

test('solution function exists', () => {
    expect(solution).toBeDefined();
});

test('solution handles empty input', () => {
    expect(solution([])).toEqual(false);
});

test('solution handles 2x2 square without a way out', () => {
    expect(solution([[1,0], [0,1]])).toEqual(false);
});


test('solution handles 2x2 square with a way out', () => {
    expect(solution([1,0], [1,0])).toEqual(true);
});



const maze1 = [[1, 0, 0, 1, 1], [1, 1, 0, 1, 1], [1, 0, 0, 1, 1], [1, 0, 1, 1, 0], [1, 0, 0, 0, 0]];
const test1 = {
    startRow: 0,
    startCol: 1,
    destRow: 3,
    destCol: 4
}
test('solution handles long input', () => {
    expect(solution(maze1, test1[startRow], test1[startCol], test1[destRow], test1[destCol])).toEqual(true);
});

const maze2 = [[1, 0, 0, 1, 1], [1, 1, 0, 1, 1], [1, 0, 0, 1, 1], [1, 0, 1, 1, 0], [1, 0, 0, 0, 1]];
const test2 = {
    startRow: 0,
    startCol: 1,
    destRow: 3,
    destCol: 4,
}

test('solution handles adding left + right brackets', () => {
    expect(solution(maze2, test2[startRow], test2[startCol], test2[destRow], test2[destCol])).toEqual(false);
});