/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProductDifference = function(nums) {
    // intuition tells me we could sort the nums array
    // and just pick the two first and two last elements
    
    // but that would be time O(NlogN)
    
    // something quicker would be to select the two max elements of the array
    // and the two minimum elements, then the solution would be time O(N)
    
    const firstMax = Math.max(...nums);
    nums = nums.filter((num, i) => i !== nums.indexOf(firstMax));
    const secondMax = Math.max(...nums);
    nums = nums.filter((num, i) => i !== nums.indexOf(secondMax));
    
    const firstMin = Math.min(...nums);
    nums = nums.filter((num, i) => i !== nums.indexOf(firstMin));
    const secondMin = Math.min(...nums);
    
    return firstMax * secondMax - firstMin * secondMin;
};