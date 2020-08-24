const solution = require('./index');

test('solution function exists', () => {
    expect(solution).toBeDefined();
});

test('solution successfully calculates 2^10', () => {
    expect(solution(2.00000, 10)).toEqual(1024.00000);
});

test('solution successfully calculates 2.1^3', () => {
    expect(solution(2.10000, 3)).toEqual(9.261000000000001);
});

test('solution successfully calculates 2^-2', () => {
    expect(solution(2.00000, -2)).toEqual(0.25000);
});

test('solution successfully calculates 2^1', () => {
    expect(solution(2.00000, 1)).toEqual(2.00000);
});

test('solution successfully calculates 2^0', () => {
    expect(solution(2.00000, 0)).toEqual(1);
});

