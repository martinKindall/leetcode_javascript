/**
 * Time O(N)
 * Space O(N) as we create a new array of length N
 * @param {number[]} nums
 * @return {number[]}
 */
 var buildArray = function(nums) {
    
    const ans = [];
    
    let idx;
    
    for (idx = 0; idx < nums.length; idx++) {
        // ans.push(nums[nums[idx]]);   // correct too, but little bit slower
        ans[idx] = nums[nums[idx]];
    }
    
    return ans;
};