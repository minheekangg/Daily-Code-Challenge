const solution = require('./index');

test('solution function exists', () => {
    expect(solution).toBeDefined();
});

test('solution successfully detects max profit', () => {
    expect(solution([1, 2, 3, 1])).toEqual(4);
});

test('solution successfully detects max profit', () => {
    expect(solution([2, 7, 9, 3, 1])).toEqual(12);
});

test('solution successfully handles missing input', () => {
    expect(solution([])).toEqual(0);
});

test('solution successfully handles one input', () => {
    expect(solution([1])).toEqual(1);
});
