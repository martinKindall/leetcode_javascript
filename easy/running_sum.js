/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    // in order to save time, seems smart to save
    // the state of the accumulator at each iteration, 
    // rather than recalculating the sum again and again
    // Time O(N)
    // space O(N) (new array created)
    
    let accum = 0;
    const runningSum = [];
    
    nums.forEach((num, idx) => {
        const accumNow = accum + num;
        runningSum[idx] = accumNow;
        accum = accumNow;
    });
    
    return runningSum;
};