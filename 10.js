/*
    titleCase - string parse - codewars
    Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

    titleCase('a clash of KINGS', 'a an the of') // 'A Clash of Kings'
    titleCase('THE WIND IN THE WILLOWS', 'The In') // 'The Wind in the Willows'
    titleCase('the quick brown fox') // 'The Quick Brown Fox'

*/

// My Solution:
function titleCase(title, minorWords = '') {
    if (title.length < 1) return title;

    let titleArr = title.split(' ');
    let exclusion = minorWords.toLowerCase().split(' ');

    let firstWord = titleArr[0];

    let result = [firstWord[0].toUpperCase() + firstWord.slice(1).toLowerCase()];

    for (let i = 1; i < titleArr.length; i++) {
        let currWord = titleArr[i];
        if (exclusion.includes(currWord.toLowerCase())) {
            result.push(currWord.toLowerCase())
        } else {
            currWord = currWord[0].toUpperCase() + currWord.slice(1).toLowerCase();
            result.push(currWord);
        }

    }
    return result.join(' ');
}
