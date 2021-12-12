/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    const indexes = [];
    
    // possible solution. Use a dictionary, put every element there.
    // iterate over the input nums, substract it to the target, and
    // the result can be looked up in the dictionary.
    // the dictionary is a map of key values, key is the number and the value the index.
    
    const dictionary = {};
    nums.forEach((number, idx) => {
        dictionary[number] = idx;
    });
    
    let currIdx;
    for (currIdx = 0; currIdx < nums.length; currIdx++) {
        const substractResult = target - nums[currIdx];
        const res = dictionary[substractResult];
        if (res !== undefined && currIdx !== res) {
            return [currIdx, res];
        }
    }
    
    throw new Error('Input did not include a solution');
};