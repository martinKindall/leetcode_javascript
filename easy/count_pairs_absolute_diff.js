/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var countKDifference = function(nums, k) {
    const numDict = {};
    
    nums.forEach(num => {
        const count = numDict[num] || 0;
        numDict[num] = count + 1;
    });
    
    let output = 0;
    
    nums.forEach(num => {
        if (numDict[num+k]) {
            output += numDict[num+k];
        }
    });
    
    return output;
};

var countKDifferenceBrute = function(nums, k) {
    // brute force is time O(N^2)
    
    // is it possible to produce the pairs of an array 
    // in less time than O(N^2) ?
    
    let i, j;
    let outputPairs = 0;
    
    for (i = 0; i < nums.length; i++) {
        for (j=i; j < nums.length; j++) {
            if (i !== j && Math.abs(nums[i] - nums[j]) === k) {
                outputPairs++;
            } 
        }
    }
    
    return outputPairs;
};