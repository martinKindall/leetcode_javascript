/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
 var countConsistentStrings = function(allowed, words) {
    // time O(M*N) space O(M)
    // instead of using indexOf, we can create a Set and then check if the element 
    // exists or not. I do not know how is indexOf internally built
    
    const allowedSet = allowed.split("").reduce((currSet, char) => {
        return currSet.add(char);
    }, new Set());
    
    return words.reduce((output, word) => {
        const isAllowed = word.split("").reduce((result, char) => {
            return result && allowedSet.has(char);
        }, true);
        return output + (isAllowed ? 1 : 0);
    }, 0);
};

var countConsistentStringsIndexOf = function(allowed, words) {
    // an easy solution would be to use for each char in
    // the word, indexOf in the allowed string, and return true
    // if every char was part of the allowed string
    
    // time would be O(M*N), where N is the length of words and M the length of individual words
    // space O(1)
    
    return words.reduce((output, word) => {
        const isAllowed = word.split("").reduce((result, char) => {
            return result && (allowed.indexOf(char) > -1);
        }, true);
        return output + (isAllowed ? 1 : 0);
    }, 0);
};