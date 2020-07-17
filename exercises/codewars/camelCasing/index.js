// FEB 4,2020

// Complete the solution so that the function will break up camel casing, using a space between words.

function camelCasing(string) {
    string = string.split('').map(function (el) {
        if (el === el.toUpperCase()) {
            el = ' ' + el
        }
        return el
    })
    return string.join('')
}

// better solution:
// function camelCasing(string) {
//     return string.replace(/[A-Z]/g, function (c) { return " " + c; });
// }

module.exports = camelCasing;