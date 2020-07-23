const firstUniqChar = require('./index');

test('firstUniqChar function exists', () => {
    expect(firstUniqChar).toBeDefined();
});

test('firstUniqChar handles empty string as an input', () => {
    expect(firstUniqChar("")).toEqual(-1);
});

test('firstUniqChar successfully converts leetcode', () => {
    expect(firstUniqChar("leetcode")).toEqual(0);
});

test('firstUniqChar successfully converts loveleetcode', () => {
    expect(firstUniqChar("loveleetcode")).toEqual(2);
});

test('firstUniqChar successfully converts abcdef', () => {
    expect(firstUniqChar("abcdefabcdef")).toEqual(-1);
});
