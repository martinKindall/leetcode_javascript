/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var decompressRLElist = function(nums) {
    // given that the input is even in length, we can iterate
    // over it with steps of 2. 
    // we iterate once over the array and build the solution on the run
    // time O(N) space O(N)
    // assuming that javascript array concat is O(1)
    
    let result = [];
    
    let evenIdx;
    
    for (evenIdx = 0; evenIdx < nums.length; evenIdx += 2) {
        const tempArray = new Array(nums[evenIdx]).fill(nums[evenIdx+1]);
        result = result.concat(tempArray);
    }
    
    return result;
};