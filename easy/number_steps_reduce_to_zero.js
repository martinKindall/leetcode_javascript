/**
 * @param {number} num
 * @return {number}
 */
 var numberOfSteps = function(num) {
    // brute force is to do a while loop with both cases, even and not even
    // that solution is around time complexity O(log2(N)) would I estimate.
    
    let steps = 0;
    while (num > 0) {
        if (num % 2 === 0) {
            num /= 2;
        } else {
            num--;
        }
        steps++;
    }
    
    return steps;
};
