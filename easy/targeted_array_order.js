/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
 var createTargetArray = function(nums, index) {
    // just inserting in target at index index[i] the value nums[i]
    // using slice to split the target array at index i.
    
    let target = [];
    
    let i;
    for (i = 0; i < nums.length; i++) {
        target = target.slice(0, index[i]).concat(nums[i]).concat(target.slice(index[i]));
    }
    
    return target;
};
