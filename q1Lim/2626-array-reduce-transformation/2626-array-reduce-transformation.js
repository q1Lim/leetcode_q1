/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let result = init;
    
    for (let i = 0 ; i < nums.length ; i++){
        console.log(fn(init, nums[i]))
        // 결과값을 다시 써서 누적할 수 있도록 함
        result = fn(result, nums[i])
    }
    return result;
};