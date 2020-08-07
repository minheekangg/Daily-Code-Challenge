const solution = require('./index');

test('solution function exists', () => {
    expect(solution).toBeDefined();
});

test('solution successfully finds middle of odd length arrays', () => {
    expect(solution([1,3], [2])).toEqual(2.0);
});

test('solution successfully finds middle of even length arrays', () => {
    expect(solution([1, 2], [3,4])).toEqual(2.5);
});