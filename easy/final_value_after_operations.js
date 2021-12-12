/**
 * @param {string[]} operations
 * @return {number}
 */
 var finalValueAfterOperations = function(operations) {
    // steps
    // iterate sequentially over the operations
    // with a switch case one can decide what to do at each iteration

    // Time O(N) * Switch operator time (not sure if O(N) or O(1))
    // Space: with swtich solution O(1), with dictionary O(N)
    
    let X = 0;
    
    const operationsDict = {
        "--X": (num) => --num,
        "X--": (num) => --num,
        "++X": (num) => ++num,
        "X++": (num) => ++num
    };
    
    operations.forEach(operation => {
        // switch case solution is faster than using the dict, 
        // although I though it was going to be the opposite
        // it makes sense, because I save one asiggnation and a method call
        // which may be slower at the end
        // but at the end it is a matter of whether switch is linear or constant time access
        // if linear, then as operations increase in length, better to
        // switch to the dictionary solution
        
        switch(operation) {
            case "--X":
                --X; break;
            case "X--":
                --X; break;
            case "++X":
                ++X; break;
            case "X++":
                ++X; break;
            default:
                break;
        }
        
        //X = operationsDict[operation](X);
    });
    
    return X;
};


