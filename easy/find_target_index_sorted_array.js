/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var targetIndices = function(nums, target) {
    // it is possible to solve it without sorting the entire array?
    // maybe, just comparing the target against each element in nums and determining
    // how many times it is greater or lower, then calculating its relative position
    
    let repetitions = 0;
    let lowerNumbers = 0;
    
    nums.forEach(num => {
       if (num < target) {
           lowerNumbers++;
       } else if (num === target) {
           repetitions++;
       }
    });
    
    let result = [];
    
    if (repetitions === 0) {
        return result;
    }
    
    while (repetitions > 0) {
        result.push(lowerNumbers++);
        repetitions--;
    }
    
    return result;
};