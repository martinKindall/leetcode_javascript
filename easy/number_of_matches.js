/**
 * @param {number} n
 * @return {number}
 */
 var numberOfMatches = function(n) {
    /*
    n = 10
    o 5 + 2 + 1 + 1 = 9

    n = 11
    o 5 + 3 + 1 + 1 = 10

    n = 12
    o 6 + 3 + 1 + 1 = 11

    n = 13
    o 6 + 3 + 2 + 1 = 12

    n = 14
    o 7 + 3 + 2 + 1 = 13

    so the formula would be n - 1 
    */
    
    return n - 1;
};

var numberOfMatchesIter = function(n) {
    let currTeams = n;
    let matches = 0;
    
    for (; currTeams > 1;) {
        if (currTeams % 2 === 0) {
            matches += currTeams / 2;
            currTeams /= 2;
        } else {
            matches += (currTeams - 1) / 2;
            currTeams = (currTeams - 1) / 2 + 1;
        }
    }
    
    return matches;
};

var numberOfMatchesRecursive = function(n) {
    if (n === 2) return 1;
    if (n === 1 || n === 0) return 0;
    
    if (n % 2 === 0) {
        return n / 2 + numberOfMatches(n/2);
    } else {
        const matches = (n-1) / 2;
        return matches + numberOfMatches(matches + 1);
    }
};