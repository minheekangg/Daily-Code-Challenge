const reverseString = require('./index');

test('reverseString function exists', () => {
    expect(reverseString).toBeDefined();
});

test('reverseString handles empty array as an input', () => {
    expect(reverseString([])).toEqual([]);
});

test('Successfully flips', () => {
    expect(reverseString(["h", "e", "l", "l", "o"])).toEqual(["o", "l", "l", "e", "h"]);
});

test('Keeps case sensitive', () => {
    expect(reverseString(["H", "a", "n", "n", "a", "h"])).toEqual(["h", "a", "n", "n", "a", "H"]);
});
