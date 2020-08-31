const solution = require('./index');

test('solution function exists', () => {
    expect(solution).toBeDefined();
});

test('solution successfully finds missing number when n = 50', () => {
    expect(solution([7, 1, 5, 3, 6, 4])).toEqual(5);
});

test('solution successfully finds missing number when n = 3', () => {
    expect(solution([7, 6, 4, 3, 1])).toEqual(0);
});
