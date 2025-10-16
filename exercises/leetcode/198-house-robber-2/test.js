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

test('solution successfully handles two input', () => {
    expect(solution([2, 1])).toEqual(2);
});

test('solution successfully handles when taking the max of the first two and getting max input', () => {
    expect(solution([2, 1, 1, 2])).toEqual(4);
});

