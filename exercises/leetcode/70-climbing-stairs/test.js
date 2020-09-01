const solution = require('./index');

test('solution function exists', () => {
    expect(solution).toBeDefined();
});

test('solution successfully shows 2 --> 2', () => {
    expect(solution(2)).toEqual(2);
});

test('solution successfully shows 3 --> 3', () => {
    expect(solution(3)).toEqual(3);
});

test('solution successfully shows 4 --> 5', () => {
    expect(solution(4)).toEqual(5);
});

test('solution successfully shows 6 --> 13', () => {
    expect(solution(6)).toEqual(13);
});

test('solution successfully shows 7 --> 21', () => {
    expect(solution(7)).toEqual(21);
});

test('solution successfully shows 8 --> 34', () => {
    expect(solution(8)).toEqual(34);
});

test('solution successfully shows 10 --> 89', () => {
    expect(solution(10)).toEqual(89);
});

/*
 [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]

 2 = 2       2n-1
 3 = 3       2n-1
 4 = 5       2n-2
 5 = 8       2n-3
 6 = 13      2n-5
 7 = 21      2n-8
 8 = 34      2n-13
 9 = 55      2n-21
 10 = 89   
 
*/