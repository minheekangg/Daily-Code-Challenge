/*
FEB, 06, 2020

Write a function, which takes a non - negative integer(seconds) as input and returns the time in a human - readable format(HH: MM: SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999(99: 59: 59)

You can find some examples in the test fixtures.
*/

/* test:
describe('examples', function () {
    it('should format correctly', function () {
        Test.assertEquals(humanReadable(0), '00:00:00', 'humanReadable(0)');
        Test.assertEquals(humanReadable(5), '00:00:05', 'humanReadable(5)');
        Test.assertEquals(humanReadable(60), '00:01:00', 'humanReadable(60)');
        Test.assertEquals(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
        Test.assertEquals(humanReadable(359999), '99:59:59', 'humanReadable(359999)');
    });
});
*/

// MY ANSWER: 
function humanReadable(seconds) {
    // TODO
    let leftOver = seconds;
    const calcHH = Math.floor(seconds / 3600);
    leftOver -= (calcHH * 3600);
    const calcMM = Math.floor(leftOver / 60);
    const calcSS = leftOver % 60;

    const HH = calcHH < 10 ? ("0" + calcHH) : calcHH;
    const MM = calcMM < 10 ? ("0" + calcMM) : calcMM;
    const SS = calcSS < 10 ? ("0" + calcSS) : calcSS;


    return HH + ":" + MM + ":" + SS;

}

// Notable answer: 
function humanReadable(seconds) {
    var pad = function (x) { return (x < 10) ? "0" + x : x; }
    return pad(parseInt(seconds / (60 * 60))) + ":" +
        pad(parseInt(seconds / 60 % 60)) + ":" +
        pad(seconds % 60)
}