const solution = require('./index');

test('solution function exists', () => {
    expect(solution).toBeDefined();
});

/*
1.     1
2.     11
3.     21
4.     1211
5.     111221
*/

test('solution converts 1 to 1', () => {
    expect(solution(1)).toEqual("1");
});

test('solution converts last result (1 =>1) to one 1s', () => {
    expect(solution(2)).toEqual("11");
});

test('solution converts last result (2=>11) to two 1s', () => {
    expect(solution(3)).toEqual("21");
});

test('solution converts last result (3=>21) to one 2s one 1s', () => {
    expect(solution(4)).toEqual("1211");
});

test('solution converst last result (4=>1211) to one 1s one 2s two 1s', () => {
    expect(solution(5)).toEqual("111221");
});