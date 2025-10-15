const solution = require('./index');

test('solution function exists', () => {
    expect(solution).toBeDefined();
});

test('solution successfully finds target', () => {
    const matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];
    const target = 3
    expect(solution(matrix, target)).toEqual(true);
});

test('solution successfully does not find target', () => {
    const matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];
    const target = 13
    expect(solution(matrix, target)).toEqual(false);
});

test('solution successfully handles edge case', () => {
    const matrix = [[1]];
    const target = 0;
    expect(solution(matrix, target)).toEqual(false);
});