var smallerNumbersThanCurrent = function(nums) {
    // brute force is time O(N^2), with a nested loop.
    // I guess there is no other way of doing it besides comparing at least once
    // each number with the others -> sorting
    // if we sort the array we can have the answer.
    
    // so the solution would be time O(N x Log(N))
    // val: 0, 0, 5, 6, 10, 10
    // idx: 0, 1, 2, 3,  4,  5
        
    const arrayCopy = [...nums];
    arrayCopy.sort((a, b) => a - b);
    let lastNumber;
    const resultMap = {};

    arrayCopy.forEach((num, idx) => {
        if (idx === 0) {
            resultMap[num] = 0;
            lastNumber = num;
        } else {
            if (lastNumber !== num) {
                lastNumber = num;
                resultMap[num] = idx;
            }
        }
    });
    
    const result = [];
    
    nums.forEach((num, idx) => {
        result[idx] = resultMap[num];
    });
    
    return result;
};