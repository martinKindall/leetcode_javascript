/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
 var shuffle = function(nums, n) {
    // time O(N)
    // space O(N)
    
    const result = [];
    
    let idx;   // index pointing to the original array
    let destinationIdx = 0;   // index pointing at the result array
    for (idx = 0; idx < n; idx++) {
        //result.push(nums[idx], nums[idx + n]);   // easy solution
        result[destinationIdx++] = nums[idx];
        result[destinationIdx++] = nums[idx+n];
    }
    
    return result;
};