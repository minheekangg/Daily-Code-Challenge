var reverseString = function (s) {
    for (let i =0; i < s.length/2; i++) {
        [s[i], s[s.length-i-1]] = [s[s.length-i-1], s[i]]
    }

    return s
}


module.exports = reverseString;


/* My solution
var reverseString = function (s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }
    return s
};

*/