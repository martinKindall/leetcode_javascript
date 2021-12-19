/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    // using prefix sum
    const prefixSum = new Array(arr.length+1).fill(0);
    
    arr.forEach((num, i) => {
        prefixSum[i+1] = prefixSum[i] + num;
    });
    
    let result = 0;
    let i;
    for (i=0; i < arr.length; i++) {
        let j;
        for (j=i; j < arr.length; j += 2) {
            result += prefixSum[j+1] - prefixSum[i];
        }
    }
    
    return result;
};

var sumOddLengthSubarraysVariant = function(arr) {
    let currSubSize;
    let i;
    let result = 0;
    
    for (currSubSize=1; currSubSize <= arr.length; currSubSize += 2) {
        let partialSum = 0;
        for (i=0; i < arr.length - currSubSize + 1; i++) {
            if (i === 0) {
                let j;
                for (j=i; j < (i+currSubSize); j++) {
                    partialSum += arr[j];
                }   
            } else {
                partialSum -= arr[i-1];
                partialSum += arr[i+currSubSize-1];
            }
            result += partialSum;
        }
    }
    
    return result;
};

var sumOddLengthSubarraysBruteForce = function(arr) {
    // brute force would be time O(N^3)
    // as we would have to iterate over the main array (N)
    // approximately N/2 times (odd numbers between 1 and N)
    // and each time sum the subarray which has size 1, 3, 5, ..., N
    
    // we could optimize the solution to be O(N^2) by not doing the inner subarray
    // iteration, but doing a sum-right, substract-left operation on each iteration
    // or using prefix sum
    
    let currSubSize;
    let i;
    let result = 0;
    
    for (currSubSize=1; currSubSize <= arr.length; currSubSize += 2) {
        for (i=0; i < arr.length - currSubSize + 1; i++) {
            let j;
            for (j=i; j < (i+currSubSize); j++) {
                result += arr[j];
            }
        }
    }
    
    return result;
};