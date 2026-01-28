/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {

    // ascending sort
    // a - b 에서의 - 는 숫자의 부호로 말해주는 함수

    const sortedArr = arr.sort((a,b) => {
        return fn(a) - fn(b);
    })

    return sortedArr;
};