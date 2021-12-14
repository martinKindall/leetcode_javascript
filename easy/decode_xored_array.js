/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
 var decode = function(encoded, first) {
    // the problem can be resumed in solving the following equation
    // first XOR X = encoded[0], what is the value of X ?
    // should I convert to base 2? and do bitwise operations like ^ is the XOR
    // is there an inverse operator for XOR ? XOR itself?
    
    // A XOR B = C
    
    // 0 XOR 0 = 0
    // 0 XOR 1 = 1
    // 1 XOR 0 = 1
    // 1 XOR 1 = 0
    
    // If we do A XOR C we obtain B
    // If we do B XOR C we obtain A
    
    // so the solution of the equation is X = first XOR encoded[0]
    // time O(N)
    //space O(N)
    
    const result = [];
    result[0] = first;
    
    encoded.forEach((num, idx) => {
        result[idx+1] = num ^ result[idx];
    });
    
    return result;
};