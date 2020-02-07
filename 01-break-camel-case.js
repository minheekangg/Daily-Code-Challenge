// FEB 4,2020

// Complete the solution so that the function will break up camel casing, using a space between words.

//     Example
// solution('camelCasing') // => should return 'camel Casing'

// Test.assertEquals(solution('camelCasing'), 'camel Casing', 'Unexpected result')
// Test.assertEquals(solution('camelCasingTest'), 'camel Casing Test', 'Unexpected result')

function solution(string) {
    string = string.split('').map(function (el) {
        if (el === el.toUpperCase()) {
            el = ' ' + el
        }
        return el
    })
    return string.join('')
}

// better solution:
function solution(string) {
    return string.replace(/[A-Z]/g, function (c) { return " " + c; });
}