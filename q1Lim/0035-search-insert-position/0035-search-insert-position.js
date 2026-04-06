/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {

    /*
        시간 복잡도가 O(n)

    for (let i = 0 ; i < nums.length ; i ++){
        if (nums[i] >= target){
            return i;
        }
    }
    return nums.length;

    */

    /* 
        시간 복잡도를 O(logn)으로 줄여보자
    */

    let left = 0;
    let right = nums.length;

    while (left <= right){
        const mid = Math.floor((left + right) / 2)
        if (nums[mid] === target){
            return mid;
        } else if (nums[mid] < target){
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    // left가 결국 index의 역할을 하기 때문에 left 값으로 return 
    return left;

};