const romanToInt = require('./index');

test('romanToInt function exists', () => {
    expect(romanToInt).toBeDefined();
});

test('romanToInt handles empty string as an input', () => {
    expect(romanToInt("")).toEqual(0);
});

test('romanToInt successfully converts III', () => {
    expect(romanToInt("III")).toEqual(3);
});

test('romanToInt successfully converts IV', () => {
    expect(romanToInt("IV")).toEqual(4);
});

test('romanToInt successfully converts LVIII', () => {
    expect(romanToInt("LVIII")).toEqual(58);
});

test('romanToInt successfully converts MCMXCIV', () => {
    expect(romanToInt("MCMXCIV")).toEqual(1994);
});
