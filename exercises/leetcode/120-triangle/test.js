const solution = require('./index');

test('solution function exists', () => {
    expect(solution).toBeDefined();
});

test('solution successfully finds minimum path sum', () => {
    expect(solution([[2],[3,4],[6,5,7],[4,1,8,3]])).toEqual(11);
});

test('solution successfully finds minimum path sum when triangle has only one element', () => {
    expect(solution([[-10]])).toEqual(-10);
});

test('solution successfully finds minimum path sum with negative numbers', () => {
    expect(solution([[-1],[2,3],[1,-1,-3]])).toEqual(-1);
});

