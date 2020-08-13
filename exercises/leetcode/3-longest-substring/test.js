const solution = require('./index');

test('solution function exists', () => {
    expect(solution).toBeDefined();
});

test('solution handles empty string as an input', () => {
    expect(solution("")).toEqual(0);
});

test('solution successfully finds length of "abc" for: abcabcbb', () => {
    expect(solution("abcabcbb")).toEqual(3);
});

test('solution successfully finds length of "b" for: bbbbb', () => {
    expect(solution("bbbbb")).toEqual(1);
});

test('solution successfully finds length of "wke" for: pwwkew', () => {
    expect(solution("pwwkew")).toEqual(3);
});
