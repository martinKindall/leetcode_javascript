/**
 * @param {number[]} nums
 * @return {number}
 */
 var numIdenticalPairs = function(nums) {
    // if there are repeated numbers, there are going to be goodPairs
    
    // 1 is repeated 2 times -> 3 good pairs
    // 3 is repeated 1 time -> 1 good pair
    // 1 -> 0
    // 2 -> 1
    // 3 -> 3
    // 4 -> 6
    // 5 -> 10
    
    //x
    //sum (i-1)  -> x*(x+1)/2 - x
    //i=1
    
    // time O(N)
    // space O(N)
    
    const occurrences = {};
    nums.forEach(num => {
        const prev = occurrences[num] || 0;
        occurrences[num] = prev + 1; 
    });
    
    let currGoodPairs = 0;
    
    Object.values(occurrences).filter(val => val > 1).forEach(num => {
        currGoodPairs += num*(num+1)/2 - num;
    });
    
    return currGoodPairs;
};

var numIdenticalPairsBruteForce = function(nums) {
    // a brute force algorithm is time O(N^2), space O(1)
    // nested loop
    
    let goodPairsCount = 0;
    
    let i;
    let j;
    
    for (i = 0; i < nums.length; i++) {
        for (j = 0; j < nums.length; j++) {
            if (i < j) {
                if (nums[i] === nums[j]) {
                    goodPairsCount++;
                }
            }
        }
    }
    
    return goodPairsCount;
};