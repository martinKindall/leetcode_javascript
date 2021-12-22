/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
 var countGoodTriplets = function(arr, a, b, c) {
    // another solution using sets
    
    let i, j;
    const setA = new Set(), setB = new Set(), setC = new Set();
    
    for (i=0; i < arr.length - 1; i++) {
        for (j=i+1; j < arr.length; j++) {
            const diff = Math.abs(arr[i] - arr[j]);
            if (diff <= a) setA.add(i+","+j);
            if (diff <= b) setB.add(i+","+j);
            if (diff <= c) setC.add(i+","+j);
        }
    }
    
    let goodTriplets = 0;
    
    [...setA].forEach(pair => {
        const [i, j] = pair.split(",").map(char => parseInt(char));
        let k;
        for (k=j+1; k < arr.length; k++) {
            if (setB.has(j+","+k) && setC.has(i+","+k)) {
                goodTriplets++;
            }
        }
    });
    
    return goodTriplets;
};


var countGoodTripletsBrute = function(arr, a, b, c) {
    // a brute force solution would be to generate all
    // the triplets where i < j < k, and checking one by one which
    // one satisfies the constraint
    
    // one small optimization is to do the third loop only if arr_i, arr_j 
    // satisfy the boundary
    
    let goodTriplets = 0;
    
    let i, j, k;
    
    for (i=0; i < arr.length - 2; i++) {
        for (j=i+1; j < arr.length - 1; j++) {
            if (Math.abs(arr[i] - arr[j]) <= a) {
                for (k=j+1; k < arr.length; k++) {
                    if (Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] - arr[k]) <= c) {
                        goodTriplets++;
                    }
                }
            }
        }
    }
    
    return goodTriplets;
};