/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const arrayS = s.trim().split(' ');

    return arrayS.at(-1).length;
};