/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
    return convertPoundSign(S) === convertPoundSign(T);
};

const convertPoundSign = function (S) {
    while (S.indexOf('#') !== -1) {
        if (S.indexOf('#') === 0) {
            S = S.slice(1);
        } else {
            const idx = S.indexOf('#');
            S = S.slice(0, idx - 1) + S.slice(idx + 1);
        }
    }
    return S;
}