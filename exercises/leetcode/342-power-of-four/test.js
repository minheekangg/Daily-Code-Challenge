const solution = require('./index');

test('function exists', () => {
    expect(solution).toBeDefined();
});

test('solution handles negative input', () => {
    expect(solution(-16)).toEqual(false);
});

test('solution successfully handles 16 to be power of 4', () => {
    expect(solution(16)).toEqual(true);
});

test('solution successfully handles 5 to not be power of 4', () => {
    expect(solution(5)).toEqual(false);
});

test('solution successfully handles 1 to be power of 4', () => {
    expect(solution(1)).toEqual(true);
});

