/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
 var kidsWithCandies = function(candies, extraCandies) {
    // idea: save the original max kid.
    // then compare after the new distribution of candies, if the ith kid has surpassed the old maximum
    
    // mutated input array to save space, but can also create a new one
    
    // time O(N) (search max is O(N), create the result array takes O(N) too. Sequentially.)
    // space O(1) with mutation. O(N) without.
    
    let actualMaxCandies = 0;
    
    candies.forEach(candyNum => {
        if (candyNum > actualMaxCandies) {
            actualMaxCandies = candyNum;
        }
    });
    
    let idx = 0;
    for (; idx < candies.length; idx++) {
        candies[idx] = (candies[idx] + extraCandies) >= actualMaxCandies;
    }
    
    return candies;
};