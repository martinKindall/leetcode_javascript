/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
 var restoreString = function(s, indices) {
    // easy solution: creating a new array. space O(N), time O(N)
    // is there a space O(1) solution using swap?
    // may some kind of sort, like bubble sort
    // that would decrease space complexity but increase time complexity
    
    const result = [];
    
    indices.forEach((strIdx, i) => {
        result[strIdx] = s[i];
    });
    
    return result.join("");
};